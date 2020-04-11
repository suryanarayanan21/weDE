const jwt = require('jsonwebtoken');

function auth(req, res, next) {

    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        //populate user details
        req.user = decoded;
        next();
    } catch (ex) {
        // give user another chance to login
        res.status(400).send({ error: 'Invalid token' });
    }
}

module.exports = auth;
