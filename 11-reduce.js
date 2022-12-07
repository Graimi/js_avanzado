// Para sumar números
const numbers = [1, 2, 3, 4, 5];

// Versión vista foreach
let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// Versión reduce
// En los dos argumentos,
// el primero referencia al primer elemento para
// la primera vuelta, la segunda hay que indicarla
// en el return,
// el segundo argumento hace referencia al siguiente
// elemento directamente

// Ejemplo suma números
const sum2 = numbers.reduce((acc, next) => {
  console.log(acc, next);
  return acc + next;
});

console.log(sum2);

// Ejemplo concatenar strings
const words = ['Hola', 'que', 'tal', '?'];

const sentence = words.reduce((acc, next) => {
  console.log(acc, next);
  return `${acc} ${next}`;
});

console.log(sentence);

// Ejemplo array de objetos
const animals = [
  { icon: '🐼', herb: true },
  { icon: '🐲', herb: false },
  { icon: '🐆', herb: false },
  { icon: '🦬', herb: true },
];

const herbAnimals = animals.reduce((acc, next) => {
  console.log(acc, next);

  if (next.herb) {
    acc.push(next);
  }
  return acc;
}, []);

console.log(herbAnimals);

// Pero en este caso por ej usar la función filter es mucho más sencillo
const herbAnimals2 = animals.filter(animal => animal.herb)
console.log(herbAnimals2);