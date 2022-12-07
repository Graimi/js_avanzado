const animals = ['🐒', '🐈‍⬛', '🦓', '🐂'];
const newAnimals = ['🐑', '🦬'];

// Forma clásica con foreach
newAnimals.forEach((animal) => {
    animals.push(animal);
})
console.log(animals);

// Usando concat
// No modifica el original
const updatedAnimals = animals.concat(newAnimals);
console.log(updatedAnimals);

// Para meter estos animales a un array conjunto
const animalsToUpdated = [
    ['🦊', '🦒'],
    ['🐺', '🐮'],
    ['🐱', '🦝'],
]

// La versión clásica sería esta, bastante liosa
animalsToUpdated.forEach((batch) => {
    batch.forEach((animal) => {
        animals.push(animal);
    })
})

console.log(animals);

// Con flat
// No modifica el original
const fullAnimalList = updatedAnimals.concat(animalsToUpdated.flat())
console.log(fullAnimalList);