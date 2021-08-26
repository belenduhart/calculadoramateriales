
let urlParams = new URLSearchParams(window.location.search);
let myParam = urlParams.get('id');
const routes = [
    { path: "", action: "index"},
    { path: "/", action: "index"},
    { path: "/carrito", action: "carrito"},
    { path: "/cemento", action: "cemento"},
    { path: "/pagar", action: "pagar"},
    { path: "/arenacarro", action: "arenacarro"},
    { path: "/avellaneda", action: "avellaneda"},
    { path: "/bloquevibrado", action: "bloquevibrado"},
    { path: "/comodoro", action: "comodoro"},
    { path: "/desutol", action: "desutol"},
    { path: "/elmilagro", action: "elmilagro"},
    { path: "/holcicom", action: "holcicom"},
    { path: "/ladrillocomun", action: "ladrillocomun"},
    { path: "/ladrillohueco8", action: "ladrillohueco8"},
    { path: "/ladrillohueco12", action: "ladrillohueco12"},
    { path: "/ladrillohueco18", action: "ladrillohueco18"},
    { path: "/ladrillon", action: "ladrillon"},
    { path: "/lomanegra", action: "lomanegra"},
    { path: "/malagueño", action: "malagueño"},
    { path: "/maxhaus", action: "maxhaus"},
    { path: "/megaflex", action: "megaflex"},
    { path: "/piedracarro", action: "piedracarro"},
    { path: "/protex", action: "protex"},
    { path: "/santaelena", action: "santaelena"},
    { path: "/sikasika", action: "sikasika"},
    { path: "/weber", action: "weber"},
]

const router = () =>{
    //Elimino el # y me queda el path que se encuentra dentro de mis rutas
    let currentPath = location.hash.slice(1);
    //uso la funcion 'find' para capturar los datos dentro de mi route
    let pathToGo = routes.find((p) => p.path == currentPath)|| undefined;
    pathToGo === undefined && (pathToGo = 404);

    //Renderizar en el section #app
    switch(pathToGo.action){
        case routes[0].action: //index calculadora
            $.get("./views/index.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/selectorheader.js")
            $.getScript("./js/capahorizontal.js");
            $.getScript("./js/capavertical.js");
            $.getScript("./js/cimientos.js");
            $.getScript("./js/carpeta.js");
            $.getScript("./js/contrapiso.js");
            $.getScript("./js/revoqueexterior.js");
            $.getScript("./js/revoqueinterior.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[1].action: //index calculadora
            $.get("./views/index.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/selectorheader.js");
            $.getScript("./js/capahorizontal.js");
            $.getScript("./js/capavertical.js");
            $.getScript("./js/cimientos.js");
            $.getScript("./js/carpeta.js");
            $.getScript("./js/contrapiso.js");
            $.getScript("./js/revoqueexterior.js");
            $.getScript("./js/revoqueinterior.js");
            $.getScript("./js/carrito.js");
            break;    
        case routes[2].action: //carrito
            $.get("./views/carrito.html", function (data) {
                $.getScript("./js/carrito.js");
                $.getScript("./js/checkout.js");
                $("#app").html(data);
            });

            break;
        case routes[3].action: //materiales para comprar
            $.get("./views/cemento.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/funcionesProductosGeneral.js");
            $.getScript("./js/objetos.js");
            break;
        case routes[4].action: //pagina para pagar
            $.get("./views/pagar.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/pagar.js");
            $.getScript("./js/objetos.js");
            $.getScript("./js/apigoogle.js");
            break;
        case routes[5].action: //producto
            $.get("./views/arenacarro.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[6].action: //producto
            $.get("./views/avellaneda.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;   
        case routes[7].action: //producto
            $.get("./views/bloquevibrado.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[8].action: //producto
            $.get("./views/comodoro.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[9].action: //producto
            $.get("./views/desutol.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[10].action: //producto
            $.get("./views/elmilagro.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[11].action: //producto
            $.get("./views/holcicom.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[12].action: //producto
            $.get("./views/ladrillocomun.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[13].action: //producto
            $.get("./views/ladrillohueco8.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[14].action: //producto
            $.get("./views/ladrillohueco12.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[15].action: //producto
            $.get("./views/ladrillohueco18.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[16].action: //producto
            $.get("./views/ladrillon.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[17].action: //producto
            $.get("./views/lomanegra.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[18].action: //producto
            $.get("./views/malagueño.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[19].action: //producto
            $.get("./views/maxhaus.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[20].action: //producto
            $.get("./views/megaflex.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[21].action: //producto
            $.get("./views/piedracarro.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[22].action: //producto
            $.get("./views/protex.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[23].action: //producto
            $.get("./views/santaelena.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[24].action: //producto
            $.get("./views/sikasika.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        case routes[25].action: //producto
            $.get("./views/weber.html", function (data) {
                $("#app").html(data);
            });
            $.getScript("./js/objetos.js");
            $.getScript("./js/carrito.js");
            break;
        default:
            alert("ERROR 404");
        break;
    }
}
