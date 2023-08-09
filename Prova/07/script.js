// 07 - Imagine que você precisa verificar se um número é positivo, negativo ou zero. Escreva um programa que solicite ao usuário que informe um número utilizando a função prompt. Utilize a estrutura condicional if, else if e else para verificar se o número é positivo, negativo ou zero e exibir uma mensagem correspondente no console. 

let numero = Number(prompt("Digite um número"))

if(numero > 0) {
    console.log(`${numero} é positivo`)
} else if (numero == 0) {
    console.log(`${numero} é igual a zero`)
} else {
    console.log(`${numero} é negativo`)
}