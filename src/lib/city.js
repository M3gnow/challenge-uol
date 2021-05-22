const cityModel = require('../models/city-model');
const moment = require('moment-timezone');

class City {
    async create(name, state) {
        try {
            await cityModel.collection.insertOne({
                name,
                state,
                created_at: moment().tz(process.env.TIMEZONE).format()
            });
        } catch (e) {
            throw e;
        }
    }

    async findByFilter(name, state) {
        try {
            const query = {};
            console.log(name, state)
            if (name) query.name = name;
            
            if (state) query.state = state;

            const city = await cityModel.collection.find(query).toArray();

            if (!city.length) return false;

            city.map((city) => city.created_at = moment(city.created_at).tz(process.env.TIMEZONE).format("DD/MM/YYYY"));

            return city;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new City();