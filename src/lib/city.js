const cityModel = require('../config/mongo/models/city-model');
const moment = require('moment-timezone');
const logger = require('../lib/logger');

class City {
    async create(name, state) {
        try {
            const clientInsert = new cityModel({
                name,
                state,
                created_at: moment().tz(process.env.TIMEZONE).toDate()
            });

            await clientInsert.save();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findByFilter(name, state) {
        try {
            const query = {};

            if (name) query.name = name;
            
            if (state) query.state = state;

            const city = await cityModel.findOne(query);

            return city ? city : false;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new City();