const mainController = require('./controllers/main-controller');
const cityController = require('./controllers/city-controller');
const clientController = require('./controllers/client-controller');

class Router {
    constructor(app) {
        app.get('/v1/ping', mainController.ping);

        app.post('/v1/city', cityController.create);
    }
}

module.exports = Router;