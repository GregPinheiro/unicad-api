const { object } = require('joi');
const { Entregas } = require('../models');

const criarRegistro = async (req, res) => {
    try {
        let { nomeCliente, dataEntrega, pontoPartida, pontoDestino } = req.body;

        await Entregas.create({
            nomeCliente,
            dataEntrega,
            pontoPartida,
            pontoDestino
        });

        res.status(200).send('Registro criado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

const listarRegistros = async (req, res) => {
    try {
        let offset = 0;
        let limit = 5;        

        let params = req.query;
        if (params.offset) { offset = parseInt(params.offset); }
        if (params.limit) { limit = parseInt(params.limit); }        

        let datas = await Entregas.findAll();
        let count = Object.keys(datas).length;

        if (datas) {
            let length = limit + offset;
            let result = datas.slice(parseInt(offset),length);

            let data = {
                count,
                limit,
                offset,
                result
            }
            res.status(200).send(data);
        } else { 
            res.status(404).send("Nenhum registro encontrado");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const rotaEntrega = async (req, res) => {
    try {
        let { id } = req.params;

        const result = await Entregas.findOne({ where: {id}});

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send(`Nenhum entrega encontrada com id ${id}`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    criarRegistro,
    listarRegistros,
    rotaEntrega
}