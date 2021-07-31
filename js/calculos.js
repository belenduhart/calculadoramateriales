//CIMIENTOS
//1eroA elegir tipo de trabajo
// var trabajoSeleccionado = prompt("Elegir el tipo de trabajo a realizar: CIMIENTOS, MAMPOSTERIA, CAPA HORIZONTAL, CAPA VERTICAL, REVOQUE INTERIOR, REVOQUE EXTERIOR, CONTRAPISO, CARPETA");
// getSelectValue = document.getElementById("selecciontrabajo").value;

//1roB que se cumpla la condicion de que elijan cimientos
// if (getSelectValue === "cimientos"){
    // procesoTotalCimientos();
// }

//2do materiales usados para cimientos
class Cimientos {
    constructor(totalCementoCimientos, totalCalCimientos, totalArenaCimientos, totalLadrilloCimientos){
        this.totalCementoCimientos = totalCementoCimientos,
        this.totalCalCimientos = totalCalCimientos,
        this.totalArenaCimientos = totalArenaCimientos,
        this.totalLadrilloCimientos = totalLadrilloCimientos;
    }
    resultadocalculosCimientos(){
        // alert("Usted necesita comprar " + this.totalCementoCimientos + "kg de cemento, " + this.totalCalCimientos + "kg de Cal " + this.totalArenaCimientos + "m3 de Arena y " + this.totalLadrilloCimientos + " unidades de ladrillos.");
        //Mostrar en html cuantos kg de cemento necesita
        let mostrarCementoCimientos= document.getElementById("mostrarCementoCimientos");
        mostrarCementoCimientos.innerHTML =` ${this.totalCementoCimientos} kg`;
        //Mostrar en html cuantos kg de cal necesita
        let mostrarCalCimientos= document.getElementById("mostrarCalCimientos");
        mostrarCalCimientos.innerHTML =`  ${this.totalCalCimientos} kg `;
        //Mostrar en html cuantos m3 de arena necesita
        let mostrarArenaCimientos= document.getElementById("mostrarArenaCimientos");
        mostrarArenaCimientos.innerHTML =`  ${this.totalArenaCimientos} m3 `;
        //Mostrar en html cuantas unidades de ladrillos necesita
        let mostrarLadrillosCimientos= document.getElementById("mostrarLadrillosCimientos");
        mostrarLadrillosCimientos.innerHTML =` ${this.totalLadrilloCimientos} U`;
    }
}

//3ero lista de las variables que hay en el trabajo seleccionado, con su respectivo valor.
// const arrayLadrillos =["COMUN" , "LADRILLON", "HUECO8", "HUECO12", "HUECO18", "VIBRADO" ];
const arrayLadrillosCimientos = ["LadrilloComun", "LadrilloHueco8", "LadrilloHueco12", "LadrilloHueco18", "Ladrillon", "LadrilloVibrado"];
//const arrayPared = [10, 15, 20, 30];
const arrayParedCimientos =[10, 15, 20, 30];

//4to pedir que el usuario seleccione cada variable y asignarle su valor con metodo find
let valorEnArrayLadrilloCimientos;
function seleccionLadrilloUsuarioCimientos(){
    // let ladrilloUsuarioCimientos = prompt("¿Con que tipo de ladrillo quiere realizar el trabajo? Ladrillo comun, Ladrillon, Ladrillo Hueco8, Ladrillo Hueco12, Ladrillo Hueco18 o Bloque Vibrado");
    let ladrilloUsuarioCimientos ="";
    let ladrilloCimientos0 = document.getElementById("ladrilloCimientos0");
    let ladrilloCimientos1 = document.getElementById("ladrilloCimientos1");
    let ladrilloCimientos2 = document.getElementById("ladrilloCimientos2");
    let ladrilloCimientos3 = document.getElementById("ladrilloCimientos3");
    let ladrilloCimientos4 = document.getElementById("ladrilloCimientos4");
    let ladrilloCimientos5 = document.getElementById("ladrilloCimientos5");
    if ((ladrilloCimientos0).checked){
        ladrilloUsuarioCimientos = ladrilloCimientos0.value;
    }else if (ladrilloCimientos1.checked){
       ladrilloUsuarioCimientos = ladrilloCimientos1.value;
    }else if (ladrilloCimientos2.checked){
        ladrilloUsuarioCimientos = ladrilloCimientos2.value;
    }else if (ladrilloCimientos3.checked){
        ladrilloUsuarioCimientos = ladrilloCimientos3.value;
    }else if (ladrilloCimientos4.checked){
            ladrilloUsuarioCimientos = ladrilloCimientos4.value;
    }else if (ladrilloCimientos5.checked){
            ladrilloUsuarioCimientos = ladrilloCimientos5.value;
    }
    valorEnArrayLadrilloCimientos = arrayLadrillosCimientos.find((i)=> i === ladrilloUsuarioCimientos);
    console.log(ladrilloUsuarioCimientos);
}


let valorEnArrayParedCimientos;
function seleccionParedUsuarioCimientos (){
    // let paredUsuarioCimientos = parseInt(prompt("¿Cual será el ancho de la pared a construir en cm? 10 , 15, 20, 30"));
    let paredUsuarioCimientos= "";
    let paredCimientos0= document.getElementById("paredCimientos0");
    let paredCimientos1= document.getElementById("paredCimientos1");
    let paredCimientos2= document.getElementById("paredCimientos2");
    let paredCimientos3= document.getElementById("paredCimientos3");
    if(paredCimientos0.checked){
        paredUsuarioCimientos= paredCimientos0.value;
    }else if(paredCimientos1.checked){
        paredUsuarioCimientos= paredCimientos1.value;
    }else if(paredCimientos2.checked){
        paredUsuarioCimientos= paredCimientos2.value;
    }else if(paredCimientos3.checked){
        paredUsuarioCimientos= paredCimientos3.value;
    }
    valorEnArrayParedCimientos = arrayParedCimientos.find((i)=> i === paredUsuarioCimientos);
    console.log(paredUsuarioCimientos);
}


//5to asignar valores para los calculos
let valorCementoCimientos;
let valorCalCimientos;
let valorArenaCimientos;
let valorLadrilloCimientos;
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
    metros= parseInt(document.querySelector("#metrosCimientos").value);
}
//Checkear que sean números los ingresados
// metros.addEventListener("onkeypress", checkNumber());
// function checkNumber(){
//     if (metros != 0){
//         //valores de los numeros segun ASCII
//         if (metros < 49 || metros > 57){
//             // e.preventDefault();
//              alert("Ingrese un valor válido en los metros que desea construir")
//         }
//     }
// }

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
    if (e.botonCalcular == true){
        respuestaClickCimientos()
    }
}

//9no Funcion para el boton de calcular
let botonCalcular = document.querySelector("#calcularCimientos");
botonCalcular.onclick = respuestaClickCimientos;
function respuestaClickCimientos(){
    procesoTotalCimientos();
    const Cimientos1= new Cimientos(cementoFinalCimientos, calFinalCimientos, arenaFinalCimientos, ladrillosFinalCimientos);
    Cimientos1.resultadocalculosCimientos();
    document.getElementById("sectionResultadosCimientos").style.display = "block";
    document.getElementById("sectionCimientos").style.display = "none";
}

//Llamar a funciones.- llamadas al principio al declarar trabajoSeleccionado
