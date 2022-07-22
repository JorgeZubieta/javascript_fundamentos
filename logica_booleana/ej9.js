// Definí la función genérica xor,
// que tome dos booleanos y retorne el valor de verdad correspondiente.

function xor(a,b){
    if (a === b){
        return false;
    } else  {
        if (a !== b){
            return true;
        }
    }
}

//Otra forma
function xor(a,b){
    if (a === b){
        return false;
    }
    
    if (a !== b){
        return true;
    }
}