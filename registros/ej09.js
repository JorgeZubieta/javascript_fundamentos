// Agregando un registro  una lista!

function agregar(unaLista, unElemento) /* ... */
// Inserta unElemento al final de unaLista.

// Definí el procedimiento agregarAPostresRapidos,
// que toma una lista con postres rápidos y un postre por parámetro.
// Si el tiempo de cocción es de una hora o menos,
// se agrega el registro a la lista.

function agregarAPostresRapidos(listaDePostresRapidos, postre){
    if (postre.tiempoDeCoccion <= 60) {
        agregar(listaDePostresRapidos, postre);
    }   
}

// NOTA -> Además, como agregarAPostresRapidos es un procedimiento, no t iene que retornar nada.