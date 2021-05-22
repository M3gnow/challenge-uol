const logger = require('../lib/logger');
const express = require('express');
const Router = require('./router');

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.port = process.env.PORT || 8001;
        this.app.use('/v1', Router);
    }

    listen() {
        this.app.listen(this.port, () => logger.info(`server listen at port ${this.port}`));
    }
}

module.exports = Server;
