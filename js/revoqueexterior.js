//Revoque Exterior
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="revoqueexterior"){
    procesoTotalRevoqueExterior()
}

//2do materiales usados para RevoqueExterior
class RevoqueExterior {
    constructor(totalCementoRevoqueExterior, totalArenaRevoqueExterior, totalCalRevoqueExterior, totalHidrofugoRevoqueExterior){
        this.totalCementoRevoqueExterior = totalCementoRevoqueExterior,
        this.totalArenaRevoqueExterior = totalArenaRevoqueExterior,
        this.totalCalRevoqueExterior = totalCalRevoqueExterior,
        this.totalHidrofugoRevoqueExterior = totalHidrofugoRevoqueExterior;
    }
    resultadocalculosRevoqueExterior(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoRevoqueExterior= document.querySelector(".mostrarCementoRevoqueExterior");
        mostrarCementoRevoqueExterior.innerHTML =` ${this.totalCementoRevoqueExterior} kg`;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaRevoqueExterior= document.querySelector(".mostrarArenaRevoqueExterior");
        mostrarArenaRevoqueExterior.innerHTML =` ${this.totalArenaRevoqueExterior} kg`;
        //Mostrar en html cuantos kg de hidrofugo necesita
        let mostrarHidrofugoRevoqueExterior= document.querySelector(".mostrarHidrofugoRevoqueExterior");
        mostrarHidrofugoRevoqueExterior.innerHTML =` ${this.totalHidrofugoRevoqueExterior} kg`;
        //Mostrar en html cuantos kg de cal necesita
        let mostrarCalRevoqueExterior= document.querySelector(".mostrarCalRevoqueExterior");
        mostrarCalRevoqueExterior.innerHTML =` ${this.totalCalRevoqueExterior} kg`;
        //Mostrar resultados
    }
}

//3ro asignar valores para los calculos
let valorCementoRevoqueExterior;
let valorArenaRevoqueExterior;
let valorHidrofugoRevoqueExterior;
let valorCalRevoqueExterior;
let revoqueExteriorAzotado = document.querySelector("#revoqueExteriorAzotado");
let revoqueExteriorGrueso = document.querySelector("#revoqueExteriorGrueso");
let revoqueExteriorFino = document.querySelector("#revoqueExteriorFino");

function asignarValorMaterialesRevoqueExterior (){
    if(revoqueExteriorAzotado.checked){
        valorCementoRevoqueExterior = 5;
        valorArenaRevoqueExterior = 0.01;
        valorHidrofugoRevoqueExterior = 0.19;
        valorCalRevoqueExterior = 0;
    }else if(revoqueExteriorFino.checked){
        valorCementoRevoqueExterior = 0.4;
        valorArenaRevoqueExterior = 0.01;
        valorHidrofugoRevoqueExterior = 0.19;
        valorCalRevoqueExterior = 2;
    }else if(revoqueExteriorGrueso.checked){
        valorCementoRevoqueExterior = 3;
        valorArenaRevoqueExterior = 0.02;
        valorHidrofugoRevoqueExterior = 0.19;
        valorCalRevoqueExterior = 5;
    }
}


//4to pedir metros a construir (usar funcion para checkear que sea valor numerico)
let metrosRevoqueExterior ;
function pedirMetrosRevoqueExterior(){
    metrosRevoqueExterior= parseInt(document.querySelector(".metrosRevoqueExterior").value);
}

//5to calcular cantidad de material
let cementoFinalRevoqueExterior;
let arenaFinalRevoqueExterior;
let hidrofugoFinalRevoqueExterior;
let calFinalRevoqueExterior;

function calcularMaterialesRevoqueExterior(){
    cementoFinalRevoqueExterior = Math.round(metrosRevoqueExterior*valorCementoRevoqueExterior);
    arenaFinalRevoqueExterior = Math.round(metrosRevoqueExterior*valorArenaRevoqueExterior);
    hidrofugoFinalRevoqueExterior = Math.round(metrosRevoqueExterior*valorHidrofugoRevoqueExterior);
    calFinalRevoqueExterior = Math.round(metrosRevoqueExterior*valorCalRevoqueExterior);
}

//6to function total proccess
function procesoTotalRevoqueExterior(){
    asignarValorMaterialesRevoqueExterior ()
    pedirMetrosRevoqueExterior();
    calcularMaterialesRevoqueExterior();
    const RevoqueExterior1= new RevoqueExterior(cementoFinalRevoqueExterior, arenaFinalRevoqueExterior, hidrofugoFinalRevoqueExterior,calFinalRevoqueExterior);
    RevoqueExterior1.resultadocalculosRevoqueExterior();
     if (botonCalcularRevoqueExterior == true){
            respuestaClickRevoqueExterior()
    }
     
}
    
//8vo Funcion para el boton de calcular
let botonCalcularRevoqueExterior = document.querySelector(".calcularRevoqueExterior");

function respuestaClickRevoqueExterior(){
       procesoTotalRevoqueExterior(); 
       document.getElementById("sectionResultadosRevoqueExterior").style.display = "block";
       document.querySelector("#sectionRevoqueexterior").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

