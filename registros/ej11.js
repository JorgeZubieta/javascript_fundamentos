// Para terminar, trabajemos una vez más con los menúes.
// Definí un procedimiento endulzarMenu, que recibe un registro menú y le agrega azúcar a los ingredientes de su postre. Si ya tiene azúcar, no importa... ¡le agrega más!
// Recordá que cada menú tiene un postre y que cada postre tiene ingredientes.

function agregar(unaLista, unElemento) /* ... */
// Inserta unElemento al final de unaLista.

function endulzarMenu(menu){
    agregar(menu.postre.ingredientes, "azúcar");
}