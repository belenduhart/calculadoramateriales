//Funciones con Jquery
//Establecer eventos onclick para cada enlace
//Cemento
let linkCemento = $(".linkCemento");
function mostrarCementoGeneral(){
    $(".cementoGeneral").fadeIn(300);
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Arena
let linkArena = $(".linkArena");
function mostrarArenaGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").fadeIn(300);
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Cal
let linkCal = $(".linkCal");
function mostrarCalGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").fadeIn(300);
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Piedra
let linkPiedra = $(".linkPiedra");
function mostrarPiedraGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").fadeIn(300);
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Ladrillo
let linkLadrillo = $(".linkLadrillo");
function mostrarLadrilloGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").fadeIn(300);
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Hidrofugo
let linkHidrofugo = $(".linkHidrofugo");
function mostrarHidrofugoGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").fadeIn(300);
    $(".pinturaGeneral").hide();
    $('#menu-toggle1').prop('checked', false);
}
//Pintura
let linkPintura = $(".linkPintura");
function mostrarPinturaGeneral(){
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").fadeIn(300);
    $('#menu-toggle1').prop('checked', false);
    $("#resultadobusqueda").fadeOut(100);
}

//Funcion para el buscador
//Al hacer click en buscar se lanza la funcion
$(".botonBuscar").on("click", mostrarBusqueda());
function mostrarBusqueda() {
    let busqueda = $("#buscador").val();
    // si esta vacio no hace nada
	if (busqueda == "") {
		console.log("0000"); //mostrar todos los productos	
	} else {
    //Si se completo se busca en el listado de productos los cuales coinciden
	let productoBuscado = listadoProductos.filter( p => p.nombre.indexOf(busqueda.toUpperCase()) > -1);
    console.log(productoBuscado);
    //Mostrar los productos buscados en el DOM
    let resultadoBusqueda = document.querySelector(".resultadobusqueda");
    //Escondo los que estan por defecto
    $(".cementoGeneral").hide();
    $(".arenaGeneral").hide();
    $(".calGeneral").hide();
    $(".piedraGeneral").hide();
    $(".ladrilloGeneral").hide();
    $(".hidrofugoGeneral").hide();
    $(".pinturaGeneral").hide();
    //Agrego id al div que los va a contener
    $(".resultadobusqueda").attr("id", "resultadobusqueda")
    $("#resultadobusqueda").fadeIn(500);
    //Imprimo en el DOM cada uno
   productoBuscado.forEach( p => { resultadoBusqueda.innerHTML +=
    `<div class="todaslasmarcas">
        <img src=" ${p.img}" alt="" class="foto">
        <p> ${p.nombre}<br>$ ${p.precio}.- </p>
        <a href="#/${p.value}"  >
            <input type="button"  value="Comprar" class="botoncomprar">
        </a>
    </div>`
	})
}
}

//Para que no se vayan sumando los resultados de la busqueda
$("#buscador").on("click", ocultarResultado());
function ocultarResultado(){
    $("#resultadobusqueda").fadeOut(500);
    $("#buscador").val("");
}
//Borro resultados anteriores
$("#buscador").on("change", borrarResultado());
function borrarResultado(){
    $("#resultadobusqueda").empty();
}



