const scrollController = require('../controllers/scroll.controller')

module.exports = (app) => {
    app.post("/api/scroll", scrollController.createNewScroll);
    app.get("/api/scroll", scrollController.getAllScroll);
    app.delete("/api/scroll/:id/delete", scrollController.deleteScroll);

    
}