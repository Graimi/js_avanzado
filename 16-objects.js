const hero = {
  name: 'power-hammer',
  power: 20,
  defense: 10,
};

// Object.keys() - Para obtener los nombres
// de los campos de un objeto
const heroKeys = Object.keys(hero);
console.log(heroKeys);
// O lo que es lo mismo
console.log(Object.keys(hero));

let totalPower = 0;

heroKeys.forEach((key) => {
  console.log(key);
  if (key === 'power') {
    totalPower += hero[key]; // Es lo mismo que poner hero.key
  }
  if (key === 'defense') {
    totalPower += hero[key] / 2;
  }
});

console.log(totalPower);

// Object.values() - Para obtener los valores
// de los campos de un objeto
const heroValues = Object.values(hero);
console.log(heroValues);
// O lo que es lo mismo
console.log(Object.values(hero));

const scores = {
  '123456789A': 5,
  '123456789B': 6,
  '123456789C': 10,
  '123456789D': 1,
};

let scoreValues = Object.values(scores)

let totalSum = 0;
for (let index = 0; index < scoreValues.length; index++) {
  const sum = scoreValues[index];
  totalSum += sum
}
console.log(totalSum/scoreValues.length)

// O lo que es lo mismo
let average = 0;
scoreValues.forEach((score) => {
average += score
})
average = average / scoreValues.length
console.log(average)

// Object.entries() - Obtenemos duplas de los valores
// no es muy recomendable usarlo y no se ve mucho
const heroEntries = Object.entries(hero);

heroEntries.forEach((tuple) => {
    const key = tuple[0];
    const value = tuple[1]
    //...
})

console.log(heroEntries)
