
/*
10.Crie um método que receba uma matriz de números inteiros e
imprima a soma dos elementos da diagonal principal.
*/

var soma = 0;

var str1 = [];
var tamanho = 0;

tamanho = prompt("Digite o tamanho de sua matriz");

for (var i = 0; i < tamanho; i++) {
    str1[i] = [];
    for (var j = 0; j < tamanho; j++) {

        str1[i][j] = parseFloat(prompt("Digite um numero da matriz [" + i + "]" + "[" + j + "]"));
    }
}

for (let i = 0; i < str1.length; i++) {
    soma += str1[i][i];
}

console.log(soma);
