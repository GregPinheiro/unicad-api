const { Router } = require('express');
const router = Router();
const controller = require('../controller/entragas.controller');
const { autoSchema } = require('../middlewares/validation_schema');
const middleware = require('../middlewares/middlewarevalidatioin');

router.get('/entregas', controller.findAll);
router.get('/entregas/:id', controller.findOne);
router.post('/entregas', middleware(autoSchema) ,controller.create);


module.exports = router;