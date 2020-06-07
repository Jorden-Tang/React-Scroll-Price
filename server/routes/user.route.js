const userController = require("../controllers/user.controller")
const checkToken = require("../middleWare/checkToken")
const checkAdminToken = require("../middleWare/checkAdminToken")

module.exports = (app) =>{
    app.get("/api/user/index", checkAdminToken ,userController.findAllUser);
    app.post("/api/user", userController.createNewUser);
    app.delete("/api/user/:id/delete", checkAdminToken, userController.deleteUser);
    app.put("/api/user/:id/edit", checkToken, userController.updateUser);
    app.get("/api/user/:id/hosted_events", checkToken, userController.findHostedEvents);
    app.get("/api/user/:id/joined_events", checkToken, userController.findJoinedEvents);
    app.get("/api/user/:user_id/event/:event_id/leave_party", checkToken, userController.leaveJoinedEvents);
}