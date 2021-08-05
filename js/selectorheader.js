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
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
    }else if(getSelectValue=="capavertical"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCapavertical").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="capahorizontal"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCapahorizontal").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="mamposteria"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionMamposteria").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="revoqueexterior"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionRevoqueexterior").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="revoqueinterior"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionRevoqueinterior").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionMamposteria").hide();
        $("#sectionContrapiso").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="contrapiso"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionContrapiso").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="carpeta"){
        $("#trabajos").slideUp(300, function(){
            $("#sectionCarpeta").slideDown(600);
        });
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionContrapiso").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }else if(getSelectValue=="0"){
        $("#trabajos").slideDown(600);
        $("#sectionCimientos").hide();
        $("#sectionCapavertical").hide();
        $("#sectionCapahorizontal").hide();
        $("#sectionRevoqueexterior").hide();
        $("#sectionMamposteria").hide();
        $("#sectionRevoqueinterior").hide();
        $("#sectionCarpeta").hide();
        $("#error").hide();
        $("#errorNumero").hide();
        $("#sectionResultadosCimientos").hide();
    }
  }
