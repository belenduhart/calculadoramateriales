//Carrito de compras
function belen(){
    console.log("probando")
}
//Agregando productos nuevos
//Array carrito de compras vacio al que se le agrega lo anterior 
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

    let productoSeleccionado = listadoProductos.filter((p)=> p.id == idProducto);

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

//Boton -
function botonSacarFuncion(){
    let idProducto = document.querySelector(".idProducto").value;
    let contador = document.querySelector(".contador");
    let cantidad = contador.value;
   let productoSeleccionado = listadoProductos.filter((p)=> p.id == idProducto); 

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
    carritoCompras = carritoTemporal;
    console.log(carritoCompras);

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
let botonAgregarProducto;
if (botonAgregarProducto){
    botonAgregarProducto = document.getElementById("botonAgregarProducto");
if (botonAgregarProducto !== "null"){
    botonAgregarProducto.onclick = agregarProducto;}
}

//Carrito superior variable definida
let carritoSuperior= document.querySelector(".contadorCarrito");

function agregarProducto(){
    let confirmacionCarrito = document.getElementById("confirmacionAgregado");
    confirmacionCarrito.innerHTML= `  <input type="button" value="X" id="cerrarConfirmacionCarrito" 
    onclick="cerrarconfirmacionCarritoFuncion(); return false">
    <p >¡Agregamos tu pedido al carrito! </p>`
    document.getElementById("confirmacionAgregado").style.display="block";
    document.querySelector(".contenedorconfirmacion").style.display="block";

    //Contador en el carrito superior
    let cerrarConfirmacionCarrito = document.getElementById("cerrarConfirmacionCarrito");
    cerrarConfirmacionCarrito.onclick = cerrarConfirmacionCarritoFuncion;
    function cerrarConfirmacionCarritoFuncion(){
        document.getElementById("confirmacionAgregado").style.display="none";
        document.querySelector(".contenedorconfirmacion").style.display="none";
    }
}

//Dibujar al DOM cada producto que se agrego al carrito
//Funcion para dibujar el carrito
document.querySelector("#totalCarrito").style.display="none";
document.querySelector(".divdecidireliminar").style.display="none";

function pintarCarritoEnDom(){
let carritoCompras =  JSON.parse(localStorage.getItem("carritoCompras"));
console.log(carritoCompras);
let agregandoConElBoton = document.querySelector("#elementoAComprar");
let totalAPagar = 0;
        if (carritoCompras.length != 0){
        document.querySelector(".vacioCarrito").innerHTML= "";
        document.querySelector("#totalCarrito").style.display="none";
        
        //Dibujo el carro
        carritoCompras.forEach( p => {
            agregandoConElBoton.innerHTML +=
            `<div style="display:flex; flex-direction:row; width:100% ; margin-top:3vh;align-items: center;" >
            <div class="elementos" style="margin-left:0vw; width:10%;">
                <img src="${p.img}">
                <p class="nombrep" style="text-align:left"> ${p.nombre}</p>
            </div>
            <p style="text-align:left ; margin-left:13vw"> $ ${p.precio}</p>
            <p style="text-align:right"> ${p.cantidad}</p>
            <p style="text-align:right; margin-right:6vw;" >$ ${p.subtotal} </p>
            <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion(${p.id})" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
        });

        //Mostrar el subtotal y el total
        carritoCompras.forEach((p) => {
        totalCada1 = p.subtotal;
        //Suma todos los subtotales
        totalAPagar += totalCada1;
        console.log(totalAPagar);
        })

        let subTotal = document.querySelector("#totalCarrito");
            if(totalAPagar != 0){
                document.querySelector("#totalCarrito").style.display="block";
                subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
                            <p id="subtotal">Subtotal: $ ${totalAPagar}. </p>
                            <p id="total"> Total a pagar: $ ${totalAPagar}.- </p>
                            <a href="#/pagar">
                            <input type="button" name="" value="Pagar" class="botonComprar"  onclick="mostrarPagar()"></a>`;
            }

    }else{
        document.querySelector(".vacioCarrito").innerHTML= "No hay productos en el carrito de compras!";
    }
}
