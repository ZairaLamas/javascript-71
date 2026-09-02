/**
 * Diferencias
 * Hoisting: proceso poe el cual las function declaration y las variables escritas con var, pasan a estar hasta arriba en el proceso de ejecución.
 * Function expression y arrow function: no pasan por este proceso.
 */

console.log("function declaration: " + multiplyNumber(10, 20)); //function declaration siempre se va a ejecutar en primer lugar, no importa en que parte del código se encuentre, ya que pasa por el proceso de hoisting.
const addNumber = function (a, b) {
    return a + b;
}

const dividNumber = (a, b) => a / b;

function multiplyNumber(a, b) {
    return a * b;
}
console.log(divideNumber(10, 20)); //function expression y arrow function no pasan por el proceso de hoisting, por lo que si se intenta ejecutar antes de su declaración, se obtendrá un error.
