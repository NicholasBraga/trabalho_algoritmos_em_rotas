/* Criação do webserver e direcionamento para as rotas, sendo que em cada rota
* uma determinada função será executada.
* Cada função recebe um tipo de parâmetro que é passado pela URL
*/

var http = require('http');
var url = require('url');

// Importando o conteudo do arquivo "funcoes"
var funcoes = require("./funcoes")

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    var parametro = url.parse(request.url, true).query; // Ler url

    // Variável recebe apenas o que vem depois de "?" na url para concatenarmos com a rota desejada
    var q = request.url.split("?");

    switch (request.url) {
        case '/':
            response.write('<h1>Página principal</h1>');
            break;
        case "/fibonacci?" + q[1]:
            response.write('<h1>' + String(funcoes.fibonacci(parametro.a)) + '</h1>');
            break;
        case "/mediana?" + q[1]:
            console.log("valor de q[1]: " + q[1]);
            console.log("valor de parametro.a: " + parametro.a);
            response.write('<h1>' + String(funcoes.mediana(parametro.a)) + '</h1>');
            break;  
        default:
            response.write('<h1>Página não encontrada...</h1>');
            break;
    }
    response.end();
});

server.listen(3000, function () {});

console.log('Servidor iniciado em localhost:3000');