// Red Social:
// Crea un objeto perfil que almacene propiedades como nombre,
// edad y amigos, que es un array de objetos donde cada objeto
// representa un amigo con propiedades como nombre y edad.
// Agrega al menos tres amigos y muestra en la consola el nombre
// del amigo más joven.

let perfil = {
    amigo1: [
        nombre = 'Juan',
        edad = 22,
        amigo = true
    ],
    amigo2: [
        nombre = 'Mariano Moreno',
        edad = 65,
        amigo = true
    ],
    amigo3: [
        nombre = 'Almendra',
        edad = 4,
        amigo = true
    ]
};

function mostrarMasJoven (){
    if (perfil.amigo1[1] < perfil.amigo2[1] && perfil.amigo1[1] < perfil.amigo3[1]){
        console.log(perfil.amigo1[0] + " es el amigo más joven");
    } else if (perfil.amigo2[1]< perfil.amigo1[1] && perfil.amigo2[1] < perfil.amigo2[1]){
        console.log(perfil.amigo3[0] + " es el amigo más joven");
    } else {
        console.log(perfil.amigo3[0] + " es el amigo más joven");
    }
}

let mostrar = mostrarMasJoven();
