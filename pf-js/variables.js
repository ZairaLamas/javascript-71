/** 
* En javascript hay 3 formas de declarar variables
* !Existe una forma que ya no se recomiendo su uso
!var
Al proceso de crear una variable y darle un valor se le llama asignación

Las variables que pueden ser asignada (pueden canbiar en un futuro el valor que tienen) se declaran:
* ? let nombreVariable = valor;
*
* * el operador = se conoce como operador de asignación
* Una vez creada una variable podemos usarla en otros lugares del código utilizando su nombre, las variables al ser uttilizadas no van entre ""
* 
* Las variables que no pueden sr reasignadas (su valor no puede cambiar)
* se declaran:
* ! const nombreVariable = valor
* 
* Nota:
* Palabras reservadas son palabras que utiliza el lenguajede programación y si intentamos usarlas en otros laos pueden generar errores.
*/
let nombre = "Zaira"; //tipo string
console.log(nombre);
let name = "Polo";
console.log(name);

const birthYear = 1998; //tipo numérico
console.log(birthYear);

/* Reasignando una variable (cambiando el valor que tiene) 
Cuando reasignamos una variable (una variable ya creada) 
! Ya no es necesario poner let
*/

nombre = "Zach";
console.log(nombre);
nombre = "Doggy";
console.log(nombre);

/** sección de prueba 
birthYear = 1994; da error con una variable constante
*/

/* Concatenar:
Nos permite pegar el valor de una variable a un texto, importante poner espacios en untexto antes y después de pagar una variable*/
console.log("Hola soy " + nombre + " y estoy en gen con " + name + " nací en el año " + birthYear);