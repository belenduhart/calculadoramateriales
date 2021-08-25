//Contrapiso
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="contrapiso"){
    procesoTotalContrapiso()
}

//2do materiales usados para Contrapiso
class Contrapiso {
    constructor(totalCementoContrapiso, totalArenaContrapiso, totalCalContrapiso,totalPiedraContrapiso){
        this.totalCementoContrapiso = totalCementoContrapiso,
        this.totalArenaContrapiso = totalArenaContrapiso,
        this.totalCalContrapiso = totalCalContrapiso,
        this.totalPiedraContrapiso = totalPiedraContrapiso
    }
    resultadocalculosContrapiso(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoContrapiso= document.querySelector(".mostrarCementoContrapiso");
        mostrarCementoContrapiso.innerHTML =` ${this.totalCementoContrapiso} kg`;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaContrapiso= document.querySelector(".mostrarArenaContrapiso");
        mostrarArenaContrapiso.innerHTML =` ${this.totalArenaContrapiso} kg`;
        //Mostrar en html cuantos kg de cal necesita
        let mostrarCalContrapiso= document.querySelector(".mostrarCalContrapiso");
        mostrarCalContrapiso.innerHTML =` ${this.totalCalContrapiso} kg`;
        //Mostrar en html cuantos kg de piedra necesita
        let mostrarPiedraContrapiso= document.querySelector(".mostrarPiedraContrapiso");
        mostrarPiedraContrapiso.innerHTML =` ${this.totalPiedraContrapiso} kg`;
        //Mostrar resultados
    }
}

//3ro asignar valores para los calculos
let valorCementoContrapiso = 1 ;
let valorArenaContrapiso = 0.01;
let valorCalContrapiso = 1;
let valorPiedraContrapiso = 0.01;

//4to pedir metros y espesor capa a construir (usar funcion para checkear que sea valor numerico)
let metrosContrapiso ;
function pedirMetrosContrapiso(){
    metrosContrapiso= parseInt(document.querySelector(".metrosContrapiso").value);
}

let centimetrosContrapiso ;
function pedirCentimetrosContrapiso(){
    centimetrosContrapiso= parseInt(document.querySelector(".centimetrosContrapiso").value);
}

//5to calcular cantidad de material
let cementoFinalContrapiso;
let arenaFinalContrapiso;
let piedraFinalContrapiso;
let calFinalContrapiso;

function calcularMaterialesContrapiso(){
    let metroscuadradosContrapiso = metrosContrapiso * centimetrosContrapiso;
    cementoFinalContrapiso = Math.round(metroscuadradosContrapiso*valorCementoContrapiso);
    arenaFinalContrapiso =metroscuadradosContrapiso*valorArenaContrapiso;
    calFinalContrapiso = Math.round(metroscuadradosContrapiso*valorCalContrapiso);
    piedraFinalContrapiso = metroscuadradosContrapiso*valorPiedraContrapiso;
}

//6to function total proccess
function procesoTotalContrapiso(){
    pedirMetrosContrapiso();
    pedirCentimetrosContrapiso();
    calcularMaterialesContrapiso();
    const Contrapiso1= new Contrapiso(cementoFinalContrapiso, arenaFinalContrapiso, calFinalContrapiso, piedraFinalContrapiso);
    Contrapiso1.resultadocalculosContrapiso();
     if (botonCalcularContrapiso == true){
            respuestaClickContrapiso()
    }
     
}
    
//7mo Funcion para el boton de calcular
let botonCalcularContrapiso = document.querySelector(".calcularContrapiso");

function respuestaClickContrapiso(){
       procesoTotalContrapiso(); 
       document.getElementById("sectionResultadosContrapiso").style.display = "block";
       document.querySelector("#sectionContrapiso").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

