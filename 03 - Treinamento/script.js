const nota1 = parseFloat(prompt("Digite Sua Nota"))
const nota2 = parseFloat(prompt("Digite Sua Nota"))
const nota3 = parseFloat(prompt("Digite Sua Nota"))
const nota4 = parseFloat(prompt("Digite Sua Nota"))

let media = ((nota1 + nota2 + nota3 + nota4) / 4)

if (media < 7) {
    console.log(`Você foi reprovado ${media.toFixed(2)}`) 
} else {
    console.log(`Você foi aprovado ${media.toFixed(2)}`)
}
