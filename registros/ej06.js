// consultas de campos

// Nos devuelve solo en anio de una fecha
function anio(fecha) /* ... */


// Definí la función esDelMilenioPasado,
// que recibe un archivo y retorna un booleano.
function esDelMilenioPasado(registro){
    return anio(registro.creacion) < 2000;  
}

