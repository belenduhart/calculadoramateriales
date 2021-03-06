//Check-Out

//En cada producto el boton de eliminar obtiene su id
var botonEliminarEnProducto;
let id;

function botonEliminarFuncion(id){
        document.querySelector(".divdecidireliminar").style.display="block";
        botonEliminarEnProducto = id;
        console.log(id);
}

//Boton cerrar del cartel de eliminar 
function cerrarEliminar(){
    document.querySelector(".divdecidireliminar").style.display="none";
}

//Boton continuar para confirmar eliminacion de la lista
function continuarEliminar(){
let elementoAEliminar = carritoCompras.findIndex((p)=> p.id === botonEliminarEnProducto);
//Si lo encuentra en el array lo borra
if ( elementoAEliminar > -1){
    carritoCompras.splice(elementoAEliminar, 1);
}
    //Oculto el cartel
    document.querySelector(".divdecidireliminar").style.display="none";
    console.log(carritoCompras);
    //Borro la pantalla
agregandoConElBoton = document.querySelector("#elementoAComprar");
    agregandoConElBoton.innerHTML = ``;
    //Vuelvo a dibujar el carrito nuevo (productos y total)
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
        <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion()" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
    });

    totalAPagar = 0;
    carritoCompras.forEach((p) => {
        totalCada1 = p.subtotal;
        totalAPagar += totalCada1;
        console.log(totalAPagar);
    });
    console.log(totalAPagar);
    subTotal = document.querySelector("#totalCarrito");
    subTotal.innerHTML = ``;
    if(totalAPagar != 0){
    subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
    <p id="subtotal">Subtotal: $ ${totalAPagar}. </p>
    <p id="total"> Total a pagar: $ ${totalAPagar}.- </p>
    <a href="#/pagar">
    <input type="button" name="" value="Pagar" class="botonComprar" onclick="recargarPag()" ></a>`;
    }
    //Pongo == nombre al carrito de Compras
   // carritoCompras = carritoCompras1;
    //Si el carrito tiene productos lo vuelvo a guardar, sino borro el localStorage y aparece cartel de vacio
    if (carritoCompras.length != 0){
        localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
        location.reload();
    }else {
        localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
        location.reload();
        document.querySelector(".vacioCarrito").innerHTML= "No hay productos en el carrito de compras!";
        document.querySelector("#totalCarrito").style.display="none";
    }
}


function recargarPag(){
    $.get("./views/pagar.html", function (data) {
        location.reload();
    })
}
