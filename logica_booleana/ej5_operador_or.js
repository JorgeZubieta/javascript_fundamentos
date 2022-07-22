// ¡la disyunción lógica (or  ||)!
// En el famoso juego T.E.G., un jugador puede ganar de dos formas:
// cumpliendo su objetivo secreto o alcanzando el objetivo general de
// conquistar 30 países.

function gano(cumplioObjetivoSecreto, cantidadDePaisesConquistados) {
    return cumplioObjetivoSecreto || cantidadDePaisesConquistados >= 30;
}
