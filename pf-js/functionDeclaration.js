// * Fuction Declaration
//declarar la funcion
function saludar() {
    console.log("hola");
}
//usar la función (invocar o llamar)
saludar();

//funcion con parámetros
function saludarConNombre(name, edad) {
    console.log(`Hola ${name} mucho gusto en conocerte no sabá que tenías ${edad} años`);
}

//pasando argumentos a una función, js no distingue los tipos de datos ingresados, solo la posición de estos (específico para funciones)
saludarConNombre("Zaira", 27);
saludarConNombre(7, "Polo");

/**función que retorna algo
 * !Importante: Cuando usamos return
 * 1. termina la ejecución de la función
 * 2. el valor retornado debe ser ocupado o nunca lo vamos a ver
 */
function multiplyTwoNumbers(a, b) { //typeof especifica que tipo de dato es
    if (typeof a == "number" && typeof b == "number") {
        return a * b; //finaliza ejecución, pero como es if condicional podemos escribir otra salida
    } else {
        return "por favor ingresa dos números"; // finaliza la ejecución
    }
    console.log("Nunca me vas a ver"); //esto nunca se ve
}

//aquí no voy a ver nada
multiplyTwoNumbers(2, 3);

//imprimiendo el valor de retorno en consola
console.log(multiplyTwoNumbers(5, 3));
console.log(multiplyTwoNumbers(3, "polo")); //ejemplo de error
