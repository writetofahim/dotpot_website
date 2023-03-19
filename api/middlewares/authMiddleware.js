const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {

    const authorization = req.header('Authorization')

    if(!authorization){
       return res.status(401).send({ error: 'Unauthorized access!' });
    }

    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = authMiddleware;
