// Definí el procedimiento trasladar,
// que tome dos listas y un elemento de la primera.
// trasladar debe sacar el elemento de la primera lista y agregarlo en la segunda.

function agregar(unaLista, unElemento) /* ... */
// Inserta unElemento al final de unaLista.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  > let cancionesFavoritas = ["La colina de la vida", "Zamba por vos"]
//  > agregar(cancionesFavoritas, "Seminare")
//  > cancionesFavoritas
//  ["La colina de la vida", "Zamba por vos", "Seminare"]


function remover(unaLista, unElemento) /* ... */
// Quita unElemento de unaLista. En caso de que no esté, no hace nada.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  > let listaDeCompras = ["leche", "pan", "arroz", "aceite", "yerba"]
//  > remover(listaDeCompras, "pan")
//  > listaDeCompras
//  ["leche", "arroz", "aceite", "yerba"]

function trasladar(lista1,lista2,elemento){
    remover(lista1,elemento);
    agregar(lista2,elemento); 
}

// NOTA -> recordemos que un procedimiento no retorna nada. 