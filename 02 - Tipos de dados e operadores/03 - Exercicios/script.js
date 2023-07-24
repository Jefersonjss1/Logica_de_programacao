console.log("Hello World!");
console.log("Meu nome é Sr.Madruga");
console.log(`Este aqui é o template literals`);


/*01 - Escreva um programa em JavaScript que imprima três mensagens no console: "Hello World!", "Meu nome é Sr. Madruga" e "Este aqui é o template literals". Utilize as funções console.log() e template literals para imprimir as mensagens. */

let nome = "Jeferson";
let idade = 21;
let resultado = "Meu nome é: " + nome + " Minha idade é: " + idade

console.log(resultado)

// acima foi feito a interpolação para juntar duas variaveis com uma terceira variavel

// let é igual var de variavel 

console.log(nome + idade);

console.log("Meu nome é: " + nome + " Minha idade é: " + idade);

// acima foi feito uma concatenação  para juntar Meu nome e Minha idade é ao variavel

console.log(`Meu nome é: ${nome} Minha idade é: ${idade}`);

// Um jeito mais simples de chamar uma variavel com cifrão e crase não precisa ficar abrindo e fachando aspas e colocando sinal de mais

let nome1 = prompt();

alert(`O nome digitado foi ${nome1}`);


