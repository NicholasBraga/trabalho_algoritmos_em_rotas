// Arquivo contém os algoritmos de fibonacci, mediana, cramer e mmq que estão sendo empacotados para exportação
// e importação em outros aquivos

function fibonacci(parametro) {
    var a = 0;
    var b = 1;
    var c;
    var newArray = [];

    for (let i = 0; i < parametro; i++) {
        c = a + b;
        a = b;
        b = c;

        newArray[i] = c;
    }

    return newArray;
}

// Mediana - Recebe um conjunto numérico e analisa: se a quantidade de valores for > 2 e for par, pega os dois números
// do meio do conjunto, soma-os e divide por 2. Se a quantidade de valores for > 2 e for ímpar, simplesmente retorna
// o valor do meio do conjunto.
// Se o valor for < 3, apresenta uma mensagem informando que a quantidade de valores é insuficiente para o cálculo.
function mediana(parametro) {
    var resposta = 0;
    var i = 0;
    var j = 0;
    var parametro = parametro.split(",");

    if (parametro.length < 3) {
        resposta = "Quantidade de valores insuficientes para cálculo de mediana";

    } else if (parametro.length % 2 == 0) { // Par
        i = parseInt(parametro.length / 2) - 1;
        i = parseInt(parametro[i]);

        j = parseInt(parametro.length / 2);
        j = parseInt(parametro[j]);

        resposta = (i + j) / 2;

    } else { // Ímpar
        i = parseInt(parametro.length / 2);
        resposta = parametro[i];
    }

    return resposta;
}

//Método de Cramer (matriz 2x2)
function crammer(parametro) {

    return 0;
}

function mmq() {
    return 0;
}

module.exports = {
    fibonacci: fibonacci,
    mediana: mediana,
    crammer: crammer,
    mmq: mmq

}