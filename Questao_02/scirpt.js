/*
Questão 02
Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. Utilize obrigatoriamente a função prompt() para coletar os números.
*/

let listaNumeros = [];
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++){
    let numero = Number(prompt("Digite um número inteiro: "));
    listaNumeros.push(numero);
    if (numero % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("A lista de números inteiros criada foi: " + listaNumeros);
console.log("A lista tem um total de " + pares + " números pares e " + impares + " de números ímpares.");