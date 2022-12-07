const animals = ['🐼', '🐲', '🐆', '🦬'];
const herbAnimals = [];
const meatAnimals = [];

// Versión clásica con for
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  if (animal === '🐼' || animal === '🦬') {
    herbAnimals.push(animal);
  } else {
    meatAnimals.push(animal);
  }
}

console.log(`Los animales hervíboros son: ${herbAnimals}`);
console.log(`Los animales carnívoros son: ${meatAnimals}`);

// Con la versión filter
const animals2 = [
  { icon: '🐼', herb: true },
  { icon: '🐲', herb: false },
  { icon: '🐆', herb: false },
  { icon: '🦬', herb: true },
];

const herbAnimals2 = animals2.filter((animal) => {
  return animal.herb;
});

console.log(herbAnimals2);
// Al tratarse de un objeto, no se visualiza bien en una iteración
// podemos hacer lo siguiente
console.log(`Los animales hervíboros son: ${herbAnimals2}`);

const animals2Icons = herbAnimals2.map((animal) => {
  return animal.icon;
});

console.log(`Los animales hervíboros son: ${animals2Icons}`);
