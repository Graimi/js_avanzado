const animals = ['🐼', '🐲', '🐆', '🦬'];
const food = [];

// Versión básica
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];

  let animalFood;

  if (animal === '🐼') {
    animalFood = '🎍';
  } else if (animal === '🐲') {
    animalFood = '🐑';
  } else if (animal === '🐆') {
    animalFood = '🐒';
  } else if (animal === '🦬') {
    animalFood = '☘️';
  }

  food.push(animalFood);
}

// Versión avanzada for each
// declarando una función
const getAnimalFood = (animal) => {
  let animalFood;

  if (animal === '🐼') {
    animalFood = '🎍';
  } else if (animal === '🐲') {
    animalFood = '🐑';
  } else if (animal === '🐆') {
    animalFood = '🐒';
  } else if (animal === '🦬') {
    animalFood = '☘️';
  }

  food.push(animalFood);
};

animals.forEach(getAnimalFood);

// Versión con map
const newAnimalFood = animals.map((animal) => {
  let foodAnimal;
  if (animal === '🐼') {
    foodAnimal = '🎍';
  } else if (animal === '🐲') {
    foodAnimal = '🐑';
  } else if (animal === '🐆') {
    foodAnimal = '🐒';
  } else if (animal === '🦬') {
    foodAnimal = '☘️';
  }
  return foodAnimal;
});

console.log(`Para los animales ${animals}`);
console.log(`Su comida favorita es ${food}`);
console.log(newAnimalFood);
