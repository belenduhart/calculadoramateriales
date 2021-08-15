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
let celular = document.querySelector("#celular").value;
let email = document.querySelector("#email").value;
let direccionEnvio = document.querySelector("#direccion").value;
let codigoPostal = document.querySelector("#codigoPostal").value;
// let titularCredito = document.querySelector("#titularCredito").value;
// let titularDebito = document.querySelector("#titularDebito").value;
// let codigoDebito = document.querySelector("#codigoDebito").value;
// let codigoCredito = document.querySelector("#codigoCredito").value;

function checkDatosObligatorios(){
    if ((nombre || apellido || celular || email || direccionEnvio || codigoPostal) === ""  ){
        document.querySelector(".datosObligatorios").innerHTML =
        `<p style="color:red; margin-left:13%; margin-top: 0.5%; font-weight:bold; font-size: 1.2em; width:30vw;"> *Completar todos los datos obligatorios* </p> `;
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
function validarNumeros(evt){
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
        document.getElementById("celularinvalido").innerHTML = "*Nro invalido";
    }else {
        document.getElementById("celularinvalido").innerHTML = "";
      }
}

//Checkear email
function validarEmail(elemento){
    var texto = document.getElementById(elemento.id).value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(texto)) {
        document.getElementById("emailinvalido").innerHTML = "*Correo invalido";
    } else {
      document.getElementById("emailinvalido").innerHTML = "";
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
    <p class="nroCredito"> *Nro tarjeta:  <input type="text" name="" id="nroCredito" onkeydown="return validarNumeros(event)" onchange="creditoCorrecto()"> <p id='creditoInvalida' style="color:red"></p></p><br>
    <p class="vencimientoCredito"> *Vencimiento:
    <input type="text" name="" placeholder="mes /mm/" id="vencimientomesCredito">
    <input type="text" name="" placeholder="año /aaaa/" id="vencimientoanioCredito" onchange="verificarVencimientoCredito()">
    <p class='tarjetaVencida' style="color:red"></p> </p> 
    <p class="codigoCredito"> *Código seguridad:  <input type="text" name="" id="codigoCredito" onkeydown="return validarNumeros(event)" maxlength="3"></p> 
    <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}

//Número tarjeta correcto
function creditoCorrecto(){
    let numeroCredito = document.querySelector("#nroCredito").value;
    let creditoCadena = numeroCredito.length;

        if (creditoCadena < 16){
            document.querySelector("#nroCredito").value ="";
            document.getElementById("creditoInvalida").innerHTML = "*Tarjeta invalida";
        }else{
            document.getElementById("creditoInvalida").innerHTML = "";
        }
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
                    <p class="nroCredito">*Nro tarjeta:<input type="text" name="" id="nroDebito" onkeydown="return validarNumeros(event)" onchange="debitoCorrecto()"> <p id='debitoInvalida' style="color:red"></p></p>
                    <p class="vencimientoCredito">*Vencimiento:
                    <input type="text" name="" placeholder="mes /mm/" id="vencimientomesDebito">
                    <input type="text" name="" placeholder="año /aaaa/" id="vencimientoanioDebito" onchange="verificarVencimientoDebito()">
                    <p class='tarjetaVencida' style="color:red"></p></p>
                    <p class="codigoCredito">*Código seguridad:  <input type="text" name="" id="codigoDebito" maxlength="3" onkeydown="return validarNumeros(event)"></p>
                    <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}

function debitoCorrecto(){
    let numeroDebito = document.querySelector("#nroDebito").value;
    let numeroCredito = document.querySelector("#nroCredito").value;
    let debitoCadena = numeroDebito.length;
    let creditoCadena = numeroCredito.length;
        if (debitoCadena < 16 ){
            document.querySelector("#nroDebito").value ="";
            document.getElementById("debitoInvalida").innerHTML = "*Tarjeta invalida";
        }else{
            document.getElementById("debitoInvalida").innerHTML = "";
        }

        if (creditoCadena < 16){
            document.querySelector("#nroCredito").value ="";
            document.getElementById("creditoInvalida").innerHTML = "*Tarjeta invalida";
        }else{
            document.getElementById("creditoInvalida").innerHTML = "";
        }
    }
//Fecha vencimiento
const fecha = new Date();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();
const hoy = "" + mes + anio ;
console.log(fecha);
console.log(hoy);
//Debito
function verificarVencimientoDebito(){
    let vencimientomesDebito = document.querySelector("#vencimientomesDebito").value;
    let vencimientoanioDebito = document.querySelector("#vencimientoanioDebito").value;
    if((vencimientomesDebito > mes) && (vencimientoanioDebito >= anio)) {
        document.querySelector(".tarjetaVencida").innerHTML="";
    } else if((vencimientomesDebito < mes) && (vencimientoanioDebito > anio)){
        document.querySelector(".tarjetaVencida").innerHTML="";
    }else if((vencimientomesDebito == mes) && (vencimientoanioDebito == anio)){
        document.querySelector(".tarjetaVencida").innerHTML="";
    }else if((vencimientomesDebito < mes) && (vencimientoanioDebito == anio)) {
        document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
    } else if (vencimientomesDebito > 12){
        document.querySelector(".tarjetaVencida").innerHTML="Fecha invalida";
    } else if (vencimientoanioDebito < anio){
        document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
    }
}
//Credito
function verificarVencimientoCredito(){
    let vencimientomesCredito = document.querySelector("#vencimientomesCredito").value;
    let vencimientoanioCredito = document.querySelector("#vencimientoanioCredito").value;
    if((vencimientomesCredito > mes) && (vencimientoanioCredito >= anio)) {
        document.querySelector(".tarjetaVencida").innerHTML="";
    } else if((vencimientomesCredito < mes) && (vencimientoanioCredito > anio)){
        document.querySelector(".tarjetaVencida").innerHTML="";
    }else if((vencimientomesCredito == mes) && (vencimientoanioCredito == anio)){
        document.querySelector(".tarjetaVencida").innerHTML="";
    }else if((vencimientomesCredito < mes) && (vencimientoanioCredito == anio)) {
        document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
    } else if (vencimientomesCredito > 12){
        document.querySelector(".tarjetaVencida").innerHTML="Fecha invalida";
    } else if (vencimientoanioCredito < anio){
        document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
    }
}

