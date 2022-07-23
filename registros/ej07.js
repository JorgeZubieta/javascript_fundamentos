// funcion que compara la longitud de campos y devuelve el de mayos longitud

function longitud(unStringOLista) /* ... */
// Retorna el largo de un string o una lista

function masDificilDeCocinar(postre1, postre2){
    if ( longitud(postre1.ingredientes) > longitud(postre2.ingredientes) ){
        return postre1;
    } else {
        return postre2;    
    }
}