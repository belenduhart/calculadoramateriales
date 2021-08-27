    //Pagina de pago
//Obtengo el carrito de compras
obtenerCarrito = localStorage.getItem("carritoCompras")
carritoCompras1 = JSON.parse(obtenerCarrito);
console.log(carritoCompras1);

//RESUMEN COMPRA
//Enumero cada producto
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

//Formulario para llenar con los datos y pagar
//Datos del comprador
let datosComprador= document.querySelector(".datosComprador");
function mostrarComprador(){
    datosEnvio.style.display="none";
    datosComprador.style.display="block";
    datosTarjeta.style.display="none";
}

//CELULAR
//verificar nro celular solo escriba nros
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

//Verificar numero de telefono este completo
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

//Checkear email sea correcto
function validarEmail(elemento){
    var texto = document.getElementById(elemento.id).value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(texto)) {
        document.getElementById("emailinvalido").innerHTML = "*Correo invalido";
    } else {
      document.getElementById("emailinvalido").innerHTML = "";
    }
}

//Datos para Envio a domicilio
let datosEnvio= document.querySelector(".datosEnvio");
//Mostrar form para datos envio
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

//Mostrar tarjetas
//Credito
let tarjetaCredito = document.querySelector(".mostrarCredito");
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
            <p class="nroCredito"> *Nro tarjeta: 
            <input type="text" name="" id="nroCredito"  onkeydown="return validarNumeros(event)" onchange="return creditoCorrecto()">
            <p id='creditoInvalida' style="color:red"></p></p><br>
            <p class="vencimientoCredito"> *Vencimiento:
            <input type="text" name="" placeholder="mes /mm/" id="vencimientomesCredito"  onchange="verificarVencimientoCredito()">
            <input type="text" name="" placeholder="año /aaaa/" id="vencimientoanioCredito" onchange="verificarVencimientoCredito()">
            <p class='tarjetaVencida' style="color:red"></p> </p> 
            <p class="codigoCredito"> *Código seguridad:
            <input type="text" name="" id="codigoCredito" onkeydown="return validarNumeros(event)" maxlength="3"></p> 
            <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}

//Debito 
let tarjetaDebito = document.querySelector(".mostrarDebito");
function mostrarDebito(){
    tarjetaCredito.style.display="none";
    tarjetaDebito.style.display="block";
    tarjetaDebito.innerHTML=`
            <p> TARJETA DE DEBITO </p> 
            <p class="descuentotxt">¡20% de descuento pagando con tarjeta de débito!</p>
            <p class="descuentotxt" style="color:red;"> El total de la compra con tarjeta de débito es: $ ${totalDebito}</p> <br>
            <p class="titular">*Titular:  <input type="text" name="" id="titularDebito"></p>
            <p class="nroCredito">*Nro tarjeta:
            <input type="text" name="" id="nroDebito"  onkeydown="return validarNumeros(event)" onchange="return debitoCorrecto()">
            <p id='debitoInvalida' style="color:red"></p></p>
            <p class="vencimientoCredito">*Vencimiento:
            <input type="text" name="" placeholder="mes /mm/" id="vencimientomesDebito" onchange="verificarVencimientoDebito()">
            <input type="text" name="" placeholder="año /aaaa/" id="vencimientoanioDebito" onchange="verificarVencimientoDebito()">
            <p class='tarjetaVencida' style="color:red"></p></p>
            <p class="codigoCredito">*Código seguridad:
            <input type="text" name="" id="codigoDebito" maxlength="3" onkeydown="return validarNumeros(event)"></p>
            <input type="button" value="Finalizar compra" class="finCompra" onclick="checkDatosObligatorios()"> `;
}

//Verificacion datos tarjetas

//Número tarjeta correcto, minimo 16 caracteres de longitud
let numeroDebito;
let debitoCadena;
let numeroCredito;
let creditoCadena;

//Nro tarjeta debito
function debitoCorrecto(){
    numeroDebito =document.querySelector("#nroDebito").value;
    debitoCadena = numeroDebito.length;
    if (debitoCadena < 16){
        document.querySelector("#debitoInvalida").innerHTML= "*Tarjeta inválida, ingrese mínimo 16 caracteres"
    }else {
        document.querySelector("#debitoInvalida").innerHTML= " ";
    }
}

//Nro tarjeta credito
function creditoCorrecto(){
    numeroCredito = document.querySelector("#nroCredito").value;
    creditoCadena = numeroCredito.length;
    if (creditoCadena < 16){
        document.querySelector("#creditoInvalida").innerHTML= "*Tarjeta inválida, ingrese mínimo 16 caracteres"
    }else {
        document.querySelector("#creditoInvalida").innerHTML= " ";
    }
}

//Fecha vencimiento
//Fecha actual
const fecha = new Date();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();
console.log(mes);
console.log(anio);
console.log(fecha);

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
    let vencimientomesCredito = parseInt(document.querySelector("#vencimientomesCredito").value);
    let vencimientoanioCredito = parseInt(document.querySelector("#vencimientoanioCredito").value);
        while (vencimientoanioCredito !== 0){  
            if((vencimientomesCredito > mes) && (vencimientoanioCredito >= anio)){
                document.querySelector(".tarjetaVencida").innerHTML="";
            } else if((vencimientomesCredito < mes) && (vencimientoanioCredito > anio)){
                document.querySelector(".tarjetaVencida").innerHTML="";
            }else if((vencimientomesCredito == mes) && (vencimientoanioCredito == anio)){
                document.querySelector(".tarjetaVencida").innerHTML="";
            }else if((vencimientomesCredito < mes) && (vencimientoanioCredito === anio)) {
                document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
            } else if (vencimientomesCredito > 12){
                document.querySelector(".tarjetaVencida").innerHTML="Fecha invalida";
            } else if (vencimientoanioCredito < anio){
                document.querySelector(".tarjetaVencida").innerHTML="Tarjeta vencida";
            }
                console.log(vencimientoanioCredito);
                console.log(vencimientomesCredito);
                vencimientoanioCredito= 0;
        }
}

//Finalizar compra
let listadoCompradores= [];
//Datos recolectados de cada usuario
class nuevoComprador {
    constructor(nombre, apellido, celular, email, direccion, CP, compraRealizada, numeroOrden){
        this.nombre = nombre,
        this.apellido = apellido,
        this.celular = celular,
        this.email = email,
        this.direccion = direccion,
        this.CP = CP,
        this.compraRealizada = compraRealizada,
        this.numeroOrden= numeroOrden
    }
}

//Datos obligatorios *
let datosObligatorios;
let numeroOrden;
function checkDatosObligatorios(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let celular = document.querySelector("#celular").value;
    let email = document.querySelector("#email").value;
    let direccionEnvio = document.querySelector("#direccion").value;
    let codigoPostal = document.querySelector("#codigoPostal").value;
    if ((nombre && apellido && celular && email && direccionEnvio && codigoPostal) !== ""  ){
        document.querySelector(".datosObligatorios").innerHTML = ``;
        datosObligatorios = true;
        finalizarCompra();
        console.log(datosObligatorios);
        numeroOrden = Math.floor((Math.random() * (10000- 1000 + 1)) + 1000);
        console.log(numeroOrden);
        //Crear nuevo usuario
        const nuevoComprador1 = new nuevoComprador(nombre, apellido, celular, email, direccionEnvio, codigoPostal, carritoCompras1, numeroOrden);
        //Agrego a la lista de compradores
        listadoCompradores.push(nuevoComprador1);
        localStorage.setItem("listadoCompradores", JSON.stringify(listadoCompradores));
        console.log(listadoCompradores);
    } else {
        document.querySelector(".datosObligatorios").innerHTML =
        `<p style="color:red; margin-left:13%; margin-top: 0.5%; font-weight:bold; font-size: 1.2em; width:30vw;"> *Completar todos los datos obligatorios* </p> `;
        datosObligatorios = false;
        console.log(datosObligatorios);
    }
}

//Proceso pago
function finalizarCompra(){
    if (datosObligatorios === true){
        //Barra progreso proceso de pago
        datosTarjeta.style.display="none";
        document.querySelector(".barraProgreso").innerHTML=
        ` <div class="container">
            <div class="bar">
                <svg>
                    <circle cx="50%" cy="50%" r="50%"></circle>
                </svg>
                <h1 class="number">0%</h1>
            </div>
        </div>
        <h2> Procesando el pago...</h2>`;
        const num = document.querySelector(".number");
        let counter = 0;
        setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    num.textContent = counter + "%";
  }
        }, 35);
        setTimeout(function(){ pagoExitoso(); }, 4000);
    }else{
        document.querySelector(".barraProgreso").innerHTML= ``;
    }
}

//Mostrar cartel de Compra finalizada
function pagoExitoso(){
    document.querySelector(".barraProgreso").innerHTML= ``;
    document.querySelector(".datosObli").style.display="none";
    document.querySelector(".datosPago").style.display="none";
    document.querySelector(".totalPago").style.display="none";
    document.querySelector(".finalPago").innerHTML = ` <div class="pagoExitoso"> 
    <p class="pe0"> CONFIRMACION COMPRA </p> <br>
    <p class="pe1" > Nro.confirmacion compra: ${numeroOrden} </p> <br>
    <p class="pe2"> ¡Gracias por confiar en nosotros!</p> <br>
    <p class="pe3"> Recuerda que el envío a domicilio puede tardar entre 2 a 5 días hábiles.</p> <br>
    <p class="pe4"> *Debido a la situacion actual del país por el COVID-19, y por cuestiones de seguridad del personal, 
    las entregas pueden tener demoras. </p> <br>
    <a href="#/">
    <input type="button" value="Volver a calculadora"></a>
    </div> 
    `;
    carritoCompras1 = [];
    carritoCompras = carritoCompras1;
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
    console.log(carritoCompras);
}

