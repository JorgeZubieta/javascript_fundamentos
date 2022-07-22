// Listas -> es importante el odren y son infinitas

// CONSOLA
listasIguales(["hola", "mundo"], ["mundo", "hola"])
// => false
listasIguales(["hola", "mundo"], ["hola", "mundo"])
// => true
listasIguales(["hola", "mundo"], ["hola", "todo", "el", "mundo"])
// => false
listasIguales(["hola"], ["hola", "mundo"])
// => false

["hola", "mundo"] === ["mundo", "hola"]
// => false

personas
// => ["mara","julian"]
["mara", "julian"] === personas
// => false
personas === personas
// => true