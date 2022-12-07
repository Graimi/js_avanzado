// Ejemplo 1
const age = 30;
let isAllowed;

// Esto es lo mismo
if (age > 30) {
  isAllowed = true;
} else {
  isAllowed = false;
}

// que esto pero aquí hay un ternario
age > 30 ? (isAllowed = true) : (isAllowed = false);

// Todavía hay una forma más simple
// de representar el ternario
isAllowed = age > 30 ? true : false;

// Ejemplo 2
const numberA = 2;
const numberB = 4;
let operation = 'multiply';

// Forma clásica con if else
let resultA;

if (operation === 'multiply') {
  resultA = numberA * numberB;
} else {
  resultA = numberA / numberB;
}

// Forma nueva con ternarios
const resultB =
  operation === 'multiply' 
  ? numberA * numberB 
  : numberA / numberB;

// También se puede realizar con funciones
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const resultC =
operation === 'multiply' 
? multiply(numberA, numberB)
: divide (numberA, numberB)