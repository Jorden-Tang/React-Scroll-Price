const eventController = require("../controllers/event.controller")
const checkToken = require("../middleWare/checkToken")

module.exports = (app) => {
    app.get("/api/event/index", checkToken, eventController.findAllEvent);
    app.get("/api/event/:id", checkToken, eventController.findEventById);
    app.post("/api/event", checkToken, eventController.createNewEvent);
    app.delete("/api/event/:id/delete", checkToken, eventController.deleteEvent);
    app.put("/api/event/:id/edit", checkToken, eventController.updateEvent);
    app.put("/api/event/:event_id/user/:user_id/:buyer_type", checkToken, eventController.joinEvent);
}