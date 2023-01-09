// Iteración #1: Buscar el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return console.log(numberOne)
  } return console.log(numberTwo)
}

sum(6, 8)

// Iteración #2: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longestWord = param[0]
    avengers.forEach(element => {
        if (element.length > longestWord.length) {
            longestWord = element
        }
    });
  return console.log(longestWord)
}

findLongestWord(avengers)

// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar 
// cada uno de los elementos. Implemente la función denominada sumNumbers que toma un 
// array de números como argumento y devuelve la suma de todos los números de la matriz.
// Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  sumNumber = ((num1, num2) => num1 + num2 )
  let sum = param.reduce(sumNumber, 0)
  return console.log(sum)
}

sumAll(numbers)

function sumAll2(param) {
    let sum2 = 0
    param.forEach(element => {
        sum2 += element
    })
    return console.log(sum2)
  }
  
  sumAll2(numbers)

// Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const newNumbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let newSum = 0
    param.forEach(element => {
        newSum += element
    })
    return console.log(newSum / param.length)
}

average(newNumbers)

// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario
// cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'Rock', 8, 'Code'];
function averageWord(param) {
    let newSum = 0
    let wordLenght = 0
    param.forEach(element => {
        if (typeof element === "string" ) {
            wordLenght = element.length
            newSum += wordLenght
        } if (typeof element === "number") {
            newSum += element
        } 
    })
    return console.log(newSum / param.length)
}

averageWord(mixedElements)

// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
    let unique = []
    param.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    })  
    return console.log(unique)
}

removeDuplicates(duplicates)

// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array y el valor que desea comprobar
// que existe dentro de dicho array - comprueba si existe el elemento, en caso que 
// existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
// Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, name) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === name) {
          return console.log(true, i);
        }
      }
      return console.log(false);
}

finderName(nameFinder, 'Xabier')

// Iteration #8: Contador de repeticiones
// Crea una función que nos devuelva el número de veces que se  
// repite cada una de las palabras que lo conforma. 
// Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'rock',
  'code'
];
function repeatCounter(param) {
    let counter = {};
    for (let i = 0; i < param.length; i++) {
      if (param[i] in counter) {
        counter[param[i]]++;
      } else {
        counter[param[i]] = 1;
      }
    }
    return console.log(counter);
}

repeatCounter(counterWords)

// Happy coding 🌟 & Happy Rocker 💕