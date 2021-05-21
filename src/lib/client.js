const clientModel = require('../models/client-model');
const moment = require('moment-timezone');

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
            console.log(e);
            throw e;
        }
    }
}

module.exports = new Client();