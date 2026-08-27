/**Loops
 * Sonestructuras de control que nos permiten repetir n cantidad de veces un bloque de código {}
 * 
 * ? Tenemos 3 grandes loops:
 * ? While
 * ? Do while
 * ? For
 * 
 * * While:
 * Es el loop que se ejecuta mientras una condición sea verdadera.
 * En cuanto esta condición se vuelve falsa se detiene (para)
 * ! Importante
 * ! Necesita un contador externo o una forma de parar
 * ! No olvidar actualizar el contador
 * ! Puedes generar un bucle infinito
 */
// 1. Contador
let counter = 0;
// 2. Iniciamos el bucle
while (counter <= 100) {
    console.log(counter);
    counter = counter + 1;
}
/** % Operador modulo
 * regresa el residuo de una división
 * ejemplo:
 * 5 % 2 = 1
 * 6 % 2 = 0
 */

counter = 1;
while (counter < 200) {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    } else {
        console.log(`El numero ${counter} es impar`);
    }
    counter++; //operador de incremento suma 1 al valor de la variable
}
