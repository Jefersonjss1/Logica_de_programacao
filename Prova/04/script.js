// 04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 

let nomeAluno = prompt("Digite o nome do aluno :")

let nota1 = Number(prompt("Digite a nota :"))
let nota2 = Number(prompt("Digite a nota :"))
let nota3 = Number(prompt("Digite a nota :"))
let nota4 = Number(prompt("Digite a nota :"))

let mediaFinal = ((nota1+nota2+nota3+nota4) / 4)
if(mediaFinal >= 7) {
    alert("Aprovado")
} else if(mediaFinal == 7) {
    alert("Recuperação")
} else if(mediaFinal <= 6) {
    alert("Reprovado")
} 