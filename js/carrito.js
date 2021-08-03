// Agregar productos al carrito

const listadoProductos = [ {nombre: "ARENA", precio: 1950, id:"arenacarro", stock: 10000, img:"../../imagenes/arena.jpg",} ,
{nombre: "PIEDRA", precio: 4000, id:"piedracarro", stock: 10000, img:"../imagenes/piedra.jpg",} ,
{nombre: "CEMENTO LOMA NEGRA", precio: 900, id:"lomanegra", stock: 10000, img:"../imagenes/cementolomanegra.jpg",} ,
{nombre: "CEMENTO AVELLANEDA", precio: 700, id:"avellaneda",  stock: 10000, img:"../imagenes/cementoavellaneda.jpg",} ,
{nombre: "CEMENTO HOLCIM", precio: 650, id:"holcim" , stock: 10000, img:"../imagenes/cementoholcim.jpg",} ,
{nombre: "CEMENTO COMODORO", precio: 890, id:"comodoro" , stock: 10000, img:"../imagenes/cementocomodoro.png",} ,
{nombre: "CAL MALAGUEÑO", precio: 800, id:"malaguenio" , stock: 10000, img:"../imagenes/cal3.jpg",} ,
{nombre: "CAL SANTA ELENA", precio: 900, id:"santaelena" , stock: 10000, img: "../imagenes/cal1.jpg", } ,
{nombre: "CAL EL MILAGRO", precio: 970, id:"elmilagro" , stock: 10000, img: "../imagenes/cal2.jpg",} ,
{nombre: "HIDROFUGO PROTEX", precio: 300, id:"protex" , stock: 10000, img: "../imagenes/hidrofugoprotex.jpg",} ,
{nombre: "HIDROFUGO SIKA", precio: 400, id:"sika" , stock: 10000, img: "../imagenes/hidrofugosika.jpg", } ,
{nombre: "HIDROFUGO WEBER", precio: 370, id:"weber" , stock: 10000, img: "../imagenes/hidrofugoweber.jpg",} ,
{nombre: "LADRILLO COMUN", precio: 30, id:"ladrillocomun" , stock: 10000,img: "../imagenes/ladrillocomun.jpg",} ,
{nombre: "LADRILLON", precio: 40, id:"ladrillon" , stock: 10000, img: "../imagenes/ladrillon.jpg",} ,
{nombre: "BLOQUE VIBRADO", precio: 55, id:"bloquevibrado" , stock: 10000, img: "../imagenes/cementovibrado.jpg",} ,
{nombre: "LADRILLO HUECO 8", precio: 50, id:"ladrillohueco8" , stock: 10000, img: "../imagenes/hueco8.jpg",} ,
{nombre: "LADRILLO HUECO 12", precio: 50, id:"ladrillohueco12" , stock: 10000, img: "../imagenes/hueco12.jpg",} ,
{nombre: "LADRILLO HUECO 18", precio: 50, id:"ladrillohueco18" , stock: 10000, img: "../imagenes/hueco18.jpg",} ,
{nombre: "PINTURA ASFALTICA MAXHAUS", precio: 780, id:"maxhaus" , stock: 10000, img: "../imagenes/maxhaus.jpg",} ,
{nombre: "PINTURA ASFALTICA MEGAFLEX", precio: 700, id:"megaflex" , stock: 10000, img: "../imagenes/megaflex.jpg",} ,
{nombre: "PINTURA ASFALTICA DESSUTOL", precio: 600, id:"dessutol" , stock: 10000, img: "../imagenes/dessutol.jpg",} ,
]

//Lista de productos ordenadas por precio
let listadoProductosOrdenado= listadoProductos.sort((a, b) => {
    return a.precio - b.precio
        });
;
console.log(listadoProductosOrdenado);


//Carrito de compras

class ProductoAñadido {
    constructor(producto, cantidad) {
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.subtotal = producto.precio * cantidad
    }   
}

let productoIngresado;
let cantidadIngresada;
let productoSeleccionado;
let elegirNuevoProducto;
const carritoCompras = [];

procesoCompleto()
while(elegirNuevoProducto == "SI") {
    procesoCompleto()
}

console.log(carritoCompras)
verCarrito()

function procesoCompleto () {
    elegirProducto()
    const disponibilidad = verDisponibilidadProducto(productoIngresado, listadoProductos, cantidadIngresada)
    if(disponibilidad) {
    
       let agregar = prompt("¿Desea agregar " + cantidadIngresada + " unidades de " + productoIngresado + " al carrito? SI / NO" )
       if (agregar.toUpperCase() == "SI") {    
           let item = new ProductoAñadido (productoSeleccionado, cantidadIngresada)
           agregarItem(item)
           elegirNuevoProducto = prompt("¿Quiere continuar comprando otros productos? SI / NO")
        
       } else {
           elegirNuevoProducto = prompt("¿Quiere continuar comprando otros productos? SI / NO")
       } 
    } else {
        error.innerHTML= " <p> En este momento no contamos con ${productoIngresado} en stock </p> ";
        // console.log("En este momento no contamos con "+ productoIngresado + " en stock")
    }

}

function elegirProducto() {
    do{
        productoIngresado = prompt("Elige el producto y la marca que deseas comprar");
        productoIngresado = productoIngresado.toUpperCase();
        cantidadIngresada = parseInt(prompt("Qué cantidad necesitas de " + productoIngresado + " ?"))
        
     } while(productoIngresado == "" || productoIngresado == null || !isNaN(productoIngresado) )
}


function verDisponibilidadProducto (nombreProducto, lista, cantidad) {
    productoSeleccionado = lista.find((p) => p.nombre == nombreProducto) 
    let stock = verificarStock(productoSeleccionado.stock, cantidad)
    
    if (productoSeleccionado && stock) {
        return true
    } else if (!productoSeleccionado) {
        alert("El producto seleccionado no existe")
    } else if (!stock) {
        alert("En este momento no contamos con ese stock de  " + nombreProducto + " , continua con la compra de otros materiales")
        procesoCompleto()
    }
}

function verificarStock(stockProducto, cantidad){
    if (stockProducto >= cantidad){
        return true
    } else {
        return false
    }
}


function agregarItem(itemAagregar) {
    carritoCompras.push(itemAagregar)
}

function verCarrito() {
    for (let i = 0 ; i < carritoCompras.length; i++){
        alert("Producto: " + carritoCompras[i].nombre + ". Cantidad: " + carritoCompras[i].cantidad)
    }
     let totalCarrito = carritoCompras.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
      }, 0);
      alert("El total de compra es: $" + totalCarrito)
      alert("Gracias por su compra! A continuación sera redirigido a la página de pago")
}


//Agregado de productos a la pagina final del carrito
let agregandoConElBoton = document.querySelector(".div2");
carritoCompras.forEach( i => {
    agregandoConElBoton.innerHTML +=
    `<div class="elementos">
        <img src="${i.img}">
        <p class="nombrep"> ${i.nombre}</p>
    </div>
    <p> ${cantidadIngresada}</p>
    <p> $ ${i.precio}</p>
    <p>$ ${i.subtotal} </p>
    <i class="far fa-trash-alt"></i>
    <input type="submit" name="" value="Eliminar" class="botonEliminar" onclick="eliminarDelCarrito()">`
});
var totalAMostrar = innerHTML.totalCarrito;
//Guardo en el localstorage el array con los productos que se van agregando para que si se cierra la pagina no se vayan
localStorage.setItem('productos', JSON.stringify(carritoCompras));


let subTotal = document.querySelector("#totalCarrito");
subTotal.innerHTML = `<p class="resumencompra">Resumen de la compra</p>
                        <p id="subtotal">Subtotal: $ ${totalAMostrar} </p>
                        <p id="total"> Total a pagar: $ ${totalAMostrar} </p>
                        <input type="submit" name="" value="Comprar" class="botonComprar">`;



//Eliminar producto con boton de eliminar agregar borrar storage cuando se compra
function eliminarDelCarrito(carritoCompras, i){
    let eliminar = document.querySelector (".botonEliminar").value
    var prod = carritoCompras.indexOf( i );
    carritoCompras.splice( prod, 1 );
}
eliminarDelCarrito();



 

