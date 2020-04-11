const router = require('express').Router();
const _ = require('lodash');
const Joi = require('@hapi/joi');
const { User } = require('../model/user');
const bcrypt = require('bcrypt');
// const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
})

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) return res.status(400).send({ error: error.details });

    let user = await User.findOne({ email: req.body.email });

    if (!user)
        return res.status(400).send({ error: 'Invalid User name or password' });

    const validatepassword = await bcrypt.compare(req.body.password, user.password);

    if (!validatepassword)
        return res.status(400).send({ error: 'Invalid User name or password' });

    res.cookie('username', user.eventNames, { expires: new Date(Date.now() + 900000) });

    res.send({ userid: user._id }).status(200);
});


function validateUser(req) {
    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: ['com', 'net', 'in'] } }),
        password: Joi.string()
    });

    return schema.validate(req);
}

module.exports = router;
