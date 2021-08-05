//Carrito de compras
//Array con productos disponibles para la venta
const listadoProductos = [ {nombre: "ARENA", precio: 1950, id:0, stock: 10, img:"../../imagenes/arena.jpg",} ,
{nombre: "PIEDRA", precio: 4000, id:"piedracarro", stock: 10000, img:"../imagenes/piedra.jpg",} ,
{nombre: "CEMENTO LOMA NEGRA", precio: 900, id:"lomanegra", stock: 10000, img:"../imagenes/cementolomanegra.jpg",} ,
{nombre: "CEMENTO AVELLANEDA", precio: 700, id:"avellaneda",  stock: 10000, img:"../imagenes/cementoavellaneda.jpg",} ,
{nombre: "CEMENTO HOLCIM", precio: 650, id:"holcim" , stock: 10000, img:"../imagenes/cementoholcim.jpg",} ,
{nombre: "CEMENTO COMODORO", precio: 890, id:"comodoro" , stock: 10000, img:"../imagenes/cementocomodoro.png",} ,
{nombre: "CAL MALAGUEÑO", precio: 800, id:"malaguenio" , stock: 10000, img:"../imagenes/cal3.jpg",} ,
{nombre: "CAL SANTA ELENA", precio: 900, id:"santaelena" , stock: 10000, img: "../imagenes/cal1.jpg", } ,
{nombre: "CAL EL MILAGRO", precio: 970, id:"elmilagro" , stock: 10000, img: "../imagenes/cal2.jpg",} ,
{nombre: "HIDROFUGO PROTEX", precio: 300, id:"protex" , stock: 10000, img: "../imagenes/hidrofugoprotex.jpg",} ,
{nombre: "HIDROFUGO SIKA", precio: 400, id:"sika" , stock: 10000, img: "../imagenes/hidrofugosika.jpg", } ,
{nombre: "HIDROFUGO WEBER", precio: 370, id:"weber" , stock: 10000, img: "../imagenes/hidrofugoweber.jpg",} ,
{nombre: "LADRILLO COMUN", precio: 30, id:"ladrillocomun" , stock: 10000,img: "../imagenes/ladrillocomun.jpg",} ,
{nombre: "LADRILLON", precio: 40, id:"ladrillon" , stock: 10000, img: "../imagenes/ladrillon.jpg",} ,
{nombre: "BLOQUE VIBRADO", precio: 55, id:"bloquevibrado" , stock: 10000, img: "../imagenes/cementovibrado.jpg",} ,
{nombre: "LADRILLO HUECO 8", precio: 50, id:"ladrillohueco8" , stock: 10000, img: "../imagenes/hueco8.jpg",} ,
{nombre: "LADRILLO HUECO 12", precio: 50, id:"ladrillohueco12" , stock: 10000, img: "../imagenes/hueco12.jpg",} ,
{nombre: "LADRILLO HUECO 18", precio: 50, id:"ladrillohueco18" , stock: 10000, img: "../imagenes/hueco18.jpg",} ,
{nombre: "PINTURA ASFALTICA MAXHAUS", precio: 780, id:"maxhaus" , stock: 10000, img: "../imagenes/maxhaus.jpg",} ,
{nombre: "PINTURA ASFALTICA MEGAFLEX", precio: 700, id:"megaflex" , stock: 10000, img: "../imagenes/megaflex.jpg",} ,
{nombre: "PINTURA ASFALTICA DESSUTOL", precio: 600, id:"dessutol" , stock: 10000, img: "../imagenes/dessutol.jpg",} ,
]

// //Ordeno la lista de productos por precio (luego sirve para el sort)
// let listadoProductosOrdenado= listadoProductos.sort((a, b) => {
//     return a.precio - b.precio
//         });
// ;
// console.log(listadoProductosOrdenado);

//Agregando productos nuevos


//Saber la cantidad de unidades del producto que quiere el usuario
//Boton +
function botonAgregarFuncion(id){
    let contador = document.getElementById("contador-"+id);
    let cantidad = contador.value;
    const productoSeleccionado = listadoProductos.filter((p)=> p.id == id);

    if (cantidad < productoSeleccionado[0].stock){
        cantidad++;
    }else{
        let fueraStock = document.querySelector("#fueraStock");
        fueraStock.innerHTML= `No contamos con más stock de ese producto <br>`;
        // alert("No contamos con más stock de " + productoSeleccionado);
    }
    contador.value = cantidad;
    //Genero nuevo producto añadido
    const productoAniadido = { 
		id: productoSeleccionado[0].id,
		nombre: productoSeleccionado[0].nombre,
	 	precio: productoSeleccionado[0].precio,
	 	cantidad: cantidad,
        subtotal: cantidad * productoSeleccionado[0].precio,
    }
      //Agrego al array de carrito los productos añadidos
    let carritoTemporal = carritoCompras.filter((p)=> p.id != id);
    carritoTemporal.push(productoAniadido);
    console.log(carritoTemporal);
    carritoTemporal = carritoCompras;
    //Guardar en localStorage
    localStorage.setItem("carritoTemporal", JSON.stringify(carritoCompras));
    //Carrito superior se agrega la cantidad
    carritoSuperior.innerHTML = ` ${cantidad} `;
    carritoSuperior.style.display= "none"; 
 } 



//Boton -
function botonSacarFuncion(id){
    let contador = document.getElementById("contador-"+id);
    let cantidad = contador.value;
    const productoSeleccionado = listadoProductos.filter((p)=> p.id == id);
    
    if (cantidad != 0){
        cantidad--
        let fueraStock = document.querySelector("#fueraStock");
        fueraStock.innerHTML= ``;
    }else {
       cantidad = 0;
    }
    contador.value = cantidad;
    //Genero nuevo producto añadido
    const productoAniadido = { 
		id: productoSeleccionado[0].id,
		nombre: productoSeleccionado[0].nombre,
	 	precio: productoSeleccionado[0].precio,
	 	cantidad: cantidad,
        subtotal: cantidad * productoSeleccionado[0].precio
    }
    //Agrego al array de carrito los productos añadidos
    let carritoTemporal = carritoCompras.filter((p)=> p.id != id);
    carritoTemporal.push(productoAniadido);
    console.log(carritoTemporal);
    carritoTemporal = carritoCompras;
    //Guardar en localStorage
    localStorage.setItem("carritoTemporal", JSON.stringify(carritoCompras));
    //Carrito superior se agrega la cantidad
    carritoSuperior.innerHTML = ` ${cantidad} `;
    carritoSuperior.style.display= "none"; 
}

// //Array carrito de compras vacio al que se le agrega lo anterior 
const carritoCompras = [];

let botonAgregarProducto = document.getElementById("botonAgregarProducto");
botonAgregarProducto.onclick = agregarProducto;
//Carrito superior variable definida
let carritoSuperior= document.querySelector(".contadorCarrito");

function agregarProducto(){
    let confirmacionCarrito = document.getElementById("confirmacionAgregado");
    confirmacionCarrito.innerHTML= `  <input type="button" value="X" id="cerrarConfirmacionCarrito" 
    onclick="cerrarconfirmacionCarritoFuncion(); return false" style="border-radius:10px; position:absolute; top:42%; left:66%; padding: 1vh 1vw; font-size:1.2em; color:red ">
    <p style="font-size:2em; height:7vh; color: black; font-weight: bold; text-align: center; margin: 40vh auto; padding: 8vh 1vw; width:50%;">¡Agregamos tu pedido al carrito! </p>`
    document.getElementById("confirmacionAgregado").style.display="block";
    document.querySelector(".contenedorconfirmacion").style.display="block";
    //Contador en el carrito superior
    let cerrarConfirmacionCarrito = document.getElementById("cerrarConfirmacionCarrito");
    cerrarConfirmacionCarrito.onclick = cerrarConfirmacionCarritoFuncion;
    function cerrarConfirmacionCarritoFuncion(){
        document.getElementById("confirmacionAgregado").style.display="none";
        document.querySelector(".contenedorconfirmacion").style.display="none";
        carritoSuperior.style.display= "block";   
    }
}

//CHECK - OUT
//Agregado de productos a la pagina final del carrito
// const obtenerCarrito = localStorage.getItem("carritoCompras")
// const carritoCompras = JSON.parse(obtenerCarrito);


// let agregandoConElBoton = document.querySelector("#elementoAComprar");
// carritoCompras.forEach( p => {
//     agregandoConElBoton.innerHTML +=
//     `<div class="elementos">
//         <img src="${p.img}">
//         <p class="nombrep"> ${p.nombre}</p>
//     </div>
//     <p> ${cantidadIngresada}</p>
//     <p> $ ${p.precio}</p>
//     <p>$ ${p.subtotal} </p>
//     <i class="far fa-trash-alt"></i>
//     <input type="submit" name="" value="Eliminar" class="botonEliminar" onclick="eliminarDelCarrito()">`
// });

// let totalCarrito = carritoCompras.reduce((currentTotal, producto) => {
//     return p.subtotal + currentTotal;
//   }, 0);

// var totalAMostrar = innerHTML.totalCarrito;
// let subTotal = document.querySelector("#totalCarrito");
// subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
//                         <p id="subtotal">Subtotal: $ ${totalAMostrar} </p>
//                         <p id="total"> Total a pagar: $ ${totalAMostrar} </p>
//                         <input type="submit" name="" value="Comprar" class="botonComprar">`;






	



