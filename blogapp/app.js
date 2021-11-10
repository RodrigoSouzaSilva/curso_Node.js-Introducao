// Carregando módulos
const express = require('express')
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require('mongoose')

// Configurações
    // Body Parser
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    // Handlebars
    app.engine('handlebars', handleBars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Mongoose
    mongoose.connect('mongodb://localhost/blogapp').then(() => {
        console.log('Conectado ao mongo');
    }).catch( err => {
        console.log('Falha ao se conectar ao bd' +err);
    })
    // Public
    app.use(express.static(path.join(__dirname,'public')))
// Rotas
    app.get('/',  (req, res) => {
        res.send('<h1>Página principal da aplicação</h1>')
    })

    app.get('/posts', (req, res) => {
        res.send('Lista Posts')
    })

    app.use('/admin',admin) // uso de profixo admin, tem uma series de paginas

// Outros
const PORT = 8081   // Inicia o seridor
app.listen(PORT, () => console.log('Servidor Rodando na porta http://localhost:'+PORT+'/'))