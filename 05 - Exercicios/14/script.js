let lista = [1, 2, 5];
let nomes = ["Jhonatan", "Jeferson", "Ryan", "Allan"];
lista[2] = "Jeferson foi alterado"

lista[3] = "Ryan foi alterado"

lista.push("Nova adição")


let listaUnida = lista.concat(nomes)
console.log(lista)
console.log(listaUnida)