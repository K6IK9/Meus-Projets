/*
3. Crie um método que receba dois arrays de números inteiros como
parâmetros e retorne um novo array que contenha a união dos
elementos dos dois arrays (eliminando-se os elementos repetidos).
Exemplo de entrada:
[1,2,3,4,5], [4,5,6,7,8]
Saída: [1,2,3,4,5,6,7,8]
Dica: Pesquise a utilização da função includes no Javascript. Ela
Devolve true caso um elemento seja encontrado no array, e false
caso contrário.
*/

/*
var str1 = [1,2,1,4,5];
var str2 = [4,5,6,7,9];
*/
var str3 = [];
var j;

var str1 = new Array(5);
var str2 = new Array(5);


for (var i = 0; i < 5; i++) {
    str1[i] = prompt("Digite Numeros para verificação do primeiro array: ");
}
for (var j = 0; j < 5; j++) {
    str2[j] = prompt("Digite Numeros para verificação do segundo array: ");
}

for (var i = 0; i < str1.length; i++) {
    const elem = str1[i];
    console.log(str3.includes(elem))
    if (!str3.includes(elem)) {
        str3.push(elem);
    }
}
for (var i = 0; i < str2.length; i++) {
    const elem = str2[i];
    if (!str3.includes(elem)) {
        str3.push(elem);
    }
}

console.log(str3)