//6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

let letra= prompt("Digite uma letra");

if(letra === "a" || letra === "e" || letra === "i" ||letra === "o" ||letra === "u") {
    console.log(`${letra} É uma vogal`);
} else if(letra === "A" || letra === "E" || letra === "I" ||letra === "O" ||letra === "U") {
    console.log(`${letra} É uma vogal`);
}else if(!isNaN(letra)){
    console.log(`${letra} Não é uma letra`)
}else{
    console.log(`${letra} É uma consoante`);
}
