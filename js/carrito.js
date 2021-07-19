// Agregar productos al carrito

const listadoProductos = [ {nombre: "ARENA", precio: 1950, id:"arenacarro", stock: 10000,} ,
{nombre: "PIEDRA", precio: 4000, id:"piedracarro", stock: 10000, } ,
{nombre: "CEMENTO LOMA NEGRA", precio: 900, id:"lomanegra", stock: 10000, } ,
{nombre: "CEMENTO AVELLANEDA", precio: 700, id:"avellaneda",  stock: 10000,} ,
{nombre: "CEMENTO HOLCIM", precio: 650, id:"holcim" , stock: 10000,} ,
{nombre: "CEMENTO COMODORO", precio: 890, id:"comodoro" , stock: 10000,} ,
{nombre: "CAL MALAGUEÑO", precio: 800, id:"malaguenio" , stock: 10000,} ,
{nombre: "CAL SANTA ELENA", precio: 900, id:"santaelena" , stock: 10000,} ,
{nombre: "CAL EL MILAGRO", precio: 970, id:"elmilagro" , stock: 10000,} ,
{nombre: "HIDROFUGO PROTEX", precio: 300, id:"protex" , stock: 10000,} ,
{nombre: "HIDROFUGO SIKA", precio: 400, id:"sika" , stock: 10000, } ,
{nombre: "HIDROFUGO WEBER", precio: 370, id:"weber" , stock: 10000,} ,
{nombre: "LADRILLO COMUN", precio: 30, id:"ladrillocomun" , stock: 10000,} ,
{nombre: "LADRILLON", precio: 40, id:"ladrillon" , stock: 10000,} ,
{nombre: "BLOQUE VIBRADO", precio: 55, id:"bloquevibrado" , stock: 10000,} ,
{nombre: "LADRILLO HUECO 8", precio: 50, id:"ladrillohueco8" , stock: 10000,} ,
{nombre: "LADRILLO HUECO 12", precio: 50, id:"ladrillohueco12" , stock: 10000,} ,
{nombre: "LADRILLO HUECO 18", precio: 50, id:"ladrillohueco18" , stock: 10000,} ,
{nombre: "PINTURA ASFALTICA MAXHAUS", precio: 780, id:"maxhaus" , stock: 10000,} ,
{nombre: "PINTURA ASFALTICA MEGAFLEX", precio: 700, id:"megaflex" , stock: 10000,} ,
{nombre: "PINTURA ASFALTICA DESSUTOL", precio: 600, id:"dessutol" , stock: 10000,} ,
]


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
        console.log("En este momento no contamos con "+ productoIngresado + " en stock")
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

 

