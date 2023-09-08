/*
2. Crie um programa que receba dois arrays de números inteiros como
parâmetros e retorne um novo array que contenha apenas os
elementos que sejam comuns aos dois arrays (ou seja, a
intersecção dos arrays).
Exemplo de entrada:
[1,2,3,4,5], [1,2,9,5,10]
Saída: [1,2,5]

*/
var str3 = [];
var j;

var str1 = new Array(5);
var str2 = new Array(5);


for (var i = 0; i < 5; i++) {
    str1[i] = prompt("Digite Numeros para intersecção do primeiro array: ");
}
for (var j = 0; j < 5; j++) {
    str2[j] = prompt("Digite Numeros para intersecção do segundo array: ");
}

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        if (str1[i] === str2[j]) {
            str3.push(str1[i]);

        }
    }
}

console.log(str3);