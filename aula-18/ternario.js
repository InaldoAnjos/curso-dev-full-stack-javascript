function maiorDeIdade(idade) {
    return idade >= 18 ? `Sua idade é: ${idade} Sim, você é maior de idade.` :
    `Sua idade: ${idade}. Não, você é menor de idade`
}

// Template String
const nome = 'Xuxinha'
const sobrenome = 'Silva'
const frase = `Olá meu nome é: ${nome} ${sobrenome}, seja bem-vindo!`

const codigoHTML = `
    <p>Hello World</p>
    <div>
        <span>Sejam bem-vindos ao módulo NodeJS</span>
    </div>
`


// console.log(maiorDeIdade(5))
// console.log(maiorDeIdade(18))

console.log(codigoHTML)