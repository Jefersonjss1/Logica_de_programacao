let valor = parseFloat(prompt("Digite o preço do produto"));
let codigo = parseInt(prompt("Qual a forma de pagamento\n[1] À vista dinheiro ou cheque\n [2] À vista no cartão de crédito\n [3] Parcelado em duas vezes (sem juros)\n [4] Parcelar em 3 vezes ou mais (10% juros)"));
 
function compra(codigo) {
    switch(codigo) {
        case 1: 
            const descontoDinheiroCheque = 0.10 * valor
            alert("Você recebeu 10% de desconto")
            const precoFinal = (valor - descontoDinheiroCheque)
            alert(`Preço final ${precoFinal}`)
            break;
        case 2 :
            const descontoCartao = 0.15 * valor
            alert("Você recebeu 15% de desconto")
            const precoTotal = (valor - descontoCartao)
            alert(`Preço final ${precoTotal}`)
            break;
        case 3 :
            alert(`Preço final ${valor}`)
            break;
        case 4 :
            const parceladoEmTres = 0.10 * valor
            alert("Você recebeu 10% de juros")
            const precoTotal1 = (valor + parceladoEmTres)
            alert(`Preço final ${precoTotal1}`)
            break;
        default :
            alert("Opção inválida");
            break;
    }
}
compra(codigo);