const { Router } = require('express');
const router = Router();
const controller = require('../controller/entragas.controller');

router.get('/entregas', controller.findAll);
router.get('/entregas/:id', controller.findOne);
router.post('/entregas', controller.create);


module.exports = router;