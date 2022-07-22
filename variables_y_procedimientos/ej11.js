// Definí el procedimiento aumentarFortuna que duplique el valor de la variable global pesosEnMiBilletera. No declares la variable, ya lo hicimos por vos (con una cantidad secreta de dinero) .
//  ¡Dame una pista!
// ¿Cómo usar aumentarFortuna? Por ejemplo así:
// // Consulto la varible a ver cuanto tiene:
// > pesosEnMiBilletera 
// 500 // ¡Ojo! Esto es a fines ilustrativos; 
//     // ¡podría tener cualquier cantidad!
// // Aumento mi fortuna:
// > aumentarFortuna() 
// // Consulto de nuevo mi fortuna:
// > pesosEnMiBilletera  // ¡Aumentó!
// 1000

function aumentarFortuna() {
    // pesosEnMiBilletera = pesosEnMiBilletera*2;
    pesosEnMiBilletera *= 2;
}
//  Nota
// Actualizaciones como duplicar, triplicar, incrementar en uno o en una cierta cantidad son tan comunes que JavaScript presenta algunos atajos:
// x += y; //equivalente a x = x + y;
// x *= y; //equivalente a x = x * y;
// x -= y; //equivalente a x = x - y;
// x++;    //equivalente a x = x + 1;
