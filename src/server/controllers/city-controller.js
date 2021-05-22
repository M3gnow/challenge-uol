const cityLib = require('../../lib/city');
const moment = require('moment-timezone');
class CityController {
    async create(req, res) {
        try {
            const { name, state } = req.body;

            if (!name)
                return res.status(404).send('Required [name] not found');

            if (!state)
                return res.status(404).send('Required [state] not found');

            await cityLib.create(name, state);

            return res.status(201).send("Create city with sucess");
        } catch(e) {
            throw e;
        }
    }

    async findByFilter(req, res) {
        try {
            const { name, state } = req.body;

            if (!name && !state)
                return res.status(404).send('Required [name] || [state] not found');
            
            const city = await cityLib.findByFilter(name, state);

            if (!city) 
                return res.status(200).json({});

            return res.status(200).json(city);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new CityController();