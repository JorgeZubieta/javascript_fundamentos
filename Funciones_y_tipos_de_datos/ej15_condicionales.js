// Definí, y probá en la consola, la función medallaSegunPuesto
// que retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica:
// 	• primer puesto: le corresponde "oro"
// 	• segundo puesto: le corresponde "plata"
// 	• tercer puesto: le corresponde "bronce"
// 	• otros puestos: le corresponde "nada"


function medallaSegunPuesto(puesto){
    if (puesto === 1) {
            return "oro";
        } else if (puesto === 2 ) {
                return "plata";
            } else if (puesto === 3) {
                    return "bronce";
                } else { return "nada"; }  
}