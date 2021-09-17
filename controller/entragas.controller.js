const services = require('../services/entregas.services');

const entrega = {
    findAll: services.findAll,
    findOne: services.findOne,
    create: services.create
}

module.exports = entrega;