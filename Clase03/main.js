/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
//i++ === i = i + 1

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//   console.log(7 * i);
// }

// console.log(7 * 1);
// console.log(7 * 2);
// console.log(7 * 3);
// console.log(7 * 4);
// console.log(7 * 5);
// console.log(7 * 6);
// console.log(7 * 7);
// console.log(7 * 8);
// console.log(7 * 9);
// console.log(7 * 10);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// for(let i = 1; i <= 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//   if(i === 5 || i === 7){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del bucle while

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true; CUIDADO BUCLE INFINITO

// while(repetir){
//   console.log("hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del do while

do{
  codigo a ejecutar por primera vez y siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("entramos");
// }

// do {
//   console.log("entramos");
// } while (repetir);

/* 
estrucutra del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;
  case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;
  .
  .
  .
  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los valores anteriores
    break
}
*/

// let moneda = prompt("Ingrese el codigo de la moneda");

// switch (moneda) {
//   case "ars":
//     alert("Moneda de argentina");
//     break;

//   case "clp":
//     alert("Moneda de chile");
//     break;

//   case "cop":
//     alert("Moneda de colombia");
//     break;

//   default:
//     alert("Moneda no reconocida");
//     break;
// }

// let entrada = prompt("Ingresar un nombre");

// while ("ESC" != "ESC") {
    // switch (entrada) {
    // case "ANA":
     //  // alert("Hola ANA");
      // break;

    // case "JUAN":
      // alert("Hola JUAN");
      // break;

    // default:
      // alert("Quién eres?");
      // break;
  // }
 //  entrada = prompt("Ingresar un nombre");
// }


//  Ejercicio:

// let num = parseInt(prompt("Ingrese un numero: "));

// for(let i = 0; i <= 10;i++)
// {
    // console.log(num + i);
// }
/*alert("ESC para salir");

alert(`Por favor Ingrese su nombre:
       Las Opciones son: 
            Maria, Jose, Pedro y Manuel`);

let nombre = prompt("").toLocaleUpperCase();
let apellido = "";

while (nombre != "ESC") {

    let resultado_nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    switch (resultado_nombre) {
        case "Maria":
            alert(`Hola ${resultado_nombre}`);
            apellido = prompt("Ingrese su apellido: ");
            let resultado_apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
            if(resultado_apellido === null || resultado_apellido === "")
            {
                alert("No se ingreso un apellido");
                break;
            }
            alert(`Su nombre completo es ${resultado_nombre} ${resultado_apellido}`);
            break;

            case "Jose":
                alert(`Hola ${resultado_nombre}`);
                apellido = prompt("Ingrese su apellido: ");
                resultado_apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
                if(resultado_apellido === null || resultado_apellido === "")
            {
                alert("No se ingreso un apellido");
                break;
            }
                alert(`Su nombre completo es ${resultado_nombre} ${resultado_apellido}`);

            case "Pedro":
                alert(`Hola ${resultado_nombre}`);
                apellido = prompt("Ingrese su apellido: ");
                resultado_apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
                if(resultado_apellido === null || resultado_apellido === "")
            {
                alert("No se ingreso un apellido");
                break;
            }
                alert(`Su nombre completo es ${nombre} ${apellido}`);
            break;

            case "Manuel":
                alert(`Hola ${nombre}`);
                alert("No me importa tu apellido");
                break;
                apellido = prompt("Ingrese su apellido: ");
                alert(`Su nombre completo es ${nombre} ${apellido}`);
            break;
    
        default:
            alert("nombre no valido, intente de nuevo");
            break;
    }
    
    nombre = prompt("Ingrese su nombre: ");
}
*/

let numero = parseInt(prompt("Ingrese un numero para saber si es primo o no: "));
let resultado = 0;

for(let i = 1; i <= numero; i++)
{
    if(numero % i == 0)
    {
        resultado++;
    }

}
if(resultado == 2)
{
  alert(`El numero ${numero} es primo`);
}