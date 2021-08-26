//Funcion con JQuery. 
//Seleccion de tipo de trabajo
function mostrar(){
    getSelectValue = $("#selecciontrabajo").val();
    if(getSelectValue=="cimientos"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCimientos").slideDown(600);
        });
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue =="capavertical"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCapavertical").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue=="capahorizontal"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCapahorizontal").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue=="revoqueexterior"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionRevoqueexterior").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue=="revoqueinterior"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionRevoqueinterior").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue=="contrapiso"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionContrapiso").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosCarpeta").hide();
    }else if(getSelectValue=="carpeta"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCarpeta").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
    }else if(getSelectValue=="0"){
        $("#trabajos").slideDown(600);
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionCarpeta").hide();
        $("#sectionContrapiso").hide();
        $("#error").hide();
        $("#sectionResultadosCimientos").hide();
        $("#sectionResultadosCapaVertical").hide();
        $("#sectionResultadosCapaHorizontal").hide();
        $("#sectionResultadosRevoqueExterior").hide();
        $("#sectionResultadosRevoqueInterior").hide();
        $("#sectionResultadosContrapiso").hide();
        $("#sectionResultadosCarpeta").hide();
    }
  }


