// 1º Elegir trabajo
// 2º Lista de materiales usados en ese trabajo
// 3º Lista de variables segun el trabajo, con los valores que pueden tomar (segun seleccion)
// 4º Pedir que se seleccione una opcion de cada variable 
// 5º Valor que adquirio la variable segun la seleccion del usuario (id)
// 6º Valor que toma cada material segun la convinacion de id's
// 7º Pedir cantidad de metros
// 8º  Calculo del total de los materiales multiplicando su valor por los metros
// 9º Mostrar los valores en total y dividir segun las bolsas


//CIMIENTOS
//1ero elegir tipo de trabajo
let trabajoSeleccionado = prompt("Elegir el tipo de trabajo a realizar: CIMIENTOS, MAMPOSTERIA, CAPA HORIZONTAL, CAPA VERTICAL, REVOQUE INTERIOR, REVOQUE EXTERIOR, CONTRAPISO, CARPETA");

//2do materiales usados para cimientos
class Cimientos {
    constructor(totalCemento, totalCal, totalArena, totalLadrillo){
        this.totalCemento = totalCemento,
        this.totalCal = totalCal,
        this.totalArena = totalArena,
        this.totalLadrillo = totalLadrillo;
    }
    resultadocalculos(){
        alert("Usted necesita comprar " + this.totalCemento + "kg de cemento, " + this.totalCal + "kg de Cal " + this.totalArena + "m3 de Arena y " + this.totalLadrillo + " unidades de ladrillos.");
    }
}

//3ero lista de las variables que hay en el trabajo seleccionado, con su respectivo valor.
const arrayLadrillos =["COMUN" , "LADRILLON", "HUECO8", "HUECO12", "HUECO18", "VIBRADO" ];
const arrayPared =[10, 15, 20, 30];

//4to pedir que el usuario seleccione cada variable y asignarle su valor con metodo find
let valorEnArrayLadrillo;
function seleccionLadrilloUsuario(){
    let ladrilloUsuario = prompt("¿Con que tipo de ladrillo quiere realizar el trabajo? Ladrillo comun, Ladrillon, Ladrillo Hueco8, Ladrillo Hueco12, Ladrillo Hueco18 o Bloque Vibrado");
    valorEnArrayLadrillo = arrayLadrillos.find((i)=> i === ladrilloUsuario);
}
let valorEnArrayPared;
function seleccionParedUsuario (){
    let paredUsuario = parseInt(prompt("¿Cual será el ancho de la pared a construir en cm? 10 , 15, 20, 30"));
    valorEnArrayPared = arrayPared.find((i)=> i === paredUsuario);
}


//5to asignar valores para los calculos
let valorCemento;
let valorCal;
let valorArena;
let valorLadrillo;

function valorMaterialParaCalculo (){
    if (valorEnArrayLadrillo === arrayLadrillos[0]){
        if (valorEnArrayPared === arrayPared[1]){
            valorCemento= parseInt(7);
            valorCal= parseInt(11);
            valorArena= parseFloat(0.05);
            valorLadrillo= parseInt(60);
        } else if (valorEnArrayPared === arrayPared[3]){
            valorCemento= parseInt(14);
            valorCal= parseInt(22);
            valorArena= parseFloat(0.11);
            valorLadrillo= parseInt(120);
        } else if (valorEnArrayPared == arrayPared[2] || (valorEnArrayPared == arrayPared[0])){
            alert("Solo se pueden hacer paredes de 15cm y 30cm con ese tipo de ladrillo");
            seleccionLadrilloUsuario();
        }
    } else if (valorEnArrayLadrillo === arrayLadrillos[1]){
        if (valorEnArrayPared === arrayPared[1]){
            valorCemento= parseInt(6);
            valorCal= parseInt(9);
            valorArena= parseFloat(0.04);
            valorLadrillo= parseInt(52);
        }else{
            alert("Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo")
            seleccionLadrilloUsuario();
        }
    } else if (valorEnArrayLadrillo === arrayLadrillos[2]){
        if (valorEnArrayPared === arrayPared[2]){
            valorCemento= parseInt(4);
            valorCal= parseInt(6);
            valorArena= parseFloat(0.04);
            valorLadrillo= parseInt(15);
        }else{
            alert("Solo se pueden hacer paredes de 20cm con ese tipo de ladrillo");
            seleccionLadrilloUsuario();
        }
    }else if (valorEnArrayLadrillo === arrayLadrillos[3]){
        if (valorEnArrayPared === arrayPared[0]){
            valorCemento= parseInt(6);
            valorCal= parseInt(3);
            valorArena= parseFloat(0.01);
            valorLadrillo= parseInt(17);
        }else if (valorEnArrayPared === arrayPared[2]){
            valorCemento= parseInt(6);
            valorCal= parseInt(6);
            valorArena= parseFloat(0.03);
            valorLadrillo= parseInt(34);
        }else{
            alert("Solo se pueden hacer paredes de 10cm y 20cm con este tipo de ladrillo");
            seleccionLadrilloUsuario();
        }
    }else if (valorEnArrayLadrillo === arrayLadrillos[4]){
        if (valorEnArrayPared === arrayPared[1]){
            valorCemento= parseInt(6);
            valorCal= parseInt(6);
            valorArena= parseFloat(0.03);
            valorLadrillo= parseInt(17);
        }else{
            alert("Solo se pueden hacer paredes de 15cm con ese tipo de ladrillo");
            seleccionLadrilloUsuario();
        }
    }else if (valorEnArrayLadrillo === arrayLadrillos[5]){
        if(valorEnArrayPared === arrayPared[2]){
            valorCemento= parseInt(6);
            valorCal= parseInt(6);
            valorArena= parseFloat(0.03);
            valorLadrillo= parseInt(17);
        }else {
            alert ("Solo se pueden hacer paredes de 20cm con ese tipo de ladrillos");
            seleccionLadrilloUsuario();
        }
    }
}

//6to pedir metros a construir
let metros ;
function pedirMetros(){
    metros = parseInt(prompt("Ingresar cantidad de metros cuadrados a construir"));
}

//7mo calcular cantidad de material
let cementoFinal;
let calFinal;
let arenaFinal;
let ladrillosFinal;

function calcularMateriales(){
    cementoFinal = metros*valorCemento;
    calFinal = metros*valorCal;
    arenaFinal = metros*valorArena;
    ladrillosFinal = metros*valorLadrillo;
}

//8vo function total proccess
function procesoTotal(){
    seleccionLadrilloUsuario();
    seleccionParedUsuario();
    console.log (valorEnArrayLadrillo + " " + valorEnArrayPared);
    valorMaterialParaCalculo();
    pedirMetros();
    calcularMateriales();
    const Cimientos1= new Cimientos(cementoFinal, calFinal, arenaFinal, ladrillosFinal);
    Cimientos1.resultadocalculos();
}


//Llamar a funciones.
procesoTotal();
