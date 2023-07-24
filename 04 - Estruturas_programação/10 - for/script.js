// Imprimir no console numeros de 1 até 5
/*let soma = parseInt(prompt("Digite um numero"))

for(let i = soma; i >= 0; i--) {
    console.log(i)
}*/

// Imprima os números pares de 10 a 1 no console
/*for(let i = 10; i >= 0; i--) {
    console.log(i)
}*/

// Imprima os números pares de 1 a 10 no console
/*for(let i = 1; i >= 10; i--) {
    console.log(i)
}*/

// Imprima os números ímpares de 10 a 30 no console.
/*for(let i = 10; i <= 30; i++) {
    if(i % 2 !== 0)
    console.log(i)
}*/

// Imprima a tabuada de multiplicação do número 7, do 1 ao 10, no console.
/*let multiplicacao = 7;
for(let i = 1; i <= 10; i++) {
    console.log(`A tabuada do número 7 é : ${multiplicacao} X ${i} = ${multiplicacao * i}`);
}*/

// Solicite ao usuário que digite dois números e, em seguida, imprima os números entre esses números no console, em ordem crescente.

/*let numero = parseInt(prompt("Digite um número"));
let numero1 = parseInt(prompt("Digite um número"));

for (let i = numero; i <= numero1; i++) {
    console.log(i);    
}*/

// Solicite ao usuário que digite um número no prompt e, em seguida, imprima os números pares de 0 até esse número no console.

/*let numero = parseInt(prompt("Digite um número"))

for(let i = 0; i <=numero; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}*/
// Imprima os números pares de 0 a 20 no console.
/*for(let i = 0; i <= 20; i+= 2) {
    if (i % 2 === 0) {
        console.log(i)
    }
}*/

// Imprima os números de 100 a 0, decrementando de 5 em 5, no console.
/*for(let i = 100; i >= 0; i-= 5) {
    console.log(i)
}*/

//Desenvolva um programa que solicite ao usuário que digite um número e, em seguida, imprima no console a soma dos números ímpares entre 1 e esse número.

let numero = parseInt(prompt("Digite um número"))
let soma = 0;

for(let i = 1; i <= numero; i += 2) {    
        soma += i;
}

console.log(`A soma do número impares entre 1 e ${numero} é ${soma} `);