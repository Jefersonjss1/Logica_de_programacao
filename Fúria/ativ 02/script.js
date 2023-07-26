//2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

let num = Number(prompt("Digite um número: "))

if(num %2==0){
    console.log(`${num} é par `)
}else{
    console.log(`${num} é impar`)
}