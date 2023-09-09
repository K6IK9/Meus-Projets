
/*
7. Faça um programa que receba um inteiro N e crie uma matriz NxN
que contenha os números de 1 a N² em ordem crescente:
Ex: N=3 Ex: N=4
1 2 3 1 2 3 4
4 5 6 5 6 7 8
7 8 9 9 10 11 12
13 14 15 16
*/

var str1 = [];
var tamanho;
var espacamento = " ";
var soma = 1;

tamanho = prompt("Digite tamanho do seu array: ");


str1[tamanho] = [tamanho];

for(var i = 0; i < tamanho; i++){
    for(var j = 0; j < tamanho; j++ ){
        str1[i] = []; 
       str1[i][j] = soma++;
        espacamento = espacamento + str1[i][j] + " ";
        }
        console.log(espacamento);
        espacamento = " ";
}