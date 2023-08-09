// 05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. 

let nome = prompt("Nome do cliente :");

let valorTotal = Number(prompt("Digite o valor da compra :"));

if(valorTotal >= 1000) {
    let desconto = (valorTotal*0.90)
    alert(`O valor total com desconto é : ${desconto}`)
} else {
    alert(`O valor da compra é ${valorTotal}`)
}