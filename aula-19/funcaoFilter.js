const series = [
    'Stranger Things',
    'Black list',
    'Brooklyn 99',
    'Peaky Blinders'
]

const serieEscolhida = series.filter((serie) => {
    if (serie === 'Peaky Blinders') {
        return serie
    }
})

console.log(series)
console.log(serieEscolhida)

