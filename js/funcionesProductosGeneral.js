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
}

