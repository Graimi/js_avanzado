// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.
// console.log('Pedimos info a la api')

// fetch('https://api.agify.io?name=michael')
//     .then((response) => response.json())
//     .then((response) => console.log('Respuesta:', response))
//     .catch((error) => console.log('Respuesta:', error))

// console.log('> Ya hemos pedido la info a la API');

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const input = document.querySelector('#info')
const button = document.querySelector('#search')
const baseUrl = 'https://api.nationalize.io/';

const handleclick = ((event) => {
    console.log(input.value)
    fetch(baseUrl + '?name=' + input.value)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log('Error:', error))
})

button.addEventListener("click", handleclick);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
const buttonDetails = document.querySelector('#searchDetails')

const handleclick2 = () => {
    console.log(input.value)
    fetch(baseUrl + '?name=' + input.value)
    .then((response) => response.json())
    .then((person) => pCreateNationalize(person))
    .catch((error) => console.log('Error:', error))
}

const addP = document.createElement("p")
const pCreateNationalize = (person) => {
   

   addP.textContent = `El nombre ${person.name} tiene un ${person.country[0].probability} 
    porciento de ser de ${person.country[0].country_id} y un 
    ${person.country[1].probability} porciento de ser de ${person.country[1].country_id}`
    
    addP.appendChild(xButton)
    document.body.appendChild(addP)

    // or
    // const p$$ = document.createElement("p");
    // let text = `El nombre ${person.name} tiene`;
  
    // for (const country of person.country) {
    //   const percentage = Math.floor(country.probability * 100);
    //   text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    // }
  
    // p$$.textContent = text;

    // document.body.appendChild(p$$);
}
 
buttonDetails.addEventListener("click", handleclick2);

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const xButton = document.createElement("button")
xButton.id = 'newButton'
xButton.textContent = 'X'

const handleRemove = addP.remove();  

xButton.addEventListener("click", handleRemove);