const jwt = require('jsonwebtoken')

const verifyAdminToken = (req, res, next, verifyUserToken) => {
    jwt.verify(req.token, 'super_admin_key', (err, decoded) => {
        if(err){
           
            verifyUserToken(req, res,next);
        } else {
            //If token is successfully verified, we can send the autorized data 
            next();
        }
    })
}
module.exports = verifyAdminToken 