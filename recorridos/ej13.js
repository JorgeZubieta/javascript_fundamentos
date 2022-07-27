
// Definí las funciones:
// • meses, la cual dada una lista con registros devuelve una lista de meses ;
// • afortunados, que filtra aquellos registros que tuvieron una ganancia mayor a $1000 ;
// • mesesAfortunados, devuelve aquellos meses que fueron afortunados.

// En la función meses es necesario mapear
// en afortunados filtrar
// en mesesAfortunados tenés que usar las dos anteriores.
    
// SOLUCION
function afortunados(balancesDeUnPeriodo){
    let afortunados = [];
    for (let balance of balancesDeUnPeriodo){
        if (balance.ganancia > 1000){
            agregar(afortunados,balance) ;
        }
    }
    return afortunados;
}

function meses(balancesDeUnPeriodo){
    let listaMeses = [];
    for (let balance of balancesDeUnPeriodo){
        agregar(listaMeses, balance.mes)
    }
    return listaMeses;
}

function mesesAfortunados(balancesDeUnPeriodo){
    return meses(afortunados(balancesDeUnPeriodo));
}