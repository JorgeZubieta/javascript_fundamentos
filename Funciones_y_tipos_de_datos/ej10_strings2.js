/**/

function longitud(unString) /* ... */
// Retorna cuan largo es un string
//
// Por ejemplo:
//
//  > longitud("hola")
//  4


function convertirEnMayuscula(unString) /* ... */
// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  > convertirEnMayuscula("hola")
//  "HOLA"


function comienzaCon(unString, otroString) /* ... */
// Retorna un booleano que nos dice si unString empieza con otroString
//
// Por ejemplo:
//
//  > comienzaCon("hola todo el mundo", "hola todo")
//  true

// Veamos si queda claro: definí la función longitudNombreCompleto, que tome un nombre y un apellido, y retorne su longitud total, contando un espacio extra para separar a ambos
function longitudNombreCompleto(nombre, apellido) {
    return longitud(nombre+" "+apellido);
}