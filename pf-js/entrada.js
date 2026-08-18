/** Prompt:
 * 1. hay que asignar su uso a una variable para luego usar el valor que ingresó el usuario
 *  1.1 Usar el valor inmediatamente
 * !Importante
 * 1. No se recomiendo su uso en aplicaciones en producción
 * 2. Bloquea el código, esto quiere decir que el código que este debajo de donde escribimos el uso de prompt no se va a ejecutar, hasta que el ususario ingrese algo.
 * 3. No se puede personalizar
 * 4. Todo lo que se ingresa mediante prompt siempre será un String
 */

/**const edad = prompt("Ingresa tu edad", 80);
console.log(edad);
const nombre = prompt("agrega tu nombre");
console.log("Hola " + nombre + " tienes " + edad + " años sin bañarte");
*/

const pelicula = prompt("Ingresa tu película o serie favorita");
console.log(pelicula);
const personaje = prompt("Ingresa tu personaje fav de tu peli fav");
const favorito = prompt("por qué es tu favorito");
console.log(favorito);
console.log("Mi película favorita es " + pelicula + " y mi personaje favorito es " + personaje + " porque " + favorito);