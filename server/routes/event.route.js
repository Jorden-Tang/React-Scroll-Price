const eventController = require("../controllers/event.controller")
const checkToken = require("../middleWare/checkToken")

module.exports = (app) => {
    app.get("/api/event/index", checkToken ,eventController.findAllEvent);
    app.post("/api/event", eventController.createNewEvent);
    app.delete("/api/event/:id/delete", checkToken, eventController.deleteEvent);
    app.put("/api/event/:id/edit", checkToken, eventController.updateEvent);
    app.put("/api/event/:id/join", checkToken, eventController.joinEvent)
}