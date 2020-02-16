const userController = require("../controllers/user.controller")

module.exports = (app) =>{
    app.post("/api/user", userController.createNewUser);
    app.get("/api/user/:email" ,userController.findUserByEmail);
    app.delete("/api/user/:id/delete", userController.deleteUser);
    app.put("/api/user/:id/edit", userController.updateUser);
}