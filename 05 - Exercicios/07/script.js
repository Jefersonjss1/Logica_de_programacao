let valor = parseFloat(prompt("Digite um numero"))

if(valor > 0) {
    console.log(valor * 2);
}else{
    console.log(valor * 3);
}

valor > 0 ? console.log(valor * 2) : console.log(valor * 3);