let nome = (prompt("Digite seu nome"));
let idade = parseFloat(prompt("Digite sua idade"));

if (idade >= 18) {
    console.log("Você pode tirar sua CNH")
}else{
    console.log("Você não tem idade para dirigir")
}

idade >= 18 ? console.log("Você pode tirar sua CNH") : console.log("Você não tem idade para dirigir")