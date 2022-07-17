// Que tiene esto de diferente? como estas comparando un booleano es siempre true o false entonces solo evaluas un lado
function escribirCartelito(titulo, nombre, apellido,tipo1){
    if (tipo1) {
        return titulo +" "+ apellido;
    } else {
            return titulo +" "+ nombre+" "+ apellido;
        }
}