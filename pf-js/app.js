/**
 * *Objetos en JS (JSON)
 * Son una estructura de datos, similar a diccionarios o mapas
 * Se organiza en pares.
 * Llave: valor asociado
 * Es una estrucutra de datos desordenada
 * Aquí los datos se obtienen mediante su llave.
 * ! No son los mismos objetos que los de Programación orientada a objetos.
 * ! Las llaves no se pueden repetir
 * 
 * ?Curiosidades
 * Estas notación se volvió estandar para intercambio de informción entre el cliente y servidor en la Web.
 * ? JSON (JavaScript Object Notation).
 */

// como declarar un objeto
const participante = { // en este caso el objeto se llama participante
    name: "Juan",
    lastName: "Perez",
    age: 30,
    isAlive: true,
    sayHi: function () { // esta función o lleva nombre, adopto el nombre de la llave
        console.log("Juan dice Hola");
    },
    ch: 71,
};

// Cómo accder a los valores
// 1. Notación de punto (más usado)
// 2. Notación de corchete.

console.log(`El nombre de la participante es ${participante.name}, obtenido con notación punto.`);

console.log(`La edad del participante es ${participante["age"]}, obtenido con notación de corchete.`);

participante.sayHi(); // llamando a la función dentro del objeto

// como gregar un nuevo par llave: valor
console.log(participante);
participante.favoriteAnimal = ["perro", "gato", "conejo"];
console.log(participante);

participante.address = {
    country: "México",
    city: "Ciudad de México",
    street: "Calle 123",
    continent: "América",
};
console.log(participante);

// como accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto u otro array)
console.log(`El primer animal favorito de ${participante.name} es ${participante.favoriteAnimal[0]}.`); //aquí ingresamos al array con [] y el index del elemento que queremos obtener (# lugar)

console.log(`El país donde vive ${participante.name} es ${participante.address["country"]}`);

//como modificar el valor de una llave
participante.age = 27;
console.log(participante.age);

//como eliminar una llave de un objeto
delete participante.ch;
console.log(participante);

// como recorrer un objeto (iterar)
for (const key in participante) {
    console.log(`El valor ${key}, es: ${participante[key]}`);// en esta si pide el uso de corchetes para acceder al valor de la llave, ya que no es un nombre literal, sino una variable que contiene el nombre de la llave.
}