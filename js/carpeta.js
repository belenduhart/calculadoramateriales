//Carpeta
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="carpeta"){
    procesoTotalCarpeta()
}

//2do materiales usados para Carpeta
class Carpeta {
    constructor(totalCementoCarpeta, totalArenaCarpeta){
        this.totalCementoCarpeta = totalCementoCarpeta,
        this.totalArenaCarpeta = totalArenaCarpeta
    }
    resultadocalculosCarpeta(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoCarpeta= document.querySelector(".mostrarCementoCarpeta");
        mostrarCementoCarpeta.innerHTML =` ${this.totalCementoCarpeta} kg`;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaCarpeta= document.querySelector(".mostrarArenaCarpeta");
        mostrarArenaCarpeta.innerHTML =` ${this.totalArenaCarpeta} kg`;
    }
}

//3ro asignar valores para los calculos
let valorCementoCarpeta = 14 ;
let valorArenaCarpeta = 0.03;

//4to pedir metros a construir (usar funcion para checkear que sea valor numerico)
let metrosCarpeta ;
function pedirMetrosCarpeta(){
    metrosCarpeta= parseInt(document.querySelector(".metrosCarpeta").value);
}

//5to calcular cantidad de material
let cementoFinalCarpeta;
let arenaFinalCarpeta;


function calcularMaterialesCarpeta(){
    cementoFinalCarpeta = metrosCarpeta*valorCementoCarpeta;
    arenaFinalCarpeta =Math.round(metrosCarpeta*valorArenaCarpeta);
}

//6to function total proccess
function procesoTotalCarpeta(){
    pedirMetrosCarpeta();
    calcularMaterialesCarpeta();
    const Carpeta1= new Carpeta(cementoFinalCarpeta, arenaFinalCarpeta);
    Carpeta1.resultadocalculosCarpeta();
     if (botonCalcularCarpeta == true){
            respuestaClickCarpeta()
    }
     
}
    
//7mo Funcion para el boton de calcular
let botonCalcularCarpeta = document.querySelector(".calcularCarpeta");

function respuestaClickCarpeta(){
       procesoTotalCarpeta(); 
       document.getElementById("sectionResultadosCarpeta").style.display = "block";
       document.querySelector("#sectionCarpeta").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

