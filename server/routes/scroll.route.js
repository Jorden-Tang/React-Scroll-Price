const scrollController = require('../controllers/scroll.controller')

module.exports = (app) => {
    app.post("/api/scroll",scrollController.createNewScroll);
    app.get("/api/scroll", scrollController.getAllScroll);
    app.get("/api/scroll/:equipment", scrollController.findScrollByEquipment);
    app.delete("/api/scroll/:id/delete", scrollController.deleteScroll);
    app.put("/api/scroll/:id/edit", scrollController.updateScroll)
}