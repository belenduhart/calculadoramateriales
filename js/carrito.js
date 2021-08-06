//Carrito de compras


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


