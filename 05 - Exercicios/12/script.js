let soma = 0

for(let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite um número"))
    soma += numero
}
console.log(`A soma dos número é : ${soma}`)
console.log(`A média dos números é : ${soma/5}`)