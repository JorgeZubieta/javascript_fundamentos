// Definí la función contiene que nos diga 
// si una lista contiene un cierto elemento.

// posicion devuelve la posicion del elemento o -1 si no existe
function posicion(unaLista, unElemento) /* ... */
// NOTA -> en realidad devuelve la posición de la primera aparición

// contiene devuele True or false
function contiene(lista, elemento){
    return posicion(lista,elemento) !== -1;   
}