// Otra cosa que queremos hacer con las listas es saber en qué posición
// se encuentra un elemento. Para ello utilizamos la función posicion de
// la siguiente manera:

posicion(["a", "la", "grande", "le", "puse", "cuca"], "grande"); //devuelve 2

let diasLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes"]

posicion(diasLaborales, "lunes"); //devuelve 0

// ¿Y qué sucede si le pasás como argumento a posicion un elemento que no tiene? ¡Averigualo!
// Probá lo siguiente:

posicion(diasLaborales, "osvaldo")
// => -1