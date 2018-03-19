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

function mediana(parametro) {
    var resposta = 0;
    var i = 0;
    var j = 0;
    var parametro = parametro.split(",");

    for(var x = 0; x < parametro.length; x++){
        console.log("Valor do parametro depois do split: " + parametro[x]);
    }

    if (parametro.length < 3) {
        resposta = "Quantidade de valores insuficientes para calculo de mediana";

    } else if (parametro.length % 2 == 0) { // Par
        i = parseInt(parametro.length / 2) - 1;
        i = parseInt(parametro[i]);
        console.log("valor de i: " + i);
        console.log("typeof(i): " + typeof(i));

        j = parseInt(parametro.length / 2);
        j = parseInt(parametro[j]);
        console.log("valor de j: " + j);
        console.log("typeof(j): " + typeof(j));

        resposta = (i + j) / 2;

    } else { // Ímpar
        console.log("entrou no IMPAR");
        i = parseInt(parametro.length / 2);
        resposta = parametro[i];
    }

    console.log("Quantidade de valores: " + parametro.length);
    console.log("valor de resposta: " + resposta);
    return resposta;
}

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