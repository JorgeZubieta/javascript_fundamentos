// Usando la función maximo, definí la función maximaGanancia que
// nos diga cuál es la ganancia más alta entre los balances de un
// período de tiempo.


function ganancias(balancesDeUnPeriodo) {
    let ganancias = [];
    for (let balance of balancesDeUnPeriodo) {
        agregar (ganancias,balance.ganancia);
    }
    return ganancias;
}

function maximo(numeros) /* ... */
// Retorná el número más grande de una lista de números:

// SOLUCION
function maximaGanancia(balancesDeUnPeriodo){
    return maximo(ganancias(balancesDeUnPeriodo));
}