const jwt = require('jsonwebtoken')

const verifyAdminTokenOnly = (req, res, next) => {
    jwt.verify(req.token, 'super_admin_key', (err, decoded) => {
        if(err){
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            next();
        }
    })
}
module.exports = verifyAdminTokenOnly