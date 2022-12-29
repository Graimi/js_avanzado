// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesPlus18 = ages.filter((age) => age>18)
console.log(agesPlus18)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const agesCopy = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesEven = ages.filter((age) => {
    return age%2 === 0
})
console.log(agesEven)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersLol = streamers.filter((streamer) => {
    return streamer.gameMorePlayed === 'League of Legends'
})
console.log(streamersLol)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
const streamersWithU = streamers.filter((streamer) => {
    return streamer.name.includes('u')
})
console.log(streamersWithU)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
const streamersLegend35 = streamers.filter((streamer) => {
    const toReturn = streamer.gameMorePlayed.toLowerCase().includes('legends')
    toReturn && streamer.age > 35 
    ? streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase() 
    : streamer.gameMorePlayed   
    return toReturn
})
console.log(streamersLegend35)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// const input = document.querySelector('[data-function="toFilterStreamers"]')

// const handleInput = ((event) => {
//     const info = event.target.value
//     const streamersFilterInput = streamers.filter((streamer) =>
//         streamer.name.toLowerCase().includes(info.toLowerCase())
//     );
//     console.log(streamersFilterInput)

// })

// input.addEventListener('input', handleInput)

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const button = document.querySelector('[data-function="toShowFilterStreamers"]')

const handleclick = ((event) => {
    const info = event.target.previousElementSibling.value;
    const filterStreamers = streamers.filter((streamer) =>
        streamer.name.toLowerCase().includes(info.toLowerCase())
    );
    console.log(filterStreamers)
})

button.addEventListener("click", handleclick);