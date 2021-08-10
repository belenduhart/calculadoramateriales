//Check-Out

//Agregado de productos a la pagina final del carrito
//Esconder el total
document.querySelector("#totalCarrito").style.display="none";
document.querySelector(".divdecidireliminar").style.display="none";

//Obtengo el array de carrito desde json
const obtenerCarrito = localStorage.getItem("carritoCompras")
const carritoCompras1 = JSON.parse(obtenerCarrito);
console.log(carritoCompras1);
let botonEliminarEnProducto;
let agregandoConElBoton = document.querySelector("#elementoAComprar");
if (carritoCompras1.length != 0){
    document.querySelector(".vacioCarrito").style.display="none";
    document.querySelector("#totalCarrito").style.display="none";
    carritoCompras1.forEach( p => {
        agregandoConElBoton.innerHTML +=
        `<div style="display:flex; flex-direction:row; width:100% ; margin-top:3vh;align-items: center;" >
        <div class="elementos" style="margin-left:0vw; width:10%;">
            <img src="${p.img}">
            <p class="nombrep" style="text-align:left"> ${p.nombre}</p>
        </div>
        <p style="text-align:left ; margin-left:13vw"> $ ${p.precio}</p>
        <p style="text-align:right"> ${p.cantidad}</p>
        <p style="text-align:right; margin-right:6vw;" >$ ${p.subtotal} </p>
        <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion(value)" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
    });
 
}
  
//Mostrar el subtotal y el total
let totalAPagar = 0;
    carritoCompras1.forEach((p) => {
        totalCada1 = p.subtotal;
        totalAPagar += totalCada1;
        console.log(totalAPagar);
    })
    let subTotal = document.querySelector("#totalCarrito");
if(totalAPagar != 0){
    document.querySelector("#totalCarrito").style.display="block";
    subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
                        <p id="subtotal">Subtotal: $ ${totalAPagar}. </p>
                        <p id="total"> Total a pagar: $ ${totalAPagar}.- </p>
                        <input type="button" name="" value="Pagar" class="botonComprar">`;
}


//Boton eliminar al costado del producto
document.querySelector(".divdecidireliminar").style.display="none";

function botonEliminarFuncion(value){
    document.querySelector(".divdecidireliminar").style.display="block";
    botonEliminarEnProducto = parseInt(document.querySelector(".botonEliminar").value);
    console.log(botonEliminarEnProducto);
}
//Cerrar el cartel
function cerrarEliminar(){
    document.querySelector(".divdecidireliminar").style.display="none";
}

//Boton continuar para confirmar eliminacion

function continuarEliminar(){
    let carritoFinal= carritoCompras1.filter((p)=> p.id != botonEliminarEnProducto);
   // carritoFinal= carritoCompras1.filter((p) => p.id !== (document.querySelector(".botonEliminar").value));
    // let carritoComprasFinal =carritoCompras1.splice(productoAEliminar);
    document.querySelector(".divdecidireliminar").style.display="none";
    console.log(carritoFinal);
    agregandoConElBoton.innerHTML = ``;
    carritoFinal.forEach( p => {
        agregandoConElBoton.innerHTML +=
        `<div style="display:flex; flex-direction:row; width:100% ; margin-top:3vh;align-items: center;" >
        <div class="elementos" style="margin-left:0vw; width:10%;">
            <img src="${p.img}">
            <p class="nombrep" style="text-align:left"> ${p.nombre}</p>
        </div>
        <p style="text-align:left ; margin-left:13vw"> $ ${p.precio}</p>
        <p style="text-align:right"> ${p.cantidad}</p>
        <p style="text-align:right; margin-right:6vw;" >$ ${p.subtotal} </p>
        <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion()" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
    });
    totalAPagar = 0;
    carritoFinal.forEach((p) => {
        totalCada1 = p.subtotal;
        totalAPagar += totalCada1;
        console.log(totalAPagar);
    });
    subTotal.innerHTML = ``;
    console.log(totalAPagar);
    if(totalAPagar != 0){
    subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
    <p id="subtotal">Subtotal: $ ${totalAPagar}. </p>
    <p id="total"> Total a pagar: $ ${totalAPagar}.- </p>
    <input type="button" name="" value="Pagar" class="botonComprar">`;
    }
}


