/*
4. Escreva um programa que leia um vetor de 5 números do usuário e
remova um elemento específico lido.
*/



var str1 = new Array(5);
var Numescolhido;
var str2 = [];

for (var i = 0; i < 5; i++) {
    str1[i] = prompt("Digite Numeros para verificação do primeiro array: ");
}


Numescolhido = prompt("Digite qual o numero que deseja remover");
for (var i = 0; i < str1.length; i++) {
    if (str1.includes(Numescolhido)) {
        if (str1[i] !== Numescolhido) {
            str2.push(str1[i]);
        }
    }
}
console.log(str2);