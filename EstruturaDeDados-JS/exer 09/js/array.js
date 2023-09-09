
/*
9. Crie um programa que receba uma matriz de números inteiros e
retorne a soma de todos os seus elementos.
*/
var str1 = [
    [1,2],
    [3,4]
];
var tamanho;
var soma = 0;

for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < str1[i].length; j++) {
        soma += str1[i][j];
    }
}
console.log(soma);
