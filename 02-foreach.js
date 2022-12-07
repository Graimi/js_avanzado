const numbers = [1, 7, 4, 6, 7, 1, 0, 8];

let count = 0;

// Versión clásica de bucle for
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) {
    count++;
  }
}

console.log(count);

// Versión mejorada con forEach
let count2 = 0;

numbers.forEach((number) => {
  if (number > 3) {
    count2++;
  }
});

console.log(count2);

// Ejemplo para contar los números pares del array
let even = 0;

numbers.forEach((number) => (number % 2 === 0 ? even++ : ''));

console.log(even);
