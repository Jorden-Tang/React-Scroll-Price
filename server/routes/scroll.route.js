const scrollController = require('../controllers/scroll.controller')
const checkToken = require("../middleWare/checkToken")

module.exports = (app) => {
    app.post("/api/scroll",checkToken, scrollController.createNewScroll);
    app.get("/api/scroll", scrollController.getAllScroll);
    app.get("/api/scroll/:equipment", scrollController.findScrollByEquipment);
    app.delete("/api/scroll/:id/delete", checkToken, scrollController.deleteScroll);
    app.put("/api/scroll/:id/edit", checkToken, scrollController.updateScroll)
}