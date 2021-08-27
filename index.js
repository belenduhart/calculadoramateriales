//carga las rutas al momento de iniciar el sistema
//window.onload = router();
let files_loaded =[];
$(window).on( "load", function() {
    //Crear array para verificar que los scripts esten cargados cuando entro a la pagina [nombre archivo js , estacargado true/false]
    console.log( "crear array en local storage con los archivos JS" );
    files_loaded = [
        {name: "carrito.js", is_loaded:false},
        {name:"selectorheader.js", is_loaded:false},
        {name:"capahorizontal.js", is_loaded:false},
        {name:"capavertical.js", is_loaded:false},
        {name:"revoqueexterior.js", is_loaded:false},
        {name:"revoqueinterior.js", is_loaded:false},
        {name:"cimientos.js", is_loaded:false},
        {name:"contrapiso.js", is_loaded:false},
        {name:"carpeta.js", is_loaded:false},
        {name:"objetos.js", is_loaded:false},
        {name:"pagar.js", is_loaded:false},
        {name:"funcionesProductosGeneral.js", is_loaded:false},
        {name:"checkout.js", is_loaded:false},
        {name:"apigoogle.js", is_loaded:false}
    ];
localStorage.setItem("files_loaded", JSON.stringify(files_loaded));
console.log(files_loaded);
    router();
});

//Dp levantar el array en cada ruta de routes, preguntar si es true or false,  //getitem en cada router, si es false, agregar script, sino nada.
//e ir guardando en el local storage
//Array con nombre y true or false.

//Al momento que el hash se modifique en la url de la web debemos re rutear
$(window).on("hashchange", function () {
  router();
});

