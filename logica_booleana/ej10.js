// precedencia orden jerarquico
// definimos una funcion que devuelve el opuesto booleano
// Las tarjetas:
// crédito - seis cuotas. 
// débito - única cuota.

function pagaConTarjeta(seCobraInteres, tarjeta, efectivoDisponible) {
    return !seCobraInteres && cuotas(tarjeta) >= 3 || efectivoDisponible < 100;
}

// CONSOLA
// > pagaConTarjeta(true, "crédito", 320)
// => false
// > pagaConTarjeta(false, "crédito", 80)
// => true
// > pagaConTarjeta(true, "débito", 215)
// => false
// > pagaConTarjeta(true, "débito", 32)
// => true