const express = require('express');
const mainController = require('./controllers/mainController');
const eventsController = require('./controllers/eventsController');

const router = express.Router();

module.exports = router;

router.get('/', mainController.showHome);
router.get('/allhotdogs', eventsController.showHotDogs);
