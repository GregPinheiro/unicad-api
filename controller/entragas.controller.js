const services = require('../services/entregas.services');
const { autoSchema } = require('../middlewares/validation_schema');

const entrega = {
    findAll: services.findAll,
    findOne: services.findOne,
    create: (async (req, res, next) => {
        try {
            await autoSchema.validateAsync(req.body);
            next();
        } catch (error) {
            res.status(500).send(error);
        }
    } , services.create)
}

module.exports = entrega;