const { mainController, cityController, clientController } = require('./controllers');

const express = require('express');
const router = express.Router();

router.get('/ping', mainController.ping);

router.get('/city', cityController.findByFilter);

router.post('/city', cityController.create);

router.get('/client', clientController.findByFilter);

router.post('/client', clientController.create);

router.delete('/client', clientController.deleteById);

router.patch('/client', clientController.updateName);

module.exports = router;