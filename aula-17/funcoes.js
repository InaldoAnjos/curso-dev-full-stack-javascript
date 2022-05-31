// Desafio
// Eu quero somar 2 números e ter um resultado da soma desses números
function somarDoisNumeros(numero1, numero2) {
    console.log(numero1 + numero2)
}

// somarDoisNumeros(10, 15)
// somarDoisNumeros(30, 100)
// somarDoisNumeros(1000, 2000)

function subtrairDoisNumeros(numero1, numero2) {
    return numero1 - numero2
}

let resultadoDaSubtracao = subtrairDoisNumeros(10, 10)
console.log(resultadoDaSubtracao)

// Eu quero uma função que retorne nome e sobrenome.
let nomeCompleto = function(primeiroNome, segundoNome) {
    return primeiroNome + ' ' + segundoNome
}

console.log(nomeCompleto('Xuxinha', 'Silva'))