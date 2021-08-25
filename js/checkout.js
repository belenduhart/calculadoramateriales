//Check-Out

//Agregado de productos a la pagina final del carrito
//Esconder div el total y pop-up de eliminar
document.querySelector("#totalCarrito").style.display="none";
document.querySelector(".divdecidireliminar").style.display="none";

//Obtengo el array de carrito desde json/localStorage
const obtenerCarrito = localStorage.getItem("carritoCompras")
const carritoCompras1 = JSON.parse(obtenerCarrito);
console.log(carritoCompras1);

//Dibujar al DOM cada producto que se agrego al carrito
var botonEliminarEnProducto;
let id;
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
        <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion(${p.id})" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
    });

    //En cada producto el boton de eliminar obtiene su id
    function botonEliminarFuncion(id){
        document.querySelector(".divdecidireliminar").style.display="block";
        botonEliminarEnProducto = id;
        console.log(id);
    }
}
  
//Mostrar el subtotal y el total
let totalAPagar = 0;

carritoCompras1.forEach((p) => {
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
                        <input type="button" name="" value="Pagar" class="botonComprar"></a>`;
}

//Boton cerrar del cartel de eliminar 
function cerrarEliminar(){
    document.querySelector(".divdecidireliminar").style.display="none";
}

//Boton continuar para confirmar eliminacion de la lista
function continuarEliminar(){
  let elementoAEliminar = carritoCompras1.findIndex((p)=> p.id === botonEliminarEnProducto);
//Si lo encuentra en el array lo borra
  if ( elementoAEliminar > -1){
     carritoCompras1.splice(elementoAEliminar, 1);
  }
    //Oculto el cartel
    document.querySelector(".divdecidireliminar").style.display="none";
    console.log(carritoCompras1);
    //Borro la pantalla
    agregandoConElBoton.innerHTML = ``;
    //Vuelvo a dibujar el carrito nuevo (productos y total)
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
        <button value="${p.id}"  class="botonEliminar" onclick="botonEliminarFuncion()" ><i class="far fa-trash-alt"></i> Eliminar</button></div>`
    });

    totalAPagar = 0;
    carritoCompras1.forEach((p) => {
        totalCada1 = p.subtotal;
        totalAPagar += totalCada1;
        console.log(totalAPagar);
    });
    console.log(totalAPagar);

    subTotal.innerHTML = ``;
    if(totalAPagar != 0){
    subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
    <p id="subtotal">Subtotal: $ ${totalAPagar}. </p>
    <p id="total"> Total a pagar: $ ${totalAPagar}.- </p>
    <input type="button" name="" value="Pagar" class="botonComprar">`;
    }
    //Pongo == nombre al carrito de Compras
    carritoCompras = carritoCompras1;
    //Si el carrito tiene productos lo vuelvo a guardar, sino borro el localStorage y aparece cartel de vacio
    if (carritoCompras.length != 0){
        localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
        location.reload();
    }else {
        localStorage.clear();
        location.reload();
        document.querySelector(".vacioCarrito").style.display="block";
        document.querySelector("#totalCarrito").style.display="none";
    }
}


