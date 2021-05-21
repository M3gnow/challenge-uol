const cityModel = require('../models/city-model');
const moment = require('moment-timezone');

class City {
    async create(nome, estado) {
        try {
            await cityModel.collection.insertOne({
                name: nome,
                state: estado,
                created_at: moment().tz(process.env.TIMEZONE).format()
            });
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new City();