/*
Questão 06
Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os valores necessários. 

Use a fórmula: M = C * (1+i)t
Onde: 
▪ C = Capital inicial investido 
▪ i = Taxa de juros, em percentual 
▪ t = Tempo do investimento, em meses 
Exiba o resultado com duas casas decimais.


*/

function calcularInvestimento() {
    let capital = Number(prompt("Digite o capital inicial investido (R$):"));
    let taxa = Number(prompt("Digite a taxa de juros mensal (%):"));
    let tempo = Number(prompt("Digite o tempo do investimento (em meses):"));

    let taxaDecimal = taxa / 100;

    let montante = capital * Math.pow((1 + taxaDecimal), tempo);

    console.log("Capital investido: R$ " + capital.toFixed(2));
    console.log("Taxa de juros mensal: " + taxa.toFixed(2) + "%");
    console.log("Tempo: " + tempo + " meses");
    console.log("Montante final: R$ " + montante.toFixed(2));
}

calcularInvestimento();
