const cityLib = require('../../lib/city');
const clientLib = require('../../lib/client');

class ClientController {
    async create (req, res) {
        try {
            const { name, sex, birthDate, age, cityName } = req.body;

            if (!name) 
                return res.status(404).send('Required [name] not found');

            if (!sex) 
                return res.status(404).send('Required [sex] not found');

            if (!birthDate) 
                return res.status(404).send('Required [birthDate] not found');

            if (!age) 
                return res.status(404).send('Required [age] not found');

            if (!cityName) 
                return res.status(404).send('Required [cityName] not found');

            const findCityByName = await cityLib.findByName(cityName);
            
            if (!findCityByName) res.status(404).send(`Required cityName: [${cityName}] not found`);

            const city = {
                name: findCityByName.name,
                state: findCityByName.state,
            };
            
            await clientLib.create(name, sex, birthDate, age, city);

            return res.status(201).send("Create client with sucess");
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new ClientController();