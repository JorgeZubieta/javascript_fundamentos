// > Math.max(100 - 30, 0)
// 70 
// da el máximo entre 70 y 0, que es 70  

// > Math.max(100 - 120, 0)
// 0 
// da el máximo entre -20 y 0, que es 0

function extraer(saldo, monto) {
    return Math.max(saldo - monto,0);
}