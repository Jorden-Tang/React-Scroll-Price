const verifyAdminTokenOnly = require("./verifyAdminTokenOnly")

const checkAdminToken = (req, res, next) =>{
    if(req.cookies) {
        req.token = req.cookies.myCookie;
        verifyAdminTokenOnly (req, res, next);      
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}
module.exports = checkAdminToken