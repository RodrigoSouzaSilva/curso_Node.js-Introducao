const express = require('express')
const app = express()


app.get('/', function(req, res){
    res.send('Seja bem vindo ao meu app')
})

app.get('/sobre', function(req, res){
    res.send('minha página sobre')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu Blog')
})


////////////////
// PARAMETROS //
////////////////

app.get('/ola/:nome/:cargo/:cor', function(req, res){
    res.send(`Olá ${req.params.nome}, Seu cargo é ${req.params.cargo}, Sua cor favorita é: ${req.params.cor}`);
})
// http://localhost:8081/ola/rodrigo/programador
// {"nome":"rodrigo","profissao":"programador"}


app.listen(8084, function(){
    console.log('servidor rodando');
})


