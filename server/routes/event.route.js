const eventController = require("../controllers/event.controller")
const checkToken = require("../middleWare/checkToken")

module.exports = (app) => {
    app.get("/api/event/index", checkToken ,userController.findAllUser);
    app.post("/api/event", checkToken, userController.createNewUser);
    app.delete("/api/event/:id/delete", checkToken, userController.deleteUser);
    app.put("/api/event/:id/edit", checkToken, userController.updateUser);
}