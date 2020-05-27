const jwt = require('jsonwebtoken')

const verifyUserToken = (req, res, next, verifyAdminToken) => {
    jwt.verify(req.token, 'user_key', (err, decoded) => {
        if(err){
            verifyAdminToken(req, res, next);
        } else {
            //If token is successfully verified, we can send the autorized data 
            next();
        }
    })
}
module.exports = verifyUserToken