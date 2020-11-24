const jwt = require('jsonwebtoken');
const tokenMiddleware = {}

tokenMiddleware.verifyToken = (req, res,next) => {
    const bearerHeader = req.headers['authorization'];
    if ( bearerHeader !== undefined ) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, 'secretkey', (err, authData)=>{
            if(err) {
                // In case of invalid authorization token
                res.status(401);
                res.json( {message:"Invalid Token"});
            }
            else{
                // In case authorization token gets validated
                next();
            }
        })
    }
    else {
        // In case of not authorization field in request header
        res.status(403);
        res.json( {message:"No authorization field in request header"});
    }
}

module.exports = tokenMiddleware;