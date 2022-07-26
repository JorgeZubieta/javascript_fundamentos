
// Ejemplo de como se acumulan los valores de un campo especifico de un regristro
function gananciaTotal(balancesDeUnPeriodo) {
    let sumatoria = 0;
    for (let balance of balancesDeUnPeriodo) {
        sumatoria = sumatoria + balance.ganancia;
    }
    return sumatoria;
}

gananciaTotal([])
// => 0

gananciaTotal([
    { mes: "noviembre", ganancia: 5 }
    ])
// => 5

gananciaTotal([
    { mes: "marzo", ganancia: 8 }, 
    { mes: "agosto", ganancia: 10 }
    ])
// => 18

gananciaTotal([
    { mes: "enero", ganancia: 2 }, 
    { mes: "febrero", ganancia: 10 }, 
    { mes: "marzo", ganancia: -20 }
    ])
// => -8

gananciaTotal([
    { mes: "enero", ganancia: 2 }, 
    { mes: "febrero", ganancia: 10 }, 
    { mes: "marzo", ganancia: -20 }, 
    { mes: "abril", ganancia: 0 }, 
    { mes: "mayo", ganancia: 10 }
    ])
// => 2

gananciaTotal([
    { mes: "enero", ganancia: 2 }, 
    { mes: "febrero", ganancia: 10 }, 
    { mes: "marzo", ganancia: -20 }, 
    { mes: "abril", ganancia: 0 }, 
    { mes: "mayo", ganancia: 10 }
    ])
// => 2

gananciaTotal([
    { mes: "enero", ganancia: 2 }, 
    { mes: "febrero", ganancia: 1000 }, 
    { mes: "marzo", ganancia: -20 }, 
    { mes: "abril", ganancia: 0 }, 
    { mes: "mayo", ganancia: 0 }
    ])
// => 982