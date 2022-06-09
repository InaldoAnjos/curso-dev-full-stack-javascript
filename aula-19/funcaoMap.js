const filmes = [
    'A batalha de Riddick',
    'Lagoa azul',
    'Senhor dos anéis - A sociedade do anel',
    'Senhor dos anéis - As duas torres',
    'Senhor dos anéis - O retorno do Rei',
    'Rambo'
]

// let filmesDoMap = filmes.map(function(elementoDoArray) {
//     return elementoDoArray + ' Algo Mais'
// })

// console.log(filmesDoMap)

const numeros = [ 10, 5, 8, 20, 13 ]
//Criar um Map para pegar o array de numeros
// e multiplicar * 2
const numerosMultiplicadosPorDois = numeros.map((numero) => {
    return numero * 2
})

console.log(numeros)
console.log(numerosMultiplicadosPorDois)
