function ehMaiorDeIdade(idade) {
    return idade > 17
}

// console.log(ehMaiorDeIdade(18))

function podeTirarCNH(idade) {
    if (idade > 17) {
        console.log('Pode tirar dirigir!')
    }
    else if (idade > 74) {
        console.log('Rapaz, fique em casa ou chame um uber.')
    } 
    else {
        console.log('Desculpe, você é menor de idade!')
    }
}

podeTirarCNH(16)
podeTirarCNH(18)

// 
// que indique pra motorista acima de 74 anos 
// Ficarem em casa