const clientModel = require('../config/mongo/models/client-model');
const moment = require('moment-timezone');
const logger = require('../lib/logger');

class Client {
    async create (name, sex, birthDate, age, city) {
        try {
            const clientInsert = new clientModel({
                name,
                sex,
                birthDate,
                age,
                city,
                created_at: moment().tz(process.env.TIMEZONE).toDate(),
                updated_at: moment().tz(process.env.TIMEZONE).toDate()
            });

            await clientInsert.save();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findByFilter(name, id) {
        try {
            const query = {};

            if (name) query.name = name;
            
            if (id) query._id = id;

            const client = await clientModel.findOne(query);
            
            if (!client) 
                return false;
            
            client.created_at = moment(client.created_at).tz(process.env.TIMEZONE).format("DD/MM/YYYY")

            return client;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async deleteById(_id) {
        try {
            await clientModel.deleteOne({ _id });
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async updateName(_id, name) {
        try {
            const update = {
                name, 
                updated_at: moment().tz(process.env.TIMEZONE).toDate()
            }

            return await clientModel.findByIdAndUpdate({ _id }, { $set: update }, { new: true });
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new Client();