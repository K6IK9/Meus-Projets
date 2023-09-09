/*
6. Faça um programa que construa e imprima a seguinte matriz de
inteiros:
8 8 8
8 8 8
8 8 8
*/

var str1 = [];
str1[0] = [];
var espacamento = " ";

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++ ){
        str1[i] = []; 
        str1[i][j] = prompt("Digite seu valor para sua matriz");
        espacamento = espacamento + str1[i][j] + " ";
        }
        console.log(espacamento);
        espacamento = " ";
}
