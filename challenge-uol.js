require('dotenv').config();

const Server = require('./src/server/server');
const MongoConnect = require('./src/config/mongo/mongo');
const logger = require('./src/lib/logger');

(async function () {
    try {
        const server =  new Server();
        const mongo = new MongoConnect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_SCHEMA}`);

        await mongo.connect();
        server.listen();

    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
})();