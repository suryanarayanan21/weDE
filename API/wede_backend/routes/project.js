const router = require('express').Router();
const _ = require('lodash');
const { project, validateProject } = require('../model/projectdb');
const { User } = require('../model/user');
// const auth = require('../middleware/auth');


router.post('/', async (req, res) => {

    try {

        const { error } = validateProject(req.body);

        if (error) return res.status(400).send({ error: error.details });

        let { projectID, projectName, code, collaborators } = req.body;

        let projecti = await project.findOne({ projectID: req.body.projectID });

        let newproject = new project({

            projectID,
            projectName,
            code,
            collaborators
        }
        );

        if (!projecti) {
            await newproject.save();
            res.send(_.pick(newproject, ['_id', 'projectName'])).status(200);
        }

        else {
            await project.updateOne({ projectID: req.body.projectID }, {
                $set: {

                    projectID,
                    projectName,
                    code,
                    collaborators
                }
            });
            res.send(_.pick(newproject, ['_id', 'projectName'])).status(200);

        }


    }
    catch (err) {
        res.status(400).send({ error: err });
    }

});



router.post('/delete', async (req, res) => {

    try {

        let projecti = await project.findOne({ projectID: req.body.projectID }).remove();
        res.send(`Successfully deleted ${req.body.projectID} `).status(200);

    }
    catch (err) {
        res.status(400).send({ error: err });
    }

});

router.post('/getprojects', async (req, res) => {

    try {

        let user = await User.findOne({ email: req.body.email });

        if (!user)
            return res.status(400).send({ error: 'User not found' });



        projects = await project.find({ collaborators: { $in: user.email } })

        res.send(projects).status(200);

    }
    catch (err) {
        res.status(400).send({ error: err });
    }

});

module.exports = router;
