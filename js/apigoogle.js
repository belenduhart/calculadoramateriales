//Buscador de direcciones google
var buscadorDireccion = 'direccion' ; 
$(document).ready(function () {
    var obtenerDireccion;
    obtenerDireccion = new google.maps.places.Autocomplete((document.getElementById(buscadorDireccion)), {
        //Obtener las direcciones específicas
        types: ['address'],
    });
    google.maps.event.addListener(obtenerDireccion, 'place_changed', function () {
        var near_place = obtenerDireccion.getPlace();
    });
});

