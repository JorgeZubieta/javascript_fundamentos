// Definí una función ascensorSobrecargado, que toma una "cantidad de personas" y retorna si entre todas superan la carga máxima de 300 kg.
// Tené en cuenta que nuestra función va a utilizar dos variables globales:
// 	• pesoPromedioPersonaEnKilogramos, la cual ya está declarada,
// 	• cargaMaximaEnKilogramos que vas a tener que declarar.


let cargaMaximaEnKilogramos = 300;

function ascensorSobrecargado(cantidadDePersonas){
    return pesoPromedioPersonaEnKilogramos*cantidadDePersonas > cargaMaximaEnKilogramos;
}

// NOTA no fue clara la propuesta pero salio!