// Averigualo vos: inspeccioná en la consola qué elementos contiene
// pertenencias, agregale una "ballesta" y volvé a inspeccionar pertenencias.
// Además existe un procedimiento remover, que recibe la lista y
// un elemento por parámetro. Investigá en la consola qué hace.

> pertenencias
=> ["espada","escudo","antorcha"]

> agregar(pertenencias, "ballesta");
=> undefined

> pertenencias
=> ["espada","escudo","antorcha","ballesta"]

> longitud(pertenencias)
=> 4

> remover(pertenencias, "escudo");
=> undefined

> longitud(pertenencias)
=> 3

> pertenencias
=> ["espada","antorcha","ballesta"]

// NOTA -> remover y agregar necesitan nombre de lista mas nombre del elemento!