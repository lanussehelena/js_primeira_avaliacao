/*
Questão 05
Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.
Utilize obrigatoriamente a função prompt() para coletar o raio. 

*/


function calculoCirculo() {
    let raio = Number(prompt("Digite o raio do círculo:"))
    let area = Math.PI * raio ** 2;
    let perimetro = 2 * Math.PI * raio;

    console.log("O raio informado foi: " + raio);
    console.log("A área do círculo é: " + area);
    console.log("O perímetro do círculo é: " + perimetro);

}

calculoCirculo();