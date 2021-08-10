//Carrito de compras


// //Ordeno la lista de productos por precio (luego sirve para el sort)
// let listadoProductosOrdenado= listadoProductos.sort((a, b) => {
//     return a.precio - b.precio
//         });
// ;
// console.log(listadoProductosOrdenado);

//Agregando productos nuevos
// //Array carrito de compras vacio al que se le agrega lo anterior 
let carritoCompras = [];
if (localStorage.getItem("carritoCompras")){
    carritoCompras = JSON.parse(localStorage.getItem("carritoCompras"))
}
//Saber la cantidad de unidades del producto que quiere el usuario
//Boton +
function botonAgregarFuncion(){
    let idProducto = document.querySelector(".idProducto").value;
    let contador = document.querySelector(".contador");
    let cantidad = contador.value;
    const productoSeleccionado = listadoProductos.filter((p)=> p.id == idProducto);
    if (cantidad < productoSeleccionado[0].stock){
        cantidad++;
    }else{
        let fueraStock = document.querySelector("#fueraStock");
        fueraStock.innerHTML= `No contamos con más stock de ese producto <br>`;
    }
    contador.value = cantidad;
    //Genero nuevo producto añadido
    const productoAniadido = { 
		id: productoSeleccionado[0].id,
		nombre: productoSeleccionado[0].nombre,
	 	precio: productoSeleccionado[0].precio,
        img: productoSeleccionado[0].img,
	 	cantidad: cantidad,
        subtotal: cantidad * productoSeleccionado[0].precio,
    }
    //Agrego al array de carrito los productos añadidos
let carritoTemporal = carritoCompras.filter((p)=> p.id != idProducto);
    carritoTemporal.push(productoAniadido);
    console.log(carritoCompras);
    carritoCompras = carritoTemporal;
//    carritoCompras =  carritoTemporal;
    //Guardar en localStorage
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
    //Carrito superior se agrega la cantidad
    let cantidadTotal = 0;
    carritoCompras.forEach((p) => {
        cantidadCada1 = p.cantidad;
        cantidadTotal += cantidadCada1
        console.log(cantidadTotal);
    })
    carritoSuperior.innerHTML = ` ${cantidadTotal} `;
    carritoSuperior.style.display= "none";
 } 


//Boton -
function botonSacarFuncion(){
    let idProducto = document.querySelector(".idProducto").value;
    let contador = document.querySelector(".contador");
    let cantidad = contador.value;
    const productoSeleccionado = listadoProductos.filter((p)=> p.id == idProducto); 
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
        img: productoSeleccionado[0].img,
	 	cantidad: cantidad,
        subtotal: cantidad * productoSeleccionado[0].precio
    }
    //Agrego al array de carrito los productos añadidos
    let carritoTemporal = carritoCompras.filter((p)=> p.id != idProducto);
    carritoTemporal.push(productoAniadido);
    console.log(carritoTemporal);
    console.log(carritoCompras );
    window.carritoCompras = carritoTemporal;
    console.log(carritoCompras );
    //Guardar en localStorage
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
    //Carrito superior se agrega la cantidad
    //Obtengo el total de productos
    let cantidadTotal = 0;
    carritoCompras.forEach((p) => {
        cantidadCada1 = p.cantidad;
        cantidadTotal += cantidadCada1
        console.log(cantidadTotal);
    })
    carritoSuperior.innerHTML = ` ${cantidadTotal} `;
    carritoSuperior.style.display= "none";
}

//Carrito Superior

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



