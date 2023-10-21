/**
 * Gestor de Contactos:
Crea un objeto contactos que almacene una lista de objetos,
donde cada objeto represente un contacto con propiedades como
nombre, telefono y email. Luego, agrega un nuevo contacto a
la lista y muestra en la consola la cantidad total de
contactos.
 */
const contactos = {
    contacto1: {
        nombre: 'Jennifer',
        telefono: 2616478858,
        email: 'jennifer.arabel@gmail.com'
    },
    contacto2: {
        nombre: 'Nelson',
        telefono: 2616478859,
        email: 'nelson.arabel@gmail.com'
    },
    contacto3: {
        nombre: 'Mirta',
        telefono: 2612388799,
        email: 'mirta.arabel@gmail.com'
    }
};

contactos.contacto4 = {
    nombre: 'Agustin',
        telefono: 2616478860,
        email: 'agustin.arabel@gmail.com'
};

// Obtener las claves (nombres de los contactos) del objeto y calcular su longitud
const cantidadContactos = Object.keys(contactos).length;

console.log("La cantidad de contactos es: " + cantidadContactos);