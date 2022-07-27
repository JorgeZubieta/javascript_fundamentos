// Se quiere saber dado un conjunto cualquiera de balances cuál 
// es su gananciaPromedio.

gananciaPromedio([
    { mes: "marzo", ganancia: 8 }, 
    { mes: "agosto", ganancia: 10 }
])
// 9

// Para esto contás con las funciones gananciaTotal y longitud.

function gananciaPromedio(balance) {
    return gananciaTotal(balance) / longitud(balance);
}