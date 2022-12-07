const power = {
  name: 'power-hammer',
  value: 20,
};

const hero = {
  name: 'The Power',
  powers: [],
};

// Si probamos a obtener un valor de un elemento
// no definido el código "explota" y no podemos continuar
// console.log(hero.powers[0].value);

// Para evitar esto tenemos esta forma
// básica de solucionarlo con la que
// obtenemos un 0 o lo que indiquemos
const powerOne = hero.powers[0];
let powerOneValue = 0;

if (powerOne) {
  powerOneValue = powerOne.value;
}
console.log(powerOneValue)

// Con optional chaining lo resolvemos así
// Con la interrogación preguntamos por el valor 
// y con el || indicamos que valor le damos
// si no tiene
const powerOneValue2 = hero.powers[0]?.value || 0;

// Probamos con algo más difícil 
// (contando que use hubiera tenido 
// un error en la api y no apareciera)
const power2 = {
    name: 'power-hammer',
    value: 20,
    use: () => {
        console.log('Uso el poder power-hammer')
    }
  };
  
  const hero2 = {
    name: 'The Power',
    powers: [power2],
  };

console.log(hero2.powers[0].use());

// Podríamos usar lo que acabamos de ver así:
// Si hero2.powers[0] tine valor se usa
if (hero2.powers[0]?.use) {
    hero2.powers[0].use()
}

// Pero tenemos una versión más sencilla así
// y así evitar el uso continuos de ifs
hero2.powers[0]?.use?.()

// Para proegerse de apis que se atualicen y den fallos 
// podemos poner la ? de la siguiente forma con el punto
// para que no piense que es un ternario
console.log(hero2.powers?.[0].use());