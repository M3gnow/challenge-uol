const cityLib = require('../../lib/city');
const clientLib = require('../../lib/client');
const logger = require('../../lib/logger');

class ClientController {
    async create (req, res) {
        try {
            const { name, sex, birthDate, age, cityName } = req.body;

            if (!name) 
                return res.status(400).send('Required [name] not found');

            if (!sex) 
                return res.status(400).send('Required [sex] not found');

            if (!birthDate) 
                return res.status(400).send('Required [birthDate] not found');

            if (!age) 
                return res.status(400).send('Required [age] not found');

            if (!cityName) 
                return res.status(400).send('Required [cityName] not found');

            const findCityByName = await cityLib.findByFilter(cityName);
            
            if (!findCityByName) return res.status(400).send(`Required cityName: [${cityName}] not found`);
            
            const city = {
                name: findCityByName.name,
                state: findCityByName.state,
            };
            
            await clientLib.create(name, sex, birthDate, age, city);

            return res.status(201).send("Create client with sucess");
        } catch (e) {
            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }

    async findByFilter(req, res) {
        try {
            const { name, id } = req.body;

            if (!name && !id)
                return res.status(400).send('Required [name] || [id] not found');

            const clients = await clientLib.findByFilter(name, id);
            
            if (!clients)
                return res.status(200).json({});

            return res.status(200).json(clients);
        } catch (e) {
            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }

    async deleteById(req, res) {
        try {
            const { id } = req.body;

            if (!id) 
                return res.status(400).send('Required [id] not found');

            await clientLib.deleteById(id);

            return res.status(204).send();
        } catch (e) {
            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }

    async updateName(req, res) {
        try {
            const { id, name } = req.body;

            if (!id && !name) 
                return res.status(400).send('Required [id] || [name] not found');
            
            const clientUpdatedName = await clientLib.updateName(id, name);

            return res.status(200).json(clientUpdatedName);
        } catch (e) {
            logger.error(e.message);
            return res.status(500).json({"Internal Server Error": e.message });
        }
    }
}

module.exports = new ClientController();