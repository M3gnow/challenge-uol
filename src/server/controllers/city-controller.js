const cityLib = require('../../lib/city');
const logger = require('../../lib/logger');

class CityController {
    async create(req, res) {
        try {
            const { name, state } = req.body;

            if (!name)
                return res.status(400).send('Required [name] not found');

            if (!state)
                return res.status(400).send('Required [state] not found');

            await cityLib.create(name, state);

            return res.status(201).send("Create city with sucess");
        } catch(e) {
            if (e.code = 11000) {
                return res.status(400).send("Can't possible create duplicate city");    
            }

            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }

    async findByFilter(req, res) {
        try {
            const { name, state } = req.body;

            if (!name && !state)
                return res.status(400).send('Required [name] || [state] not found');
            
            const cities = await cityLib.findByFilter(name, state);

            if (!cities)
                return res.status(200).json({});

            return res.status(200).json(cities);
        } catch (e) {
            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }
}

module.exports = new CityController();