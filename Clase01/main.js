// comentario de linea

/* 
comentario
de
bloque
*/

//forma recomendada para declarar variables
// let edad = 15;
// let nombre = "andres";
// nombre = "juan";

//forma no recomendada para declarar variables
// var numero = 34;

// constantes
// const CONSTANTE = 5;

// camelCase  =>  nombreGrandeBonito
// snake_case =>  nombre_grande_bonito
// PascalCase =>  NombreGrandeBonito

// let numeroUno = 5;
// let numeroDos = 10;

// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;

// console.log("Resultado suma", resultadoSuma);
// console.log("Resultado resta", resultadoResta);
// console.log("Resultado multiplicacion", resultadoMultiplicacion);
// console.log("Resultado division", resultadoDivision);

// let saludo = "Hola";
// let nombre = "Camila";
// let saludoCompleto = saludo + " " + nombre;

// console.log(saludoCompleto);

let nombre = prompt("Ingrese su nombre");
alert("Hola " + nombre);

// let numero = prompt("Ingrese un numero");
// alert(parseInt(numero) + 10);

// let numero = 8;
// let nombre = "andres";

// console.log(typeof numero);
// console.log(typeof nombre);

let numero1 = parseInt(prompt("Ingrese el primer numero: ", 0));
console.log(numero1);
console.log(typeof(numero1));
let numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0));
console.log(numero1);
console.log(typeof(numero2));

let result = numero1 + numero2;

alert("La suma de los dos numeros es: " + result);