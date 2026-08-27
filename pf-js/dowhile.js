/** 
 * *Do While
 * ! El bucle do while se ejecuta por lo menos una vez
 * Al ejecutar primero y luego ejecutar, te permite tener una ajecución garantizada
 * ! necesita un contado externo, para detener el bucle 
 * ! no debemos de olvidar dicho contador
 */
/** let counter = 0;
do {
    console.log(counter);
    counter += 1; // operador de suma y asignación (hace lo mismo que ++ o el código escrito aquí indica que al valor de counter se le agrega 1)
} while (counter <= 100);*/

let counter = 200;
do {
    console.log("hola")
    console.log(counter);
    counter += 1; // operador de suma y asignación
} while (counter <= 100);
console.log(counter);

counter = 1;
do {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    } else {
        console.log(`El numero ${counter} es impar`);
    }
    counter++;
} while (counter < 200);
