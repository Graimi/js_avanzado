const animal = {
  name: 'alpaca',
  legs: 4,
  food: {
    breakfast: 'grass',
  },
};

const livingSpace = {
  place: 'field',
  lifeSpan: 20,
};

// DESTRUCTURING
// Versión clásica
// const legs = animal.legs;
// Versión desestrucutrada (es igual)
const { legs, food } = animal;
console.log(legs);
console.log(food);
const { breakfast } = food;
console.log(breakfast);

// SPREAD OPERATOR
// Versión clásica para unir objetos
const completeAnimal0 = {
  name: animal.name,
  lifeSpan: livingSpace.lifeSpan,
  //...
};
// Versión con spread operator
const completeAnimal = {
  ...animal,
  ...livingSpace,
};
console.log(completeAnimal);
//
// Fórmula para añadir propiedades a un objeto
// Con esta versión se modifica el original
const addProperty = (object, key, value) => {
  object[key] = value;
  return object;
};
const animalWithSound = addProperty(completeAnimal, 'sound', 'beeee');
console.log(completeAnimal);
console.log(animalWithSound);
// Con esta versión se crea un nuevo objeto
const addProperty2 = (object, key, value) => {
  const newObject = {
    ...object,
    [key]: value,
  };
  return newObject;
};
const animalWithWeight = addProperty2(completeAnimal, 'weight', '500');
console.log(completeAnimal);
console.log(animalWithWeight);

// REST OPERATOR - En realidad es un spread operator pero se
// denomina así cuando se usa de la siguiente forma
// Para sacar solo unas propiedades específicas de un objeto
// Se usará cuando queremos quitar unas propiedades
// específicas de un objeto y mantener el resto
// Versión 
const {
    legs: animalLegs, // Así denominamos directamente una propiedad como variable
    food: animalFood,
    lifeSpan,
    ...simpleAnimal // Indicando que el resto de las propiedades vayan a un
                    // nuevo objeto con el nombre indicado
} = animalWithWeight
console.log(simpleAnimal);
