
// BIBLIOTECA
function gananciasDeBalancesPositivos(balancesDeUnPeridodo){  
    return ganancias(balancesPositivos(balancesDeUnPeridodo));
}
function minimo(numeros) /* ... */
// Retorna el menor valor dentro de una lista de números:


// Definí la función minimaGananciaPositiva que nos diga
// cuál es la ganancia más baja de todos los balances positivos.

minimaGananciaPositiva([
    { mes: "enero", ganancia: -40 }, 
    { mes: "febrero", ganancia: 42 }, 
    { mes: "marzo", ganancia: 8}, 
    { mes: "abril", ganancia:  -5}
])
// 8


// SOLUCION
function minimaGananciaPositiva(blancesDeUnPeriodo){
    return minimo(gananciasDeBalancesPositivos(blancesDeUnPeriodo));
}