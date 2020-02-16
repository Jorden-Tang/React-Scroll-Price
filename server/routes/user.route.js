const userController = require("../controllers/user.controller")

module.exports = (app) =>{
    app.get("/api/user/index", userController.findAllUser);
    app.post("/api/user", userController.createNewUser);
    app.delete("/api/user/:id/delete", userController.deleteUser);
    app.put("/api/user/:id/edit", userController.updateUser);
}