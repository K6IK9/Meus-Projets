
/*
8. Faça um programa que receba um inteiro N e crie uma matriz NxN
que contenha os primeiros N² números da sequência de Fibonacci:
Página 2
Ex: N=2 Ex: N=3
1 1 1 1 2
2 3 3 5 8
13 21 34
*/

function sequencia(n) {
    var fibonacci = [0, 1];


    for (var i = 2; i < n * n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

var str1 = [];
var tamanho;
var espacamento = " ";

tamanho = prompt("Digite tamanho do seu array: ");

str1 = sequencia(tamanho);

for (var i = 0; i < tamanho; i++) {
    for (var j = 0; j < tamanho; j++) {
        espacamento = espacamento + str1[i * tamanho + j] + " "; // Acesso aos números corretos da sequência
    }
    console.log(espacamento);
    espacamento = " ";
}