
// MAPEO : creacion de lista que tenga solo las ganancias de cada balance.
// Para ello debemos transformar, o mapear, cada elemento de la lista.

// Completá la función ganancias que toma una lista de balances y devuelve una lista que solo posea solo las ganancias de cada uno.
// Ejemplo por consola -> campos y contenidos
ganancias([
      { mes: "enero", ganancia: 40 }, 
      { mes: "febrero", ganancia: 12 }, 
      { mes: "marzo", ganancia: 8}
  ])
//CONSOLA : [40, 12, 8]

// SOLCUION
function ganancias(balancesDeUnPeriodo) {
  let ganancias = [];
  for (let balance of balancesDeUnPeriodo) {
    agregar (ganancias,balance.ganancia);
  }
  return ganancias;
}