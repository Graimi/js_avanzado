// Como vimos, las promesas no se resuelven hasta haber
// acabado todo el código como en el siguiente ejemplo
/*
console.log('> Pedimos un pokemon a la API');

fetch('https://pokeapi.co/api/v2/pokemon/entei')
  .then((res) => res.json())
  .then((response) => {
    console.log('Respuesta:', response);
  })
  .catch((err) => {
    console.log('Error:', err);
  });

  console.log('> Ya hemos pedido un pokemon a la API');
*/

// ASYNC AWAIT - Con esta función hacemos que las promesas
// se corran de manera normal, en el orden del código
const main = async () => {
  console.log('> Pedimos un pokemon a la API');
  let pokemon = null;

  // Con TRY CATCH no se rompe toda nuestra app si no funciona nuestra api
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/entei');
    const response = await res.json();
    console.log('Respuesta:', response);
    pokemon = response
  } catch (error) {
    console.log('Error:', error);
  }

  // pokemon... Con la vairable pokemon ya declarada hacemos todo lo que
  // necesitemos con ella a continuación
  console.log('> Ya hemos pedido un pokemon a la API');
};

main().then(() => {
    console.log('La función main ha finalizado')
});
