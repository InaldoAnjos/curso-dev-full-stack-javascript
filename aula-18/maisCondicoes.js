function validaFruta(fruta) {
    switch (fruta) {
        case 'Laranja':
            console.log('Temos 30 laranjas por R$ 10.')
            break;
        case 'Morango':
            console.log('Temos 3 bandeijas por R$ 10 cada.')
            break;
        case 'Manga':
            console.log('Temos 10 mangas espadas por R$ 10.')
            break;
        case 'Uva':
            console.log('Temos uma bandeija de uva por R$ 5.')
            break;
        default:
            console.log('Infelizmente não temos essa fruta.')
            break;
    }
}

validaFruta('Laranja')
validaFruta('Manga')
validaFruta('Uva')
validaFruta('Caju')