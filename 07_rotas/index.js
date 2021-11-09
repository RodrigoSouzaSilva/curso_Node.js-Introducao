const express = require('express')
const app = express()


// Rotas - caminhos para a sua aplicação
app.get('/', function(req, res){
    res.send('Seja bem vindo ao meu app')
})

app.get('/sobre', function(req, res){
    res.send('minha página sobre')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu Blog')
})


app.listen(8081, function(){
    console.log('servidor rodando na url http://localhot:8081');
})
// localhost:8081
// para deixar seu servidor rodando
// ** IMPORTANTE ** - sempre deixar essa
// linha por ultimo, ao final do código

