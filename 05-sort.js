// - ORDENAR NÚMEROS -
const numbers = [3, 2, 10, 9, 7];

// Modificando el original
// Por defecto sort ordena por carácter alfanumérico
numbers.sort();
console.log(numbers);

// Haciendo una copia
const numbers2 = numbers.slice().sort();
console.log(numbers2);

// Declarando los argumentos, se comparan los pares,
// donde a coge el valor del segundo número
// y b el del primero y así sucesivamente
numbers.sort((a, b) => {
  console.log(a, b);
  // Al poner 1 o -1 indico si le altero la posición
  // de los números comparados en los pares a y b
  // Indicando un 1 se mantiene el orden
  // y se ordenan ascendentemente
  // Con un -1 se invierten y se ordenan descendentemente
  return 1;
});
console.log(numbers);

// ¿Cómo ordenar por tamaño y no por código alfanumérico?
numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(numbers);

// FUNCIONES DEFINITIVAS PARA ORDENAR NÚMEROS
const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;

numbers.sort(orderNumbersDescending);
console.log(numbers);

// - ORDENAR STRINGS -
const names = ['alberto', 'juan', 'enrique', 'Juan'];

// Con strings no se pueden usar los 1 y los a y b
// de suma y resta para ordenar texto, no es eficiente
names.sort(() => {
  return -1;
});
// Además, por defecto en el código alfanumérico van primero
// las mayúsculas
console.log(names);

// En vez, usamos la variable propia de los strings
// localeCompare() para ordenar correctamente sin importar
// las mayus o minus
names.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(names);

// FUNCIONES DEFINITIVAS PARA ORDENAR STRINGS
const orderStringsAscending = (a, b) => a.localeCompare(b);
const orderStringsDescending = (a, b) => b.localeCompare(a);

// - ORDENAR OBJETOS -
const people = [
  { name: 'alberto', age: 30 },
  { name: 'Xavier', age: 26 },
  { name: 'enrique', age: 70 },
  { name: 'Juan', age: 45 },
];

// Por string, indicándoselo a 'a' y a 'b'
people.sort((a, b) => {
  return orderStringsAscending(a.name, b.name);
});
console.log(people);

// Por número, indicandolo nuevamente
people.sort((a, b) => {
  return orderNumbersAscending(a.age, b.age);
});
console.log(people);
