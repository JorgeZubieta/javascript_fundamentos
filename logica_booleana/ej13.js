// Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por una persona adulta)
// No tener ninguna afección cardíaca
// Definí la función de 3 parámetros puedeSubirse que recibe una altura de una persona en metros, si está acompañada y si tiene alguna afección cardíaca.

function puedeSubirse(alturaEnMetros, estaAcompanada, tieneAfeccionCardiaca){
    return (alturaEnMetros >= 1.5 && !tieneAfeccionCardiaca) || (alturaEnMetros===1.2 && estaAcompanada && !tieneAfeccionCardiaca);
}

// > puedeSubirse(1.7, false, true)
// false // no puede subirse
// porque aunque tiene mas de 1.5m, 
// tiene una afección cardíaca.