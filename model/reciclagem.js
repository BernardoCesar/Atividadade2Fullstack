const mongoose = require('mongoose')


const reciclagemSchema = mongoose.Schema({
    item: {type: String, required: true},
    imagem: {type: String, required: true},
    pontos: {type: Number, required: true},
    data: {type: Date, required: true},
    peso: {type: Number, required: true}
});

const Reciclagem=mongoose.model('Reciclagem', reciclagemSchema);

module.exports = Reciclagem;
