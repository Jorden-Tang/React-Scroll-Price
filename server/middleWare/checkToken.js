
const verifyAdminToken = require("./verifyAdminToken")
const verifyUserToken = require("./verifyUserToken")

const checkToken = (req, res, next) =>{
    if(req.cookies) {
        req.token = req.cookies.myCookie;
        verifyAdminToken (req, res, next, verifyUserToken)       
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}
module.exports = checkToken