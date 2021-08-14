//Pagina de pago
//Obtengo el carrito de compras
obtenerCarrito = localStorage.getItem("carritoCompras")
carritoCompras1 = JSON.parse(obtenerCarrito);
console.log(carritoCompras1);

//Hago el resumen de productos para cada uno
let resumenProducto = document.querySelector(".efectoHover");
carritoCompras1.forEach( p => {
    resumenProducto.innerHTML += `<div class="resumenProductos">
                                    <p style="width:30%; text-align:left"> ○ ${p.nombre}</p>
                                    <p> $ ${p.precio}</p>
                                    <p> Cantidad:${p.cantidad}</p>
                                    <p>Sub-total: $${p.subtotal} </p>
                                   </div>`
});

//Imprimir total de la compra en el resumen
totalAPagar = 0;
carritoCompras1.forEach((p) => {
    totalCada1 = p.subtotal;
    //Suma todos los subtotales
    totalAPagar += totalCada1;
    console.log(totalAPagar);
})
let totalPago = document.querySelector(".tap");
totalPago.innerHTML = `$${totalAPagar}.- `;
let totalDebito= Math.round(totalAPagar-((20*totalAPagar)/100));
console.log(totalDebito);
let totalCredito = totalAPagar;

//Formulario para llenar con los datos
//Datos obligatorios *
let nombre = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;
// let celular = document.querySelector("#celular").value;
// let email = document.querySelector("#email").value;
// let direccionEnvio = document.querySelector("#direccion").value;
// let codigoPostal = document.querySelector("#codigoPostal").value;
// let titularCredito = document.querySelector("#titularCredito").value;
// let titularDebito = document.querySelector("#titularDebito").value;
// let vencimientoCredito = document.querySelector("#vencimientoCredito").value;
// let vencimientoDebito = document.querySelector("#vencimientoDebito").value;
// let numeroDebito = document.querySelector("#nroDebito").value;
// let numeroCredito = document.querySelector("#nroCredito").value;
// let codigoDebito = document.querySelector("#codigoDebito").value;
// let codigoCredito = document.querySelector("#codigoCredito").value;

function checkDatosObligatorios(){
    if ((nombre || apellido) === ""  ){
        document.querySelector(".datosObligatorios").innerHTML =
        `<p style="color:red; margin-left:13%; font-weight:bold; font-size: 1.2em;"> *Completar todos los datos obligatorios </p> `;
    } else {
        document.querySelector(".datosObligatorios").innerHTML = ``;
    }
}
//Datos comprador
let datosComprador= document.querySelector(".datosComprador");
function mostrarComprador(){
    datosEnvio.style.display="none";
    datosComprador.style.display="block";
    datosTarjeta.style.display="none";
}

//Celular
function celularNumero(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { //backspace
      return true;
    } else if(code>=48 && code<=57) { //es numero
      return true;
    } else{ 
      return false;      
    }
}

//Numero de telefono completo
function celularCompleto(){
let numeroCelular = document.querySelector("#celular").value;
let cadenaCelular = numeroCelular.length;

    if (cadenaCelular < 10 ){
        document.querySelector("#celular").value ="";
        alert("Ingresar número telefónico correcto, con prefijo");
    }
}


//Datos Envio
let datosEnvio= document.querySelector(".datosEnvio");
function mostrarEnvio(){
        datosEnvio.style.display="block";
        datosComprador.style.display="none";
        datosTarjeta.style.display="none";
}

//Datos tarjeta
let datosTarjeta= document.querySelector(".datosTarjeta");
function mostrarTarjeta(){
        datosEnvio.style.display="none";
        datosComprador.style.display="none";
        datosTarjeta.style.display="block";
}
//Credito
let tarjetaCredito = document.querySelector(".mostrarCredito");
let tarjetaDebito = document.querySelector(".mostrarDebito");
function mostrarCredito(){
    tarjetaCredito.style.display="block";
    tarjetaDebito.style.display="none";
    tarjetaCredito.innerHTML=`
    <p> TARJETA DE CREDITO </p> <br>
    <p class="cuotastxt">Nro. cuotas:</p> 
    <select name="cuotas" id="cuotas">
        <option value="${totalCredito}">1 cuota de $${totalCredito} sin interes</option>
        <option value="${Math.round(totalCredito/3)}">3 cuotas de $${Math.round(totalCredito/3)} sin interes</option>
        <option value="${Math.round(totalCredito/6)}">6 cuotas de $${Math.round(totalCredito/6)} sin interes</option>
    </select> 
    <p class="titular"> *Titular:  <input type="text" name="" id="titularCredito"></p> <br>
    <p class="nroCredito"> *Nro tarjeta:  <input type="text" name="" id="nroCredito"></p><br>
    <p class="vencimientoCredito"> *Vencimiento:  <input type="text" name="" id="vencimientoCredito"> mmaa</p> 
    <p class="codigoCredito"> *Código seguridad:  <input type="text" name="" id="codigoCredito"></p> 
    <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}
//Debito
function mostrarDebito(){
    tarjetaCredito.style.display="none";
    tarjetaDebito.style.display="block";
    tarjetaDebito.innerHTML=`
    <p> TARJETA DE DEBITO </p> 
    <p class="descuentotxt">¡20% de descuento pagando con tarjeta de débito!</p>
                    <p class="descuentotxt" style="color:red;"> El total de la compra con tarjeta de débito es: $ ${totalDebito}</p> <br>
                    <p class="titular">*Titular:  <input type="text" name="" id="titularDebito"></p>
                    <p class="nroCredito">*Nro tarjeta:  <input type="text" name="" id="nroDebito"></p>
                    <p class="vencimientoCredito">*Vencimiento:  <input type="text" name="" id="vencimientoDebito"> mmaa</p>
                    <p class="codigoCredito">*Código seguridad:  <input type="text" name="" id="codigoDebito"></p>
                    <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}
