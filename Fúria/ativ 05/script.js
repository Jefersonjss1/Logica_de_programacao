//5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

let n = Number(prompt("Digite um número"));

if(n > 0){
    console.log(`${n} é positivo`)
}else if(n < 0){
    console.log(`${n} é negativo`)
}else{
    console.log("este número é 0")
}