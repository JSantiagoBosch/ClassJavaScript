//localStorage y sessionStorage //division del Storage
//setItem(clave, valor) //guardar un elemento en el storage con su clave y valor
//getItem(clave)  //obtener un valor del storage por su clave
//removeItem(clave) //eliminar un elemento del storage por su clave
//clear() //eliminar todo el storage
//localStorage.key(i) // obtener la clave del storage con un iterador
//sessionStorage.key(i)
//JSON.stringify //dar formato json a un objeto o arreglo para ingresar correctamente el storage
//JSON.parse //devolver la estructura de objeto o arreglo que tenemos de un elemento en el storage

// const session = (usuario) => {
//   //validacion del usuario
// }

// const renderizarCarrito = (productos) => {
//   //renderizacion del carrito
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 350 },
//   { id: 3, nombre: "zapato", precio: 750 },
//   { id: 4, nombre: "gorra", precio: 800 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

//funcion para modificar el precio dado el nombre del producto
// const modificarPrecio = (nombre, nuevoPrecio) => {
//   //nos traemos los productos del storage
//   let productosStorage = localStorage.getItem("productos"); //string

//   //convertimos el string traido del storage a un arreglo con el parse
//   let data = JSON.parse(productosStorage); //arreglo

//   //del arrego anterior buscamos el producto por su nombre
//   let producto = data.find((item) => item.nombre === nombre);

//   //una vez encontrado el producto modificamos su precio
//   producto.precio = nuevoPrecio;

//   //una vez modificado el precio el arreglo data está actualziado y lo subimos al storage, actualizando el arreglo productos viejo
//   localStorage.setItem("productos", JSON.stringify(data));
// };

// let nombre = prompt("Ingres el nombre del producto a actualizar");
// let precio = parseInt(prompt("Ingrese el nuevo precio del producto"));

// modificarPrecio(nombre, precio);

//crear una funcion que agregue un nuevo producto al storage

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "media", precio: 350 },
  { id: 3, nombre: "zapato", precio: 750 },
  { id: 4, nombre: "gorra", precio: 800 },
];

localStorage.setItem("productos", JSON.stringify(productos));

//funcion para modificar el precio dado el nombre del producto
const agregarProducto = (nombre, precio) => {
  //nos traemos los productos del storage
  let productosStorage = localStorage.getItem("productos"); //string

  //convertimos el string traido del storage a un arreglo con el parse
  let data = JSON.parse(productosStorage); //arreglo

  let objeto = {
    id: data.lenght + 1,
    nombre,
    precio,
  };

  data.push(objeto);

  //una vez modificado el precio el arreglo data está actualziado y lo subimos al storage, actualizando el arreglo productos viejo
  localStorage.setItem("productos", JSON.stringify(data));
};


let nombre = prompt("Ingres el nombre del nuevo producto");
let precio = parseInt(prompt("Ingrese el precio del nuevo producto"));

agregarProducto(nombre, precio);

// Filtrar por nombre y eliminar