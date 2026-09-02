/**
 * * Callbacks:
 * Es una función que se pasa como argumento a otra función, para ser ejecutada en el omento que la función que recibe el callback lo decida.
 * !Importante, las funcioness de callback deben de retornar el resultado.
 * ? funciones de primera clase: todas las funciones son tratadas como si fueran un valor.
 */

function procesarPago(nombreCliente, callback, cuenta) {
    const saldoAPagar = callback(cuenta); //aqui callback es una función
    console.log(`El cliente ${nombreCliente} debe pagar: $${saldoAPagar} después de impuestos.`);
}

/** Opciones para la función de callback
 * 1. Crear una función aparte y luego mandarla como argumento
 * 2. Crear una función anónima dentro de los paréntesis de la función principal
 */

//1.
function addIVA(cuenta) {
    return cuenta * 1.16;
}
procesarPago("Juan", addIVA, 1000); //aquí se usa como argumento de la función procesarPago

//2. ejemplos: función anónima y otro con arrow function
console.log("-------- Callback de función anónima --------");
procesarPago("Carlos",
    function (cuenta) {
        return cuenta * 1.20;
    }, 2000);

console.log("-------- Callback de arrow function --------");
procesarPago("Pedro", (cuenta) => cuenta * 1.30, 2000);