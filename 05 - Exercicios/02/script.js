
let nome = prompt("Digite seu nome")
let sexo = prompt("Digite seu sexo")
let estadoCivil = (prompt("Digite seu Estado Civil"))

function verifiqueEstado(sexo,estadoCivil) {
    if (sexo == "Feminino" && estadoCivil == "Casada") {
        let tempoCasada = parseInt(prompt("Quanto tempo está casada ?"))
        console.log("É casada a " + tempoCasada + " anos")
    } else{
        console.log("Não é casada")
    }
}
verifiqueEstado(sexo,estadoCivil);
