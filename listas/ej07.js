// Definí el procedimiento trasladar,
// que tome dos listas y un elemento de la primera.
// trasladar debe sacar el elemento de la primera lista y agregarlo en la segunda.

function trasladar(lista1,lista2,elemento){
    remover(lista1,elemento);
    agregar(lista2,elemento); 
}

// NOTA -> recordemos que un procedimiento no retorna nada. 