// En este primer ej la consola dará el valor
// de response.age (10), si response.age no
// estuviera definido sería undifined y valdría 100
// Pero el problema viene si tenemos un valor 0 como
// en age2, 0 es un falsy y por defecto no se selecciona
// un falsy en la comparación
const response = {
    age: 10,
    age2: 0,
}

const age = response.age2 || 100;

console.log('Age:', age);

// Usando Null coalescing solucionamos esto, pues al realizar
// la comparación te devuelve el fallback solo si el valor 
// es null o undefined
const age2 = response.age2 ?? 100;
console.log('Age:', age2);