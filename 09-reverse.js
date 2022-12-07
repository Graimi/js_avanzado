// La función reverse es muy sencilla
const people = [
    { name: 'A', age: 20 },
    { name: 'B', age: 30 },
    { name: 'C', age: 42 },
    { name: 'D', age: 50 },
  ];

// Hay que tener en cuenta que modifica el array original
people.reverse();
console.log(people);

// Para no modificarlo hacemos un slice y le
// asiganamos una nueva variable
const newPeople = people.slice().reverse();
console.log(newPeople);
