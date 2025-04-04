/*
Questão 04
Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-seque: 
a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial; 
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior.
Faça um programa que determineo salário atual desse funcionário. 
d. Após concluir isto, faça uma segunda versão do seu código que permita o usuário informar o salário inicial do funcionário.
Utilize obrigatoriamente a função prompt() para coletar o salário inicial. 

*/


let salario = 1000;
let anoAtual = new Date().getFullYear();
let percentualDeAumento = 0.015;

for (let ano = 1996; ano <= anoAtual; ano++) {
    salario += salario * percentualDeAumento;
    percentualDeAumento *= 2;
}

console.log(`O salário atual em ${anoAtual} R$ ${salario.toFixed(2)}`);


//Usando prompt

let salario2 = Number(prompt("Informe o valor do salário incial:"));
let anoAtual2 = new Date().getFullYear();
let percentualDeAumento2 = 0.015;

for (let ano = 1996; ano <= anoAtual2; ano++) {
    salario2 += salario2 * percentualDeAumento2;
    percentualDeAumento2 *= 2;
}

console.log(`O salário atual em ${anoAtual2} R$ ${salario2.toFixed(2)}`);

