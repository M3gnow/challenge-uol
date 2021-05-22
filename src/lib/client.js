const clientModel = require('../models/client-model');
const moment = require('moment-timezone');
const logger = require('../lib/logger');

class Client {
    async create (name, sex, birthDate, age, city) {
        try {
            await clientModel.collection.insertOne({
                name,
                sex,
                birthDate,
                age,
                city,
                created_at: moment().tz(process.env.TIMEZONE).format()
            });
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new Client();