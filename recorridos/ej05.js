// Cuántos balances fueron positivos, es decir,
// aquellos en los que la ganancia fue mayor a cero".

function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0) {
            cantidad = cantidad + 1;  
        }  
    }
    return cantidad;
}