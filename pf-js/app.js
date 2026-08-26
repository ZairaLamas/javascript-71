/** Switch
 * Es una estructura de control condicional. 
 * Pero a diferrencia del if no se basa en valores de verdad o falso; sino que se basa en opciones.
 * ? Nos permite tener multiples opciones y con base en la opción seleccionada ejecutar un bloque de código.
 * ?Tiene una respuesta por default, por si la opción ingresada no esta en la lista.
 * ? Se divide en casos.
 * ? Cada caso lleva su bloque de código y debe llevar al finalizar la palabra break.
 * 
 * Nota:
 * todo: Expresiones (esxpression): Es todo quello que genera una valor.
 * *ejemplo: una suma, usar una variable, usar una función, texto ,número.
 * todo: Declaraciones (statement): No genera valor y por lo general son estructuras de control o bucles.
 * *ejemplos: if, switch, for, while.
 */

let month = prompt("Escribe el mes que te gustaría ver");

switch (month) {
    case "Enero";
        alert("El mes de Enero es el primer mes del año");
        break;
    case "Febrero";
        alert(`El mes de ${month} es el segundo mes del año`);
        //"El mes " + month + " es el segundo mes del año."
        break;
    case "Marzo";
        alert(`El mes de ${month} es el tercer mes del año`);
        break;
    case "Abril":
    case "Mayo":
        console.log("Abril y Mayo");
        break;
    default:
        alert("El mes seleccionado no aplica");
}