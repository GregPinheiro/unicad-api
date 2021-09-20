const { object, date } = require('joi');
const { Entregas } = require('../models');

const create = async (req, res) => {
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

const findAll = async (req, res) => {
    try {      

        const result = await Entregas.findAll();        

        if (result) {
            
            var datas = result.map(response => {
                let dataEntrega = new Date(response.dataEntrega).toDateString();
                return {
                    id: response.id,
                    nomeCliente: response.nomeCliente,
                    dataEntrega
                }
            });

            res.status(200).send(datas);
        } else { 
            res.status(404).send("Nenhum registro encontrado");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const findOne = async (req, res) => {
    try {
        let { id } = req.params;

        const result = await Entregas.findOne({ where: {id}});

        if (result) {
            var datas = {
                id: result.id,
                nomeCliente: result.nomeCliente,
                dataEntrega: new Date(result.dataEntrega).toDateString(),
                pontoPartida: result.pontoPartida,
                pontoDestino: result.pontoDestino
            }

            res.status(200).send(datas);
        } else {
            res.status(404).send(`Nenhum entrega encontrada com id ${id}`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    create,
    findAll,
    findOne
}