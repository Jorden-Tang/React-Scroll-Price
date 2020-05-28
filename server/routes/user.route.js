const userController = require("../controllers/user.controller")
const checkToken = require("../middleWare/checkToken")
const checkAdminToken = require("../middleWare/checkAdminToken")

module.exports = (app) =>{
    app.get("/api/user/index", checkAdminToken ,userController.findAllUser);
    app.post("/api/user", userController.createNewUser);
    app.delete("/api/user/:id/delete", checkAdminToken, userController.deleteUser);
    app.put("/api/user/:id/edit", checkToken, userController.updateUser);
}