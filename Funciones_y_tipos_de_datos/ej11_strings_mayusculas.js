function convertirEnMayuscula(unString) /* ... */
// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  > convertirEnMayuscula("hola")
//  "HOLA"

// Tené en cuenta que los signos de admiración "¡" y "!" (al igual que los espacios y otros signos de puntuación) son strings y que los strings se pueden concatenar usando el operador +.
function gritar(texto){
    return convertirEnMayuscula("¡"+texto+"!");
}