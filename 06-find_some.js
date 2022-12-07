// find y some funcionan igual
// Si ponemos find saca el dato/objeto...
// Si ponemos some devuelve un booleano en vez

// Usar find/some con array
const fridgeFood = ['🍝', '🥧', '🍖', '🍗'];

const chicken = fridgeFood.find((food, index) => food === '🍗');

console.log(chicken);

// Usar find con objeto
const fridgeFood2 = [
  { food: '🍝', id: 1 },
  { food: '🥧', id: 2 },
  { food: '🍖', id: 3 },
  { food: '🍗', id: 4 },
];

/* Esto es igual que l siguiente ejemplo
const chicken2 = fridgeFood2.find((food, index) => {
  if (food.food === '🍗') {
    return true;
  }
});
*/
const chicken2 = fridgeFood2.find((food, index) => food.food === '🍗');

console.log(chicken2);

// Ejemplo con some
const people = [
  { name: 'A', age: 11 },
  { name: 'B', age: 22 },
  { name: 'C', age: 33 },
  { name: 'D', age: 44 },
];

const hasPersonOver30 = people.some((person) => person.age > 30);

console.log(hasPersonOver30);
