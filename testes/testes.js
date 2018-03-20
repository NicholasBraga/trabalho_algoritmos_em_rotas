function mediana(parametro) {
    var resposta;
    var i;
    var j;

    if (parametro.length < 3) {
        resposta = "Quantidade de valores insuficientes para calculo de mediana";

    }else if (parametro.length % 2 == 0) { // Par
        i = parseInt(parametro.length / 2) - 1;
        j = parseInt(parametro.length / 2)

        resposta = (parametro[i] + parametro[j]) / 2;

    } else { // Ímpar
        i = parseInt(parametro.length / 2);
        resposta = parametro[i];
    }

    return console.log("Quantidade de valores: " + parametro.length +  "\nresposta: " + resposta);
}

var newArr = [10,2,3,34,5,1];
mediana(newArr);