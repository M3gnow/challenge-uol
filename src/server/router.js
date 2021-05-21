const mainController = require('./controllers/main-controller');
const cityController = require('./controllers/city-controller');
const clientController = require('./controllers/client-controller');

class Router {
    constructor(app) {
        app.get('/v1/ping', mainController.ping);

        app.get('/v1/megnow', mainController.ping);
    }
}

module.exports = Router;