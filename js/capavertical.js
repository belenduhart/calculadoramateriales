//Capa vertical
//1eroA elegir tipo de trabajo
getSelectValue = document.getElementById("selecciontrabajo").value;
if(getSelectValue=="capavertical"){
    procesoTotalCapaVertical()
}

//2do materiales usados para CapaVertical
class CapaVertical {
    constructor(totalCementoCapaVertical, totalPinturaCapaVertical, totalHidrofugoCapaVertical){
        this.totalCementoCapaVertical = totalCementoCapaVertical,
        this.totalPinturaCapaVertical = totalPinturaCapaVertical,
        this.totalHidrofugoCapaVertical = totalHidrofugoCapaVertical;
    }
    resultadocalculosCapaVertical(){
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoCapaVertical= document.querySelector(".mostrarCementoCapaVertical");
        mostrarCementoCapaVertical.innerHTML =` ${this.totalCementoCapaVertical} kg`;
        //Mostrar en html cuantos kg de hidrofugo necesita
        let mostrarHidrofugoCapaVertical= document.querySelector(".mostrarHidrofugoCapaVertical");
        mostrarHidrofugoCapaVertical.innerHTML =` ${this.totalHidrofugoCapaVertical} kg`;
        //Mostrar en html cuantos l de pintura asfaltica necesita
        let mostrarPinturaCapaVertical= document.querySelector(".mostrarPinturaCapaVertical");
        mostrarPinturaCapaVertical.innerHTML =` ${this.totalPinturaCapaVertical} l`;
        //Mostrar resultados
    }
}

//3to asignar valores para los calculos
let valorCementoCapaVertical = 1;
let valorhidrofugoCapaVertical = 0.04;
let valorpinturaCapaVertical = 0.01;

//4to pedir metros a construir (usar funcion para checkear valor numerico)
let metrosCapaVertical ;
function pedirMetrosCapaVertical(){
    metrosCapaVertical= parseInt(document.querySelector(".metrosCapaVertical").value);
}

//5to pedir cm capa
let centimetrosCapaVertical ;
function pedirCentimetrosCapaVertical(){
    centimetrosCapaVertical= parseInt(document.querySelector(".centimetrosCapaVertical").value);
}


//6mo calcular cantidad de material
let cementoFinalCapaVertical;
let hidrofugoFinalCapaVertical;
let pinturaFinalCapaVertical;

function calcularMaterialesCapaVertical(){
    let metroCuadradoCapaVertical= parseInt(metrosCapaVertical * centimetrosCapaVertical);
    cementoFinalCapaVertical = metroCuadradoCapaVertical*valorCementoCapaVertical;
    hidrofugoFinalCapaVertical = Math.round(metroCuadradoCapaVertical*valorhidrofugoCapaVertical);
    pinturaFinalCapaVertical = Math.round(metroCuadradoCapaVertical*valorpinturaCapaVertical);
}

//7mo function total proccess
function procesoTotalCapaVertical(){
    pedirMetrosCapaVertical();
    pedirCentimetrosCapaVertical();
    calcularMaterialesCapaVertical();
    const CapaVertical1= new CapaVertical(cementoFinalCapaVertical, hidrofugoFinalCapaVertical,pinturaFinalCapaVertical);
    CapaVertical1.resultadocalculosCapaVertical();
     if (botonCalcularCapaVertical == true){
            respuestaClickCapaVertical()
    }
     
}
    
//8vo Funcion para el boton de calcular
let botonCalcularCapaVertical = document.querySelector(".calcularCapaVertical");

function respuestaClickCapaVertical(){
       procesoTotalCapaVertical(); 
       document.getElementById("sectionResultadosCapaVertical").style.display = "block";
       document.querySelector("#sectionCapavertical").style.display = "none";
}

//Llamar a funciones.(llamadas al principio con el selector de trabajo)

