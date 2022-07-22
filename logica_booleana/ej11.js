// Definí la función sePuedeConcentrar que recibe una bebida, su temperatura y un booleano que nos dice si Delfi está programando

function sePuedeConcentrar(bebida, temperatura, programando){
    return (bebida==="mate" && temperatura===80 && programando)
    ||
    (bebida==="té" && temperatura!==80 && temperatura >= 95 && programando);
}

// CONSOLA
// > sePuedeConcentrar('té', 100, true)
// true
// > sePuedeConcentrar('mate', 70, true)
// false
// > sePuedeConcentrar('té', 95, false)
// false



// ¿Y si delegamos? Podríamos separar la lógica de la siguiente manera:
function sePuedeConcentrar(infusion, temperatura, estaProgramando) {
    return infusionATemperaturaCorrecta(infusion, temperatura) && estaProgramando;
}
// Al delegar correctamente, hay veces en las que no es necesario
// alterar el orden de precedencia, ¡otro punto a favor de la delegación!