/**
 * Calificaciones de Estudiantes:
Crea un objeto clase que contenga un array de objetos, donde
cada objeto represente un estudiante con propiedades como
nombre y calificaciones, que es un array de números. Agrega
al menos tres estudiantes y muestra en la consola el promedio
de calificaciones de cada estudiante.
 */

const clase = {
    estudiante1: [10, 9, 8, 10],
    estudiante2: [9, 10, 9, 7],
    estudiante3: [7, 2, 5, 4]
}

let promEstudiante1 = (clase.estudiante1[0] + clase.estudiante1[1] + clase.estudiante1[2] + clase.estudiante1[3]) / 4;
console.log(promEstudiante1);

let promEstudiante2 = (clase.estudiante2[0] + clase.estudiante2[1] + clase.estudiante2[2] + clase.estudiante2[3]) / 4;
console.log(promEstudiante2);

let promEstudiante3 = (clase.estudiante3[0] + clase.estudiante3[1] + clase.estudiante3[2] + clase.estudiante3[3]) / 4;
console.log(promEstudiante3);