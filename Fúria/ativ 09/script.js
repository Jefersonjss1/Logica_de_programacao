//9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

let num = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

let operacao = prompt("Digite a operação\n [+]Soma\n [-]Subtração\n [*]Multiplicação\n [/]Divisão")

switch(operacao){
    case "+":
        console.log(`${num} + ${num2} = ${num + num2}`)
        break;
    case "-":
        console.log(`${num} - ${num2} = ${num - num2}`)
        break;
    case "*":
        console.log(`${num} * ${num2} = ${num * num2}`)
        break;
    case "/":
        console.log(`${num} / ${num2} = ${num / num2}`)
        break;
        default:
            console.log("Operação inválida")
}