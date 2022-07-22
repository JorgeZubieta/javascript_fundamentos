// Definí la función tieneContraste.
// Para que la página tenga contraste tiene que tener el fondo claro
// y la letra no o bien tener la letra clara y el fondo no.

function tieneContraste(colorLetra, colorFondo){
    return esTonoClaro(colorLetra) !== esTonoClaro(colorFondo)
}