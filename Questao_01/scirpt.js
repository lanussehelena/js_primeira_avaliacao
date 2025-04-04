/*
Questão 01
Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

let populacaoPaisA = 80000;
let populacaoPaisB = 200000;
let taxaAnualCrescPaisA = 0.03;
let taxaAnualCrescPaisB = 0.015;
let anos = 0;

while (populacaoPaisA < populacaoPaisB) {
    populacaoPaisA += populacaoPaisA * taxaAnualCrescPaisA;
    populacaoPaisB += populacaoPaisB * taxaAnualCrescPaisB;
    anos++;
}

console.log("A quantidade de anos necessário para que a população do país A ultrapasse ou iguale a população do país B é de: " + anos + " anos.")