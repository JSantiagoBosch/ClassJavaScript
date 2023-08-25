const usuarios = [
    { dni: 39485039, nombre: "Camila", edad: 10 },
    { dni: 98304834, nombre: "Juan", edad: 20 },
    { dni: 93872635, nombre: "Manuel", edad: 30 },
    { dni: 15276837, nombre: "Sofia", edad: 40 },
];

//forEach recorre el arreglo
usuarios.forEach((item) => {
    console.log(item);
});

usuarios.forEach((item) => {
    console.log(item.dni);
    console.log(item.nombre);
    console.log(item.edad);
});

//filter filtra un arreglo con respecto a una condicion
let edad = parseInt(prompt("Ingrese una edad"));
let filtrados = usuarios.filter((item) => item.edad >= edad);

filtrados.forEach((item) => {
  alert(`
    Id: ${item.dni}
    Nombre: ${item.nombre}
    Precio: ${item.edad}
  `);
});

//find encontrar el primer elemento dentro del arreglo que cumple la condicion
const encontrado = usuarios.find(item => item.nombre === "Camila");
console.log(encontrado);

let nombre = prompt("Ingrese el nombre del usuario");
let usuario = usuarios.find((item) => item.nombre === nombre);

if (usuario) {
  alert(`
    Id: ${usuario.dni}
    Nombre: ${usuario.nombre}
    Precio: ${usuario.edad}
  `);
} else {
  alert("El nombre no se encuentra disponible");
}
