// Definí las funciones esFinDeSemana y estaCerrado.
// Tené en cuenta que los días se reciben en minúscula:

function dentroDeHorarioBancario(horario) {
    return horario >= 10 && horario <= 15;
}

function esFinDeSemana(dia){
    return dia === "sabado" || dia === "domingo";
}

function estaCerrado(esFeriado, dia, horario) {
    return esFeriado || esFinDeSemana(dia) || !dentroDeHorarioBancario(horario);
}
