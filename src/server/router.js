const mainController = require('./controllers/main-controller');

class Router {
    constructor(app) {
        app.get('/v1/ping', mainController.ping);

        app.get('/v1/megnow', mainController.ping);
    }
}

module.exports = Router;