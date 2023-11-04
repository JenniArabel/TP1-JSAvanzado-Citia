/**
 * Tienda en Línea:
Crea un objeto producto con propiedades como nombre, precio y
disponible. Luego, crea una función llamada mostrarProducto
que tome un objeto producto como argumento y muestre en la
consola toda la información del producto.
 */

const producto = {
    nombre: 'Escritorio gamer',
    precio: 40000,
    disponible: true
}

function mostrarProducto(producto) {
    console.log("El nombre del producto es " + producto.nombre );
    console.log("Su precio es de $" + producto.precio);
    console.log("Está disponible? " + producto.disponible);
};

mostrarProducto(producto);