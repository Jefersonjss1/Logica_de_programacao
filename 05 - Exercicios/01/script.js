// 01 - Faça uum algoritmo que leia os valores A, B, C e imprima na tela se a soma de A = B é menor que C.
// 02 - Faça um algoritmo que leia o nome. o sexo e o estado civil de uma pessoa. Caso sexo seja "Feminino" e estado civil seja "CASADA", solicitar o tempo de casada (anos)

let a = parseFloat(prompt("Digite a letra A"));
let b = parseFloat(prompt("Digite a letra B"));
let c = parseFloat(prompt("Digite a letra C"));

function maiorQueC(a,b,c) {
    if (a + b < c) {
        return "A soma de A + B é menor que C"
    } 
    return "A soma de A + B é maior que C"
} 
console.log(maiorQueC(a,b,c));


