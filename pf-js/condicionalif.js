/**Condicionales
 * Serie de condiciones para que algo suceda
 * 
 * En programación el manejo de estas condiciones tenemos
 * !bloque if else
 * ? bloque if regunta por una condición en caso de que esta condición sea verdadera ejecuta un bloque de código, en caso de falso no ejecuta nada. Else maneja la ejecución de código en caso negativo.
 * 
 * Lo que se coloca dentro del "if" debe ser algo que genere un valor
 * *true or false (tipo de dato boolean) else no puede estar sin el if; pero if si puede estar sin else.
 */
/** Para convertir texto a número
 * !Importante
 * Si sse trata de convertir algo que no es un npumero como resultado obtendremos NaN (Not a Number)
 */

const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 - Number(birthYear);
console.log(age);

/** todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es verdadero o falso
 * == símbolo de igualdad en programación
 * Mayor que >
 * 2 > 1 == verdadero
 * 1 > 2 == falso
 * 0 > 0 == falso
 * 
 * Menor que <
 * 2 < 1 == falso
 * 3 < 5 == verdadero
 * 2 < 2 == falso
 * 
 * Comparador de igualdad ==
 * 2 == 2 verdadero
 * 3 == 1 falso
 * 
 * Mayor o igual que >=
 * 2 >= 2 == verdadero
 * 2 >= 1 == verdadero
 * 2 >= 3 == falso
 * 
 * Menor o igual que <=
 * 4 <= 4 == verdadero
 * 4 <= 5 == verdadero
 * 7 <= 5 == falso
 * 
 * Diferente de !=
 * 5 != 4 == verdadero
 * 5 != 5 == falso
 * 99 != 100 == verdadero
 * 
 * Negación (not) ! Invierte el valor de booleanos
 * !Verdadero == falso
 * !Falso == Verdadero
 * 
 * AND && Es un operador que devuelve 
 * ? Verdadero solo si ambos lados de la expresión sean Verdaderos
 * ? si un lado es Falso todo el resultado se vuelve Falso
 * Verdadero && verdadero == Verdadero
 * verdadero && falso == falso
 * age >= 6 && age <=12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 *
 * OR || Es un operador que devuelve
 * ? Falso si ambos lados de la expresion son Falso
 * ? Si un lado de la expresion es Verdadero devuelve Verdadero
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 *
 * age > 20 || age < 100
 *
 * age 101 == Verdadero
 * age 18 == Verdadero
 */

/**Dentro de los parentesis va la condición que se va a evaluar.
 * Dentro de las llaves va el código que se va a ejecutar en caso de que la condición sea verdadero
 * 
 * ? else if
 * Nos permite evaluar más de una condición va asociado a un if
 */
if (age >= 12 && age <= 21) { alert("Bienvenido a Prisma"); }
else if (age >= 22) { alert("Lo sentimos prueba con el grupo 20 y más"); }
else if (age >= 5 && age <= 11) { alert("Trata en Kids"); }
else (age <= 3); { alert("Babys es para ti"); }