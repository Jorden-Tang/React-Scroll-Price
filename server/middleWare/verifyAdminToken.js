const jwt = require('jsonwebtoken')

const verifyAdminToken = (req, res, next) => {
    jwt.verify(req.token, 'super_admin_key', (err, decoded) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            console.log('SUCCESS: Connected to protected route');
            next();
        }
    })
}
module.exports = verifyAdminToken 