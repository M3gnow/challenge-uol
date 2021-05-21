const logger = require('../lib/logger');
const express = require('express');
const Router = require('./router');

class Server {
    constructor() {
        this.app = express();
        this.port =  process.env.PORT || 8001;
        this.router = new Router(this.app);
    }

    listen() {
        this.app.listen(this.port, () => logger.info(`server listen at port ${this.port}`));
    }
}

module.exports = Server;
