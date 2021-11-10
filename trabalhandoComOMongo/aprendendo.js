const mongoose = require('mongoose')

// Configurando o Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/aprendendo', { 
        useNewUrlParser: true })
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch(erro => console.log('ERRO ao se conectar: '+erro))

// Model - Usuários
// Definindo Model
    const UsuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true  // campo obrigatório
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })
// Collection
    mongoose.model('usuarios', UsuarioSchema)


const Usuario = mongoose.model('usuarios')

new Usuario({
    nome:'Jhon',
    sobrenome: 'Doen',
    email: 'email@email.com',
    idade: 49,
    pais: 'USA'
}).save()
.then(() => console.log('Usuario salvo'))
.catch(err => console.log('Houve um erro: '+err))