let operacao = parseInt(prompt("Qual operação você quer usar\n [1] Multiplicação\n [2] Divisão\n [3]Soma\n [4]Subtração"))


function calculadora(operacao) {
    switch(operacao) {
        case 1:
            let multiplicacao = parseFloat(prompt("Digite o número"))
            for(let i = 1; i <= 10; i++) {
                console.log(`${multiplicacao} X ${i} = ${multiplicacao*i}`)
            }
            break;

        case 2:
            let divisao = parseFloat(prompt("Digite o número"))
            for(let i = 1; i <= 10; i++) {
                console.log(`${divisao} / ${i} = ${divisao/i}`)
            }
            break;

        case 3:
            let soma = parseFloat(prompt("Digite o número"))
            for(let i = 1; i <= 10; i++) {
                console.log(`${soma} + ${i} = ${soma+i}`)
            }
            break;

        case 4:
            let subtracao = parseFloat(prompt("Digite um número"))
            for(let i = 1; i <= 10; i++) {
                console.log(`${subtracao} - ${i} = ${subtracao-i}`)
            }    
            break;               
    }
}
calculadora(operacao)

/*function teste(x) {
    try{
        x += 1 
    } catch(error) {
        console.log(error.message)
    }
}

teste(x)*/
