const json = require('./estados.json')
const frutas = ['uva', 'laranja', 'maça', 'abacate', 'manga']
// const estados = json.estados
for(let contador = 0; contador < frutas.length; contador++) {
    console.log(contador)
    console.log(frutas[contador])
}

json.estados.forEach((estado)  => {
    console.log(estado[0])
});
