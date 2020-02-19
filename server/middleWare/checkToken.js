const jwt = require("jsonwebtoken")
const verifyAdminToken = require("./verifyAdminToken")

const checkToken = (req, res, next) =>{
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        verifyAdminToken(req, res, next);
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    
    }
}
module.exports = checkToken