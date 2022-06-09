// Maneira antiga de se declarar uma função em JavaScript
// function somaDoisNumeros(numero1, numero2) {
//     return numero1 + numero2
// }
    
// Maneira nova de se declarar uma função em JavaScript
let somaDoisNumeros = (numero1, numero2) => {
    return numero1 + numero2
}
console.log(somaDoisNumeros(3, 10))

let subtraiDoisNumeros = (numero1, numero2) => numero1 - numero2
console.log(subtraiDoisNumeros(3, 10))

const maiorDeIdade = (idade) => 
    idade >= 18 ? 'Opa, maior de idade' : 'Opa, menor de idade'
console.log(maiorDeIdade(18))