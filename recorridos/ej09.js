// Completá la función balancesPositivos que : 
// toma los balances de un período y 
// devuelve una lista con aquellos cuya ganancia fue mayor a cero.
// MOTA : se refer a una lista con todos los dtalles de un balance cuyo balance.ganacia > 0

function balancesPositivos(balancesDeUnPeriodo) {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0){
            agregar(balances,balance);
        }
    }
    return balances;
}