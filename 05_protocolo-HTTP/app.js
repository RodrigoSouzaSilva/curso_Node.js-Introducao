let http = require('http')

// Para criar um servidor
http.createServer(function(req, res){
    res.end('Hello world')
}).listen(8081)
console.log('servidor rodando');

// http://localhost:8081/
// servidor aberto na porta 8081

// a cada alteração e nescessário fechar o servidor
// e rodar novamente
// ctrl + c  -> para o servidor
// no code runner ctrl + Alt + m