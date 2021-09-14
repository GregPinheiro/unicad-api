const Joi = require('joi');

const autoSchema = Joi.object({
    nomeCliente: Joi.string().min(5).max(50).required(),
    dataEntrega: Joi.date().required(),
    pontoPartida: Joi.string().min(10).required(),
    pontoDestino: Joi.string().min(10).required()
});

module.exports = {
    autoSchema
}