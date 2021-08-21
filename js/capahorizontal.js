//Capa Horizontal
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="capahorizontal"){
    procesoTotalCapaHorizontal()
}

//2do materiales usados para CapaHorizontal
class CapaHorizontal {
    constructor(totalCementoCapaHorizontal, totalArenaCapaHorizontal, totalPinturaCapaHorizontal, totalHidrofugoCapaHorizontal){
        this.totalCementoCapaHorizontal = totalCementoCapaHorizontal,
        this.totalArenaCapaHorizontal = totalArenaCapaHorizontal,
        this.totalPinturaCapaHorizontal = totalPinturaCapaHorizontal,
        this.totalHidrofugoCapaHorizontal = totalHidrofugoCapaHorizontal;
    }
    resultadocalculosCapaHorizontal(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoCapaHorizontal= document.querySelector(".mostrarCementoCapaHorizontal");
        mostrarCementoCapaHorizontal.innerHTML =` ${this.totalCementoCapaHorizontal} kg`;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaCapaHorizontal= document.querySelector(".mostrarArenaCapaHorizontal");
        mostrarArenaCapaHorizontal.innerHTML =` ${this.totalArenaCapaHorizontal} kg`;
        //Mostrar en html cuantos kg de hidrofugo necesita
        let mostrarHidrofugoCapaHorizontal= document.querySelector(".mostrarHidrofugoCapaHorizontal");
        mostrarHidrofugoCapaHorizontal.innerHTML =` ${this.totalHidrofugoCapaHorizontal} kg`;
        //Mostrar en html cuantos l de pintura asfaltica necesita
        let mostrarPinturaCapaHorizontal= document.querySelector(".mostrarPinturaCapaHorizontal");
        mostrarPinturaCapaHorizontal.innerHTML =` ${this.totalPinturaCapaHorizontal} l`;
        //Mostrar resultados
    }
}

//3to asignar valores para los calculos
let valorCementoCapaHorizontal = 1;
let valorArenaCapaHorizontal = 1;
let valorHidrofugoCapaHorizontal = 0.04;
let valorPinturaCapaHorizontal = 0.01;

//4to pedir metros a construir (usar funcion para checkear que sea valor numerico)
let metrosCapaHorizontal ;
function pedirMetrosCapaHorizontal(){
    metrosCapaHorizontal= parseInt(document.querySelector(".metrosCapaHorizontal").value);
}

//5to Pedir espesor pared
let paredCapaHorizontal0= document.getElementById("paredCapaHorizontal0");
let paredCapaHorizontal1= document.getElementById("paredCapaHorizontal1");
let paredCapaHorizontal2= document.getElementById("paredCapaHorizontal2");
let paredCapaHorizontal3= document.getElementById("paredCapaHorizontal3");
let paredUsuarioCapaHorizontal;
function seleccionParedUsuarioCapaHorizontal (){
    if(paredCapaHorizontal0.checked){
        paredUsuarioCapaHorizontal= 1;
    }else if(paredCapaHorizontal1.checked){
        paredUsuarioCapaHorizontal= 1.5;
    }else if(paredCapaHorizontal2.checked){
        paredUsuarioCapaHorizontal= 2;
    }else if(paredCapaHorizontal3.checked){
        paredUsuarioCapaHorizontal= 3;
    }
    console.log(paredUsuarioCapaHorizontal);
}


//6to calcular cantidad de material
let cementoFinalCapaHorizontal;
let arenaFinalCapaHorizontal;
let hidrofugoFinalCapaHorizontal;
let pinturaFinalCapaHorizontal;

function calcularMaterialesCapaHorizontal(){
    cementoFinalCapaHorizontal = metrosCapaHorizontal*(valorCementoCapaHorizontal*paredUsuarioCapaHorizontal);
    arenaFinalCapaHorizontal = metrosCapaHorizontal*(valorArenaCapaHorizontal*paredUsuarioCapaHorizontal)
    hidrofugoFinalCapaHorizontal = Math.round(metrosCapaHorizontal*(valorHidrofugoCapaHorizontal*paredUsuarioCapaHorizontal));
    pinturaFinalCapaHorizontal = Math.round(metrosCapaHorizontal*(valorPinturaCapaHorizontal*paredUsuarioCapaHorizontal));
}

//7mo function total proccess
function procesoTotalCapaHorizontal(){
    pedirMetrosCapaHorizontal();
    seleccionParedUsuarioCapaHorizontal ();
    calcularMaterialesCapaHorizontal();
    const CapaHorizontal1= new CapaHorizontal(cementoFinalCapaHorizontal, arenaFinalCapaHorizontal, hidrofugoFinalCapaHorizontal,pinturaFinalCapaHorizontal);
    CapaHorizontal1.resultadocalculosCapaHorizontal();
     if (botonCalcularCapaHorizontal == true){
            respuestaClickCapaHorizontal()
    }
     
}
    
//8vo Funcion para el boton de calcular
let botonCalcularCapaHorizontal = document.querySelector(".calcularCapaHorizontal");

function respuestaClickCapaHorizontal(){
       procesoTotalCapaHorizontal(); 
       document.getElementById("sectionResultadosCapaHorizontal").style.display = "block";
       document.querySelector("#sectionCapahorizontal").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

