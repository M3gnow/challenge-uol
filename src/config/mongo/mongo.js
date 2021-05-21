const mongoose = require('mongoose');
const logger = require('../../lib/logger');

class MongoConnection {
    constructor(url) {
        this.url = url;
        this.options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        mongoose.connection.on('connected', () => logger.info(`mongo connected at ${this.url}`));
        mongoose.connection.on('error', () => logger.error('mongo error'));
        mongoose.connection.on('disconnected', () => logger.warn('mongo disconnected'));
        mongoose.connection.on('reconnectFailed', () => logger.error('mongo failed'));
    }

    async connect() {
        await mongoose.connect(this.url, this.options);
    }

    async disconnect() {
        await mongoose.disconnect();
    }
}

module.exports = MongoConnection;