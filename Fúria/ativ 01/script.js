//1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite um número: "))

if(n1 < n2 ){
    console.log(`Esse é o maior número: ${n2}`)
}else{
    console.log(`Este é o maior número: ${n1}`)
}