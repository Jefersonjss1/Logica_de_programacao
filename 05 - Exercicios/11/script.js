let maior = 0;

for(let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Digite um número"));
    if(num > maior) {
        maior = num
    }
}
console.log(maior)