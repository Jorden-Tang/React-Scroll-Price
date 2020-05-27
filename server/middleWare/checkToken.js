const jwt = require("jsonwebtoken")
const verifyAdminToken = require("./verifyAdminToken")
const verifyUserToken = require("./verifyUserToken")
const checkToken = (req, res, next) =>{
    if(req.cookies) {
        console.log(req.cookies.myCookie)
        req.token = req.cookies.myCookie;
        verifyUserToken (req, res, next, verifyAdminToken)       
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}
module.exports = checkToken