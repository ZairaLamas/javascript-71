//* Arrow Function (funciones flecha)
/**
 * ! Importante: Return implícito.
 * Quiere decir que si tu funcion se puede escribir en una sola línea sin necesidad de llaves, no es necesario poner la palabra return, ya que se asume que el valor de retorno es el resultado de la expresión.
 * La expresión a l que apunte la flecha será retornada.
 * 
 * Expresones lambda
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(10, 20); // e valor se debe de usar inmediatanmente o capturar en una variable, ya que no se puede llamar a la función después de su declaración. Aquí se está capturando en la variable result.
console.log(`El resultado de la suma es ${result}`);

const evenOrOdd = (limit) => {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(`El numero ${i} es par`)
        } else {
            console.log(`El numero ${i} es impar`)
        }
        total += i;
    }
    return total;
}
console.log(evenOrOdd(50));