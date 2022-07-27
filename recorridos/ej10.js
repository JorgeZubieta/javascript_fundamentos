// Definí la función gananciasDeBalancesPositivos y
// luego usala junto a promedio para definir promedioDeBalancesPositivos.
//ANIDACION DE LLAMADAS

// BIBLIOTECA
function agregar(unaLista, unElemento) /* ... */
// Inserta unElemento al final de unaLista.

function longitud(unStringOLista) /* ... */
// Retorna el largo de un string o una lista

function sumatoria(listaDeNumeros) {
	let sumatoria = 0;
	for (let numero of listaDeNumeros) {
		sumatoria = sumatoria + numero;
	}
	return sumatoria;
}

function balancesPositivos(balancesDeUnPeriodo) {
let balances = [];
	for (let balance of balancesDeUnPeriodo) {
		if (balance.ganancia > 0){
			agregar(balances,balance);
		}
	}
	return balances;
}

function ganancias(balancesDeUnPeriodo) {
	let ganancias = [];
	for (let balance of balancesDeUnPeriodo) {
		agregar (ganancias,balance.ganancia);
	}
	return ganancias;
}

function promedio(listaDeNumeros) {
	return sumatoria(listaDeNumeros) / longitud(listaDeNumeros);
}

// SOLUCION
function gananciasDeBalancesPositivos(balancesDeUnPeridodo){ 
	return ganancias(balancesPositivos(balancesDeUnPeridodo));
}

function promedioDeBalancesPositivos(balancesDeUnPeriodo){
	return promedio(gananciasDeBalancesPositivos(balancesDeUnPeriodo));
}
