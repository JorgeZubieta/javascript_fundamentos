// Definí una función decisionConMoneda, que toma tres parámetros y retorna el segundo si el primero es "cara", o el tercero, si sale "ceca". Por ejemplo:
// > decisionConMoneda("cara", "pizzas", "empanadas")
// "pizzas"


function decisionConMoneda(moneda, pizza, empanada) {
    if(moneda === "cara"){
        return pizza;
    } else {
        return empanada;
    }
}

// NOTA -> los parametros son solo una guia para el contenido, ya que no se puede poner como parametro un string!