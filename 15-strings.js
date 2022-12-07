const sentence = 'A santa, at NASA';

// .split() - para dividir el string en un array
// de dos o más elementos, eligiendo el
// separador en los paréntesis
const splitSentence = sentence.split(',');
console.log(splitSentence);
const splitSpaceSentence = sentence.split(' ');
console.log(splitSpaceSentence);

//.join() - para unir elementos de un array en un string
// seleccionamos entre los paréntesis que elemento de
// unión habrá
const joinSentence = splitSentence.join('');
console.log(joinSentence);

console.log(joinSentence.split(' ').join('_'));

// .replace(,) - Sustituye un elemento indicado en
// primer lugar por otro indicado en segundo lugar
// SOLO sustituye la primera iteracción encontrada
const senteceWithoutComma = sentence.replace(',', '');
console.log(senteceWithoutComma);

// .replaceAll(,) - A diferencia de la anterior,
// esta sustituye todo lo indicado
const senteceWithoutA = sentence.replaceAll('a', 'o').replaceAll('A', 'O');
console.log(senteceWithoutA);

const testSentence = 'Hola, que, pasa????????????? y que_tal_estás';
console.log(
  testSentence.replaceAll(',', '').replaceAll('?', '').replaceAll('_', ' ')
);
// Es lo mismo que hacer esto
const clearSentence = testSentence
  .replaceAll(',', '')
  .replaceAll('?', '')
  .replaceAll('_', ' ');
console.log(clearSentence);
