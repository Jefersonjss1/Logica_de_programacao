//3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

let n = Number(prompt("Digite um número: "))

console.log(`Os numeros pares entre 1 e ${n} são:`)

for(let i =1; i <= n; i++){
    if(i%2 ==0){
        console.log(i)
    }
}