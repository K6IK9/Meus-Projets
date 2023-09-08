/*
5. Escreva um programa que receba do usuário um array de 10 números
inteiros e imprima o menor, o maior e a média dos valores;
*/

var str1 = new Array(10);
var menor = 100;
var maior = 0;
var media = 0;

for (var i = 0; i < str1.length; i++) {
    str1[i] = parseFloat(prompt("Digite números para saber o menor, o maior e a média do primeiro array: "));
    if (isNaN(str1[i])) {
        alert("Por favor, insira um número válido.");
        i--;
    }

}

for (var i = 0; i < str1.length; i++) {

    if (str1[i] < menor) {
        menor = str1[i];
    }

    if (str1[i] > maior) {
        maior = str1[i];
    }
    media += str1[i];
}

media /= str1.length;

console.log("Menor numero no Array " + menor);
console.log("Maior numero no Array " + maior);
console.log("Media entre os valores no Array " + media);