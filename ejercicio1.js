/**
 * Peliculas Favoritas:
Crea un objeto usuario con propiedades como nombre y
peliculasFavoritas, que es un array de objetos donde cada
objeto representa una película con propiedades como
titulo y año. Agrega al menos tres películas favoritas y
muestra en la consola el título de la segunda película
favorita.
 */

const usuario = {
    nombre: 'Jenni',
    peliculasFavoritas: [
        pelicula1 = {
            titulo: 'Ironman',
            año: 2012
        },
        pelicula2 = {
            titulo: 'Pantera Negra',
            año: 2016
        }, 
        pelicula3 = {
            titulo: 'Thor Ragnarok',
            año: 2014
        }
    ]
};
console.log(usuario.peliculasFavoritas[1].titulo);