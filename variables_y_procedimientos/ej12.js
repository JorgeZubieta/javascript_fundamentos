// Vimos que una variable solo puede tener un valor, entonces cada vez que le asignamos uno nuevo, perdemos el anterior. Entonces, dada la función:

function cuentaExtravagante() {
    let numero = 8;
    numero *= 2;
    numero += 4;
    return numero;
}
// Si la invocaramos ¿qué crees que retornaría?
// Veamos el paso a paso:
// 	• inicialmente la variable numero vale 8;
// 	• al hacer numero *= 2 la variable pasa a tener su valor multiplicado por 2, es decir, 16;
// al hacer numero += 4 le sumamos 4 a 16 y lo guardamos en número, por ende la función cuentaExtravagante retorna 20.