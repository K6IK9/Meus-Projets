/* 
1. Crie um programa que receba dois arrays de números inteiros como
parâmetros e retorne um novo array que seja a concatenação deles.
Exemplo de entrada:
[1,2,3,4,5], [6,7,8,9,10]
Saída: [1,2,3,4,5,6,7,8,9,10]

*/

var str1 = new Array(5);
var str2 = new Array(5);

for(var i = 0; i < 5; i++){
    str1[i] = prompt("Digite Numeros para concatenação do primeiro array: ");
}
for(var j = 0; j < 5; j++){
    str2[j] = prompt("Digite Numeros para concatenação do segundo array: ");
}

var str3 = str1 + "," + str2;

console.log(str3);