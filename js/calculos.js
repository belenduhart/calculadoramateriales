//CIMIENTOS
//1eroA elegir tipo de trabajo
// var trabajoSeleccionado = prompt("Elegir el tipo de trabajo a realizar: CIMIENTOS, MAMPOSTERIA, CAPA HORIZONTAL, CAPA VERTICAL, REVOQUE INTERIOR, REVOQUE EXTERIOR, CONTRAPISO, CARPETA");
var trabajoSeleccionado = document.getElementById("selecciontrabajo").value

//1roB que se cumpla la condicion de que elijan cimientos
while (trabajoSeleccionado === "cimientos"){
    procesoTotalCimientos();
}

//2do materiales usados para cimientos
class Cimientos {
    constructor(totalCementoCimientos, totalCalCimientos, totalArenaCimientos, totalLadrilloCimientos){
        this.totalCementoCimientos = totalCementoCimientos,
        this.totalCalCimientos = totalCalCimientos,
        this.totalArenaCimientos = totalArenaCimientos,
        this.totalLadrilloCimientos = totalLadrilloCimientos;
    }
    resultadocalculosCimientos(){
        alert("Usted necesita comprar " + this.totalCementoCimientos + "kg de cemento, " + this.totalCalCimientos + "kg de Cal " + this.totalArenaCimientos + "m3 de Arena y " + this.totalLadrilloCimientos + " unidades de ladrillos.");
    }
}

//3ero lista de las variables que hay en el trabajo seleccionado, con su respectivo valor.
// const arrayLadrillos =["COMUN" , "LADRILLON", "HUECO8", "HUECO12", "HUECO18", "VIBRADO" ];
const arrayLadrillosCimientos = [value="LadrilloComun", value="LadrilloHueco8", value="LadrilloHueco12", value="LadrilloHueco18", value="Ladrillon", value="LadrilloVibrado"];
//const arrayPared = [10, 15, 20, 30];
const arrayParedCimientos =[value=10, value=15, value=20, value=30];

//4to pedir que el usuario seleccione cada variable y asignarle su valor con metodo find
let valorEnArrayLadrilloCimientos;
function seleccionLadrilloUsuarioCimientos(){
    // let ladrilloUsuarioCimientos = prompt("¿Con que tipo de ladrillo quiere realizar el trabajo? Ladrillo comun, Ladrillon, Ladrillo Hueco8, Ladrillo Hueco12, Ladrillo Hueco18 o Bloque Vibrado");
    let ladrilloUsuarioCimientos = document.querySelector("ladrilloCimientos").value;
    valorEnArrayLadrilloCimientos = arrayLadrillosCimientos.find((i)=> i === ladrilloUsuarioCimientos);
}
let valorEnArrayParedCimientos;
function seleccionParedUsuarioCimientos (){
    // let paredUsuarioCimientos = parseInt(prompt("¿Cual será el ancho de la pared a construir en cm? 10 , 15, 20, 30"));
    let paredUsuarioCimientos= document.querySelector("paredCimientos").value;
    valorEnArrayParedCimientos = arrayParedCimientos.find((i)=> i === paredUsuarioCimientos);
}


//5to asignar valores para los calculos
let valorCemento;
let valorCal;
let valorArena;
let valorLadrillo;
let error = document.querySelector ("#error");

//Luego se le agrega el evento onclick para que todo esto se calcule al hacer click en el boton de Calcular
function valorMaterialParaCalculoCimientos (){
    if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[0]){
        if (valorEnArrayParedCimientos === arrayParedCimientos[1]){
            valorCementoCimientos= parseInt(7);
            valorCalCimientos= parseInt(11);
            valorArenaCimientos= parseFloat(0.05);
            valorLadrilloCimientos= parseInt(60);
        } else if (valorEnArrayParedCimientos === arrayParedCimientos[3]){
            valorCementoCimientos= parseInt(14);
            valorCalCimientos= parseInt(22);
            valorArenaCimientos= parseFloat(0.11);
            valorLadrilloCimientos= parseInt(120);
        } else if (valorEnArrayParedCimientos == arrayParedCimientos[2] || (valorEnArrayParedCimientos == arrayParedCimientos[0])){
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 15cm y 30cm con ese tipo de ladrillo! </p> `;
            // alert("Solo se pueden hacer paredes de 15cm y 30cm con ese tipo de ladrillo");
            seleccionLadrilloUsuarioCimientos();
        }
    } else if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[1]){
        if (valorEnArrayParedCimientos === arrayParedCimientos[1]){
            valorCementoCimientos= parseInt(6);
            valorCalCimientos= parseInt(9);
            valorArenaCimientos= parseFloat(0.04);
            valorLadrilloCimientos= parseInt(52);
        }else{
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo! </p> `;
            // alert("Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo")
            seleccionLadrilloUsuarioCimientos();
        }
    } else if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[2]){
        if (valorEnArrayParedCimientos === arrayParedCimientos[2]){
            valorCementoCimientos= parseInt(4);
            valorCalCimientos= parseInt(6);
            valorArenaCimientos= parseFloat(0.04);
            valorLadrilloCimientos= parseInt(15);
        }else{
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 20cm con ese tipo de ladrillo! </p> `;
            // alert("Solo se pueden hacer paredes de 20cm con ese tipo de ladrillo");
            seleccionLadrilloUsuarioCimientos();
        }
    }else if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[3]){
        if (valorEnArrayParedCimientos === arrayParedCimientos[0]){
            valorCementoCimientos= parseInt(6);
            valorCalCimientos= parseInt(3);
            valorArenaCimientos= parseFloat(0.01);
            valorLadrilloCimientos= parseInt(17);
        }else if (valorEnArrayParedCimientos === arrayParedCimientos[2]){
            valorCementoCimientos= parseInt(6);
            valorCalCimientos= parseInt(6);
            valorArenaCimientos= parseFloat(0.03);
            valorLadrilloCimientos= parseInt(34);
        }else{
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 10cm y 20cm con ese tipo de ladrillo! </p> `;
            // alert("Solo se pueden hacer paredes de 10cm y 20cm con este tipo de ladrillo");
            seleccionLadrilloUsuarioCimientos();
        }
    }else if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[4]){
        if (valorEnArrayParedCimientos === arrayParedCimientos[1]){
            valorCementoCimientos= parseInt(6);
            valorCalCimientos= parseInt(6);
            valorArenaCimientos= parseFloat(0.03);
            valorLadrilloCimientos= parseInt(17);
        }else{
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo! </p> `;
            // alert("Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo");
            seleccionLadrilloUsuarioCimientos();
        }
    }else if (valorEnArrayLadrilloCimientos === arrayLadrillosCimientos[5]){
        if(valorEnArrayParedCimientos === arrayParedCimientos[2]){
            valorCementoCimientos= parseInt(6);
            valorCalCimientos= parseInt(6);
            valorArenaCimientos= parseFloat(0.03);
            valorLadrilloCimientos= parseInt(17);
        }else {
            error.innerHTML= ` <p> ¡Solo se pueden hacer paredes de 20cm con ese tipo de ladrillo! </p> `;
            // alert ("Solo se pueden hacer paredes de 20cm con ese tipo de ladrillos");
            seleccionLadrilloUsuarioCimientos();
        }
    }
}

//6to pedir metros a construir
let metros ;
function pedirMetrosCimientos(){
    // metros = parseInt(prompt("Ingresar cantidad de metros cuadrados a construir"));
    metros= parseInt(document.querySelector("metrosCimientos").value);
}

//7mo calcular cantidad de material
let cementoFinalCimientos;
let calFinalCimientos;
let arenaFinalCimientos;
let ladrillosFinalCimientos;

function calcularMaterialesCimientos(){
    cementoFinalCimientos = metros*valorCementoCimientos;
    calFinalCimientos = metros*valorCalCimientos;
    arenaFinalCimientos = metros*valorArenaCimientos;
    ladrillosFinalCimientos = metros*valorLadrilloCimientos;
}

//8vo function total proccess
function procesoTotalCimientos(){
    seleccionLadrilloUsuarioCimientos();
    seleccionParedUsuarioCimientos();
    console.log (valorEnArrayLadrilloCimientos + " " + valorEnArrayParedCimientos);
    valorMaterialParaCalculoCimientos();
    pedirMetrosCimientos();
    calcularMaterialesCimientos();
    const Cimientos1= new Cimientos(cementoFinalCimientos, calFinalCimientos, arenaFinalCimientos, ladrillosFinalCimientos);
    Cimientos1.resultadocalculosCimientos();
}


//Llamar a funciones.- llamadas al principio al declarar trabajoSeleccionado

