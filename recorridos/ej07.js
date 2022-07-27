// Biblioteca
function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0) {
            cantidad = cantidad + 1;  
        }  
    }
    return cantidad;
}

//Gganancia promedio de los balances positivos.
// Definí las funciones -> gananciaPositiva, que es la suma de las ganancias de los balances positivos
// promedioGananciasPositivas invocando gananciaPositiva y cantidadDeBalancesPositivos.

// Solucion
function gananciaPositiva(balancesDeUnPeriodo){
    let sumatoria = 0;
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0){
            sumatoria = sumatoria + balance.ganancia;
        }
    }
    return sumatoria;  
}

function promedioGananciasPositivas(balancesDeUnPeriodo){
    return gananciaPositiva(balancesDeUnPeriodo)/cantidadDeBalancesPositivos(balancesDeUnPeriodo);
}

// ACLARACION
// Si quisiéramos realizar una función promedio genérica sería algo así:

function promedio(listaDeNumeros) {
    return sumatoria(listaDeNumeros) / longitud(listaDeNumeros);
}

function sumatoria(listaDeNumeros) {
    let sumatoria = 0;
    for (let numero of listaDeNumeros) {
        sumatoria = sumatoria + numero;
    }
    return sumatoria;
}
// ¡Pero nosotros no tenemos una lista de números sino de registros! ¿Y entonces?