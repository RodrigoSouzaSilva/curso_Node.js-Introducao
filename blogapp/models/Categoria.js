const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Categoria = new Schema({
    nome: {
        type: String,
        required: true,
        default: 'Um nome padrão' // valor default
    },
    slug: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('categorias', Categoria)