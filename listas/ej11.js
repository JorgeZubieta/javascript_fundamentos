// uso de la lista!

function medallaSegunPuesto(puesto){
    if (puesto === 0 || puesto > 3) {
        return "nada";
    } else {
        return ["no existe","oro","plata","bronce"] [puesto];     
    }
}

// NOTA -> debi declarar una poscicion 0 como "no exist"