const words = ['Hola', 'que', 'tal', '?'];

// Versión con for vista hasta ahora
let sentence = '';

for (let index = 0; index < words.length; index++) {
    sentence += words[index];
    sentence += ' '
}

console.log(sentence)

// Versión nueva con join
// Lo que hay en paréntesis es lo que habrá entre
// las uniones de los arrays
const sentence2 = words.join('\n') 
console.log(sentence2)