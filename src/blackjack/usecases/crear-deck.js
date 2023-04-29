import _ from 'underscore';

// Esta función crea un nuevo deck

// export const miNombre = 'manuel';

/**
 * Esta función crea un nuevo Deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo ['C','D','H','S'];
 * @param {Array<Stirng>} tiposEspeciales Ejemplo ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];

    if( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatrio como un arreglo de string');
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}


// export default crearDeck;