const jwt = require('jsonwebtoken')

const verifyUserToken = (req, res, next) => {
    jwt.verify(req.token, 'user_key', (err, decoded) => {
        if(err){
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            next();
        }
    })
}
module.exports = verifyUserToken