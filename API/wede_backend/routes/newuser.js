const router = require('express').Router();
const _ = require('lodash');
const { User, validateUser } = require('../model/user');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {


    try {
        const { error } = validateUser(req.body);

        if (error) return res.status(400).send({ error: error.details });

        let user = await User.findOne({ email: req.body.email });

        if (user)
            return res.status(400).send({ error: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newuser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newuser.save();

        res.cookie('username', newuser.name, { expires: new Date(Date.now() + 900000) });

        res.send(_.pick(newuser, ['_id', 'name'])).status(200);
    }

    catch (err) {
        res.status(400).send(err);
    }

});


module.exports = router;
