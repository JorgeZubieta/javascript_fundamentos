function escribirCartelito(titulo, nombre, apellido, quiereCartelCorto) /* ... */
// Nos retorna el texto de un cartelito. El último parámetro determina si va a ser corto o largo
//
// Por ejemplo:
//
//  > escribirCartelito("Prof.", "Elena", "Chaldú", true)
//  "Prof. Chaldú"
//  > escribirCartelito("Dra.", "Zelika", "Vera", false)
//  "Dra. Zelika Vera"


function escribirCartelitoOptimo(titulo, nombre, apellido){
    return escribirCartelito(titulo, nombre, apellido, longitud(nombre+apellido)>15 );
}

// NOTA > en este caso dentro del booleano podemos poner ua condicion que si se cumple nos dara si es verdadero o falso!