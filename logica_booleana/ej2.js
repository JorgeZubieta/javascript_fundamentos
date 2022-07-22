// Definí esMayorDeEdad, que recibe una edad,
// y luego esMenorDeEdad a partir de ella.

function esMayorDeEdad(edad){
    return edad >= 18;
}

function esMenorDeEdad(edad){
    return !esMayorDeEdad(edad);
}

// NOTA
// Cada una de las funciones representa un estado de dos posibles: ser mayor o ser menor de edad. No se puede ser ambos al mismo tiempo y tampoco se puede evitar pertenecer a alguno de los dos grupos. Es decir, ¡siempre sos uno u otro!
// Por eso decimos que son complementarios y que juntos forman: "EL CONJUNTO UNIVERSAL".