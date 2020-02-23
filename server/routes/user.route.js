const userController = require("../controllers/user.controller")
const checkToken = require("../middleWare/checkToken")

module.exports = (app) =>{
    app.get("/api/user/index", checkToken ,userController.findAllUser);
    app.post("/api/user", userController.createNewUser);
    app.delete("/api/user/:id/delete", checkToken, userController.deleteUser);
    app.put("/api/user/:id/edit", checkToken, userController.updateUser);
}