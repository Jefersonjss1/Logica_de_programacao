// 02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 

let valorCompra = Number(prompt("Digite o valor da compra"))

let valorDisponivel = Number(prompt("Digite quanto tem de dinheiro"))

let operacao = Number(prompt("Digite a operação desejada\n\n [1] Soma\n [2] Subtração\n [3] Multiplicação\n [4] Divisão"))

switch(operacao) {
    case 1:
    let soma = (valorCompra + valorDisponivel)
    console.log(`A soma do valor da compra mais o valor disponivel é ${soma}`)
    break;

    case 2:
    let subtracao = (valorCompra - valorDisponivel)
    console.log(`A subtração do valor da compra mais o valor disponivel é ${subtracao}`)
    break;

    case 3:
    let multiplicacao = (valorCompra * valorDisponivel)
    console.log(`A multiplicação do valor da compra mais o valor disponivel é ${multiplicacao}`)
    break;

    case 4:
    let divisao = (valorCompra / valorDisponivel)
    console.log(`A divisão do valor da compra mais o valor disponivel é ${divisao}`)
    
}
