//Revoque Interior
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="revoqueinterior"){
    procesoTotalRevoqueInterior()
}

//2do materiales usados para RevoqueExterior
class RevoqueInterior {
    constructor(totalCementoRevoqueInterior, totalArenaRevoqueInterior, totalCalRevoqueInterior){
        this.totalCementoRevoqueInterior = totalCementoRevoqueInterior,
        this.totalArenaRevoqueInterior = totalArenaRevoqueInterior,
        this.totalCalRevoqueInterior = totalCalRevoqueInterior
    }
    resultadocalculosRevoqueInterior(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoRevoqueInterior= document.querySelector(".mostrarCementoRevoqueInterior");
        mostrarCementoRevoqueInterior.innerHTML =` ${this.totalCementoRevoqueInterior} kg`;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaRevoqueInterior= document.querySelector(".mostrarArenaRevoqueInterior");
        mostrarArenaRevoqueInterior.innerHTML =` ${this.totalArenaRevoqueInterior} kg`;
        //Mostrar en html cuantos kg de cal necesita
        let mostrarCalRevoqueInterior= document.querySelector(".mostrarCalRevoqueInterior");
        mostrarCalRevoqueInterior.innerHTML =` ${this.totalCalRevoqueInterior} kg`;
        //Mostrar resultados
    }
}

//3ro asignar valores para los calculos
let valorCementoRevoqueInterior;
let valorArenaRevoqueInterior;
let valorCalRevoqueInterior;
let revoqueInteriorGrueso = document.querySelector("#revoqueInteriorGrueso");
let revoqueInteriorFino = document.querySelector("#revoqueInteriorFino");

function asignarValorMaterialesRevoqueInterior (){
    if(revoqueInteriorFino.checked){
        valorCementoRevoqueInterior = 0.4;
        valorArenaRevoqueInterior = 0;
        valorCalRevoqueInterior = 2;
    }else if(revoqueInteriorGrueso.checked){
        valorCementoRevoqueInterior = 3;
        valorArenaRevoqueInterior = 0.02;
        valorCalRevoqueInterior = 4;
    }
}


//4to pedir metros a construir (usar funcion para checkear que sea valor numerico)
let metrosRevoqueInterior ;
function pedirMetrosRevoqueInterior(){
    metrosRevoqueInterior= parseInt(document.querySelector(".metrosRevoqueInterior").value);
}

//5to calcular cantidad de material
let cementoFinalRevoqueInterior;
let arenaFinalRevoqueInterior;
let hidrofugoFinalRevoqueInterior;
let calFinalRevoqueInterior;

function calcularMaterialesRevoqueInterior(){
    cementoFinalRevoqueInterior = Math.round(metrosRevoqueInterior*valorCementoRevoqueInterior);
    arenaFinalRevoqueInterior = Math.round(metrosRevoqueInterior*valorArenaRevoqueInterior);
    calFinalRevoqueInterior = Math.round(metrosRevoqueInterior*valorCalRevoqueInterior);
}

//6to function total proccess
function procesoTotalRevoqueInterior(){
    asignarValorMaterialesRevoqueInterior ()
    pedirMetrosRevoqueInterior();
    calcularMaterialesRevoqueInterior();
    const RevoqueInterior1= new RevoqueInterior(cementoFinalRevoqueInterior, arenaFinalRevoqueInterior, calFinalRevoqueInterior);
    RevoqueInterior1.resultadocalculosRevoqueInterior();
     if (botonCalcularRevoqueInterior == true){
            respuestaClickRevoqueInterior()
    }
     
}
    
//8vo Funcion para el boton de calcular
let botonCalcularRevoqueInterior = document.querySelector(".calcularRevoqueInterior");

function respuestaClickRevoqueInterior(){
       procesoTotalRevoqueInterior(); 
       document.getElementById("sectionResultadosRevoqueInterior").style.display = "block";
       document.querySelector("#sectionRevoqueinterior").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

