const student = {
    name: 'Alberto',
    master: 'Full Stack',
    job: 'Software Engineer'
};

// La forma clásica para borrar un 
// elemento de un objeto sería:
student.job = null;
// Aunque esto no elimina el objeto,
// solo le da el valor null
console.log({
    keys: Object.keys(student),
    values: Object.values(student),
})
// delete - Para borrar un elemento de un objeto
const newStudent = JSON.parse(JSON.stringify(student))
delete newStudent.job;
console.log({
    keys: Object.keys(newStudent),
    values: Object.values(newStudent),
})

// Object.freeze() - Para congelar un objeto y
// evitar que se puedan cambiar los datos
const freezeStudent = Object.freeze(newStudent);
console.log(freezeStudent);
// Congela tanto el original como la nueva asignación
freezeStudent.surnanme = 'Rivera';
newStudent.surnanme = 'Rivera';
delete freezeStudent.name;
delete newStudent.name;
console.log(freezeStudent);
console.log(newStudent);