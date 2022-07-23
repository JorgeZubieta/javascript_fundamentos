// FOR -> manera de recorrer los elementos de una lista

// EJEMPLO
for(let precio of [10, 100, 87 ]) {
    plataEnBilletera  = plataEnBilletera - precio
}
// RTA -> Si teníamos $500 en nuestra billetera,
// después del for nos van a quedar $303 

// EJEMPLO2
function imprimir(unString) /* ... */
// Imprime por pantalla unString

// personas = ["jorge", "kaito", "yuki"]
function saludar(personas) {
    for(let persona of personas) {
        imprimir ("hola" + " " + persona);
    }
}