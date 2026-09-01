/**
 * For loop
 * Estructura de datos array
 * Nota: Lo que va dentro de los parentesis
 * *Estructura de datos: ¿qué son y por qué son importantes?
 * Son estructuras que nos ayudan a agrupar y/u ordenar datos; para manipular estos datos de manera más eficiente
 * un dato "no representa nada por si solo"
 * los datos "juntos y dándoles contexto se vuelve información"
 *
 * ? Array
 * Es una estructura de datos ordenada
 * !importante:
 * Los datos se identifican por un índce, el índice empieza a contar desde 0
 * El tamaño  real se cuenta desde el 1 (ejemplo: a=0, b=1, c=2, d=3 tamaño real del array =4)
 * ! Importante pero particular de JS
 * Podemos guardar cualquier tipo de datos dentro del arry, incluso combinaciones.
 * Tiene tamaño dinámico.
 */
//definicón de un array
const arrayVacio = []; //ejemplo de array vacío
const arrayContenido = ["nombre", 20, true]; //ejemplo distinto datos un mismo array
const months = ["Jan", "March", "April", "June"];

/**obtención de un elemento guardado en un array
 * *notación corchete
 */
console.log(arrayContenido[1]); //2o. dato
console.log(arrayContenido[0]); //1er. dato
console.log(arrayContenido[3]);

/** Ingresar datos al array, existen 2 métodos
 * * 1. Unshift: para ingresar elementos al comienzo del array
 * * 2. Push: para agregar elementos al final del array
 */
//? Unshift
console.log("Array antes");
console.log(arrayContenido); //muestra el contenido del array
arrayContenido.unshift("Zach");
console.log("Array después");
console.log(arrayContenido); //muestra el contenido del array
//? Push
console.log("Array antes");
console.log(arrayContenido); //muestra el contenido del array
arrayContenido.push("Jahdai", false);
console.log("Array después");
console.log(arrayContenido); //muestra el contenido del array

/** Para eliminar datos del array
 * * 1. Shift: Elimina el primer elemento del array y lo deja guardado como variable
 * * 2. Pop: Elimina el último dato del array y lo guarda como variable
 */
//? Shift
console.log("Array antes");
console.log(arrayContenido); //muestra el contenido del array
// arrayContenido.shift();  esta es una forma de hacerlo sin que te aparezca en consola la info eliminada
console.log(`Elemento eliminado ${arrayContenido.shift()}`); // muestra en consola la info eliminada
console.log("Array después");
console.log(arrayContenido); //muestra el contenido del array
//? Pop
console.log("Array antes");
console.log(arrayContenido); //muestra el contenido del array
// arrayContenido.pop();  esta es una forma de hacerlo sin que te aparezca en consola la info eliminada
console.log(`Elemento eliminado ${arrayContenido.pop()}`); // muestra en consola la info eliminada
console.log("Array después");
console.log(arrayContenido); //muestra el contenido del array

/** Reasignar el valor de un dato */
let valorAnterior = arrayContenido[0]; // guarda la info antes de ser alterada, no es obligatorio
arrayContenido[0] = "Zach";
arrayContenido[2] = "Polo";
console.log(`el valor anterior es ${valorAnterior}`);
console.log(`Resultado de la reasignación de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 * *Splice: Elimina o agrega contenido 
 * el orden de la sintaxis es (# posición desde donde comienza a contar, # elementos a eliminar, elementos a agregar desde la posicion elegida) ejemplo visual: (#,#,#)
 */
//? Splice para eliminar
console.log("======Splice");
arrayContenido.splice(1, 1);//se coloca en el dato 1, borra ese dato
console.log(arrayContenido);
arrayContenido.splice(1, 2); //borró 2 datos apartir de la posición 1
console.log(arrayContenido);
//? Splice para agregar
months.splice(1, 0, "Febrero"); //posición 1, no se borró nada, añadió un dato en esa misma posición
console.log(months);