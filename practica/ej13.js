// Definí la función valorCantoTruco, que tome el canto y retorne cuántos puntos vale.
// > valorCantoTruco("retruco")
// 3
// Como argumento un string truco retruco vale cuatro
// No vamos a probar la función para el caso valorCantoTruco("zaraza")

function valorCantoTruco(canto) {
    if ( canto === "truco") {
        return 2;
    } else if ( canto === "retruco") {
            return 3;
        } else if ( canto === "vale cuatro") {
                return 4;
            }
} 