//  Pre-Entrega #1

//FUNCIONES:

function menu() {  // MENU CON UN WHILE Y UN SWITCH PARA LA SELECCION DE ACCIONES, LA VARIABLE BUCLE ESTA INICIALIZADA EN 1 PARA QUE ENTRE DIRECTAMENTE A REGISTRAR AL USUARIO Y LUEGO SI PUEDAS ESCOGER UNA ACCION.
    alert("Bienvenidos a mi pagina!");

    let bucle = 1;
    let flag = 0;  //CREO LA VARIABLE FLAG PARA LUEGO USARLO EN SUMA Y PROMEDIO

    while (bucle != 5) {

        switch (bucle) {
            case 1:

                usuario();
                break;

            case 2:
                flag = parseInt(prompt("¿Cuantos numeros quieres sumar?")); //EN FLAG VOY A GUARDAR LA CANTIDAD DE NUMEROS A INGRESAR, Y SE LO PASO A SUMAR(), PARA LUEGO USARLO EN EL FOR
                sumar(flag);
                break;

            case 3:

                restar();
                break;

            case 4:
                flag = parseInt(prompt("¿Cuantos numeros quieres sumar?"));
                popurri(flag);
                break;

            case 5:

                alert("Nos vemos!");
                break;

            default:

                alert("Opcion no valida, intente de nuevo");
                break;
        }


        bucle = parseInt(prompt("Menu: (Elija una de las opciones)\n1- Ingreso de datos del usuario\n2- Sumar numeros\n3- Restar numeros hasta que se ingrese un 0\n4- Ingresar numeros para obtener la suma, el promedio Y si el resultado es par o impar\n5- Salir"));
    }

}

function sumar(final) {  //INICIALIZO RESULTADO EN 0, CREO UNA BANDERA PARA PONERLE UN FIN AL FOR, INGRESO NUMERO, HAGO LA OPERACION Y LO GUARDO EN RESULTADO, MUESTRO RESULTADO Y RETORNO EL RESULTADO PARA LUEGO USARLO EN PROMEDIO.
    let resultado = 0;

    for (let i = 0; i < final; i++) {
        numero = parseInt(prompt("Ingrese un numero:"));
        resultado += numero;    //resultado = resultado + numero;
    }
    alert(`La sumatoria de todos los numeros es ${resultado}`);

    return resultado;
}

function restar() { //CREO UNA VARIABLE I PARA LLEVAR UN CONTEO DEL BUCLE Y HACER EL PRIMER INGRESO DEL NUMERO, CREO LA VARIABLE NUMERO PARA ENTRAR AL WHILE DEL CUAL VOY A SALIR CUANDO INGRESE EL NUMERO "0", DENTRO DEL WHILE HAGO UN IF PARA VER SI ES EL PRIMER NUMERO A INGRESAR, REALIZO LA OPERACION CORRESPONDIENTE MUESTRO RESULTADO Y VUELVO A PEDIR NUMERO PARA NO QUEDAR E UN BUCLE INFINITO.

    let i = 1;
    let numero = parseInt(prompt(`${i}- numero:\n("0" para salir)`));
    let resultado = 0;
    

    while (numero != 0) {
        if (i == 1)
        {
            resultado = numero - resultado;
            
        }else{
            resultado -= numero; // resultado = resultado - numero
        }

        i++;
        alert(`La resta es ${resultado}`);
        numero = parseInt(prompt(`${i}- numero:\n("0" para salir)`));
    }
}

function promedio(total,divisor) {  //PASO POR PARAMETRO LA SUMA TOTAL Y CALCULO EL PROMEDIO 

    resultado = total / divisor;
    alert("El promedio es " + parseInt(resultado));

    return parseInt(resultado);
}

function parImpar(prom) {  //PASO POR PARAMETRO EL RESULTADO DEL PROMEDIO Y VERIFICO SI ES PAR O IMPAR

    if (prom % 2 == 0)
    {
        alert(`El numero ${prom} es par`);
    }else{
        alert(`El numero ${prom} es impar`);
    }
}

function popurri(flag) {   //LLAMO A LAS FUNCIONES SUMA, PROMEDIO Y PAR IMPAR CREO QUE ESTA FUNCION SE PODRIA OMITIR Y LLAMAR A TODAS LAS FUNCIONES EN EL SWITCH
    
    let resultadoSuma = sumar(flag);
    let resultadoPromedio = promedio(resultadoSuma, flag);
    parImpar(resultadoPromedio);
}

function usuario() {  //INGRESESO LOS DATOS DEL USUARIO

    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido");
    let nacimientoMes = parseInt(prompt("Ingrese el mes en el que nacio"));
    let nacimientoAno = parseInt(prompt("Ingrese el año en el que nacio"));
    let mesActual = parseInt(prompt("Ingrese el mes actual"));
    let anoActual = parseInt(prompt("Ingrese el año actual"));

    let mes = mesActual - nacimientoMes;
    let anos = anoActual - nacimientoAno;

    if (mes >= 0) {
        alert(`Hola ${nombre} ${apellido} tienes ${anos} años`);

    } else {
        alert(`Hola ${nombre} ${apellido} tienes ${anos - 1}`);
    }
}

//  MAIN

menu();