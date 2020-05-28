const scrollController = require('../controllers/scroll.controller')
const checkToken = require("../middleWare/checkToken")
const checkAdminToken = require("../middleWare/checkAdminToken")

module.exports = (app) => {
    app.post("/api/scroll", checkAdminToken, scrollController.createOrUpdateScroll);
    app.get("/api/scroll", scrollController.getAllScroll);
    app.get("/api/scroll/:equipment", checkToken,  scrollController.findScrollByEquipment);
    app.post("/api/scroll/:id/delete", checkAdminToken, scrollController.deleteScroll);
    app.put("/api/scroll/:id/edit", checkAdminToken, scrollController.updateScroll)
} 