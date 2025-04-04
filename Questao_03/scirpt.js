/*
Questão 03
Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores. 
*/

let listaNumeros = [];
let menor = 1000000;
let maior = 0;
let soma = 0;


for (let i = 0; i < 10; i++){
    let numero = Number(prompt("Digite um número inteiro: "));
    listaNumeros.push(numero);
    if (numero > maior) {
        maior = numero;
    } else if (numero < menor) {
        menor = numero;
    }
    soma += numero;
}

console.log("A lista de número é: " + listaNumeros);
console.log("O maior número da lista é: " + maior);
console.log("O menor número da lista é: " + menor);
console.log("A soma dos valores da lista é: " + soma);
