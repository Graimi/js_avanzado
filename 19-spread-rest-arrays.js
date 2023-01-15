const students = ['pepe', 'maría', 'juan', 'samanta', 'alfredo', 'casimiro'];

// DESTRUCTURING
// Versión clásica para obtener elementos específicos
const firstStudent = students[0];
const secondStudent = students[1];
const thirdStudent = students[2];
// Con destructuring
const [firstStudent2, secondStudent2, thirdStudent2] = students;
console.log(firstStudent2, '\n', secondStudent2, '\n', thirdStudent2, '\n');
// Para sacar solo el 4 por ejemplo
const [, , , fourthStudent] = students;
console.log(fourthStudent);

// REST OPERATOR
const [, , , ...restOperator] = students;
console.log(restOperator);

console.log(restOperator);
// SPREAD OPERATOR
const newStudents = ['bono', 'tomatito'];
const allStudents = [...students, ...newStudents];
console.log(allStudents);

// En este ej, Math no acepta arrays pero si strings
const marks = [0, 1, 5, 6, 8]
const maxMinusMarks = [Math.max(...marks), Math.min(...marks)]
console.log(maxMinusMarks);