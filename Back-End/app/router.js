const { Router } = require('express');

const mainController = require('./controllers/maincontroller');

const router = Router();

router.get('/sayHi', mainController.sayHi);


module.exports = router;