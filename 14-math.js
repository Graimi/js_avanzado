// Set de funciones

// Math.random() - Número aleatorio entre 0 y 1
Math.random();
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
// Usar la función para el típico juego cara o cruz
Math.random() > 0.5 ? console.log('cara') : console.log('cruz');

// Math.ceil() - "Redondea" el decimal de un número POR ARRIBA
console.log(Math.ceil(4.7));
console.log(Math.ceil(10.5));
console.log(Math.ceil(0.2222));

// Math.floor() - "Redondea" el decimal de un número POR ABAJO
console.log(Math.floor(4.7));
console.log(Math.floor(10.5));
console.log(Math.floor(0.2222));

// Math.round() - Ahora si, redondea el número de la forma normal
console.log(Math.round(4.7));
console.log(Math.round(10.5));
console.log(Math.round(0.2222));

// .toFixed() - Para fijar las cantidades de decimales que aparecen
// Transforma el número a string
console.log(0.2222.toFixed(1));
console.log(Math.random().toFixed(2));
console.log(Math.random().toFixed(70));