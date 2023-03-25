const jwt = require('jsonwebtoken');

function adminMiddleware(req, res, next) {

    const authorization = req.header('Authorization')

    if(!authorization){
        return res.status(401).send({ error: 'Unauthorized access!' });
    }

    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.user.role !== 'ADMIN') {
            return res.status(401).send({ error: 'Unauthorized access! Only admin users can perform this action.' });
        }
        req.user = decoded;
        next();
        
    } catch (e) {
        console.log(e)
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = adminMiddleware;
