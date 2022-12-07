// Un problema de estos arrays es que solo 
// buscan el primer elemento que aparece
// que coincide con la búsqueda

// - INDEXOF -
// Solo se puede usar en strings
const animals = ['🐒', '🐈‍⬛', '🦓', '🐂', '🐂'];

// Como hemos dicho busca el primer elemento que coincide
const indexOFBull = animals.indexOf('🐂');
console.log(`El toro está en el índice número ${indexOFBull}`);

// Con la siguiente función se puede buscar el último
const lastIndexOFBull = animals.lastIndexOf('🐂');
console.log(`El toro está en el índice número ${lastIndexOFBull}`);

// - FINDINDEX -
// Este ya se puede usar con el resto de elementos
// En este caso no es tan sencillo buscar la última posición
// lo veremos más adelante
const people = [
  { name: 'A', age: 20 },
  { name: 'C', age: 40 },
  { name: 'C', age: 40 },
  { name: 'B', age: 30 },
  { name: 'C', age: 42 },
  { name: 'C', age: 45 },
  { name: 'D', age: 50 },
  { name: 'C', age: 50 },
];

const indexOfPerson = people.findIndex((person) => {
  if (person.name === 'C' && person.age >= 42 && person.age <= 50) {
    return true;
  }
});

console.log(indexOfPerson)

// Por defecto, si no encuentra el resultado se añade un -1
// Es aconsejable prevenir esta situación para dejar un menor código
const indexOfPerson2 = people.findIndex((person) => {
    if (person.name === 'A' && person.age >= 42 && person.age <= 50) {
      return true;
    }
  });

  if (indexOfPerson2 === -1) {
    console.log('No se ha encontrado el elemento')
  } else
  console.log('La persona está en la posición: ', indexOfPerson2)
  console.log('La persona es: ', people[indexOfPerson2])