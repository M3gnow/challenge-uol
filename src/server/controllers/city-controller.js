const cityLib = require('../../lib/city');
class CityController {
    async create(req, res) {
        try {
            const { nome, estado } = req.body;

            if (!nome) res.status(400).send('Required [nome] not found');
            if (!estado) res.status(400).send('Required [estado] not found');

            await cityLib.create(nome, estado);

            res.status(200).send("Create city with sucess");
        } catch(e) {
            throw e;
        }
    }
}

module.exports = new CityController();