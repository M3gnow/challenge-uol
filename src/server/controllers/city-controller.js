const cityLib = require('../../lib/city');

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
}

module.exports = new CityController();