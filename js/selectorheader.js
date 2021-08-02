function mostrar(){
    getSelectValue = document.getElementById("selecciontrabajo").value;
    if(getSelectValue=="cimientos"){
      document.getElementById("trabajos").style.display = "none";
      document.getElementById("sectionCimientos").style.display = "block";
      document.getElementById("sectionCapavertical").style.display = "none";
      document.getElementById("sectionCapahorizontal").style.display = "none";
      document.getElementById("sectionMamposteria").style.display = "none";
      document.getElementById("sectionRevoqueexterior").style.display = "none";
      document.getElementById("sectionRevoqueinterior").style.display = "none";
      document.getElementById("sectionContrapiso").style.display = "none";
      document.getElementById("sectionCarpeta").style.display = "none";
      document.getElementById("error").style.display= "none";
      document.getElementById("errorNumero").style.display= "none";
    }else if(getSelectValue=="capavertical"){
      document.getElementById("trabajos").style.display = "none";
      document.getElementById("sectionCimientos").style.display = "none";
      document.getElementById("sectionResultadosCimientos").style.display = "none";
      document.getElementById("sectionCapavertical").style.display = "block";
      document.getElementById("sectionCapahorizontal").style.display = "none";
      document.getElementById("sectionMamposteria").style.display = "none";
      document.getElementById("sectionRevoqueexterior").style.display = "none";
      document.getElementById("sectionRevoqueinterior").style.display = "none";
      document.getElementById("sectionContrapiso").style.display = "none";
      document.getElementById("sectionCarpeta").style.display = "none";
      document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="capahorizontal"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "block";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="mamposteria"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "block";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="revoqueexterior"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "block";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="revoqueinterior"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "block";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="contrapiso"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "block";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="carpeta"){
        document.getElementById("trabajos").style.display = "none";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "block";
        document.getElementById("error").style.display= "none";
    }else if(getSelectValue=="0"){
        document.getElementById("trabajos").style.display = "block";
        document.getElementById("sectionCimientos").style.display = "none";
        document.getElementById("sectionResultadosCimientos").style.display = "none";
        document.getElementById("sectionCapavertical").style.display = "none";
        document.getElementById("sectionCapahorizontal").style.display = "none";
        document.getElementById("sectionMamposteria").style.display = "none";
        document.getElementById("sectionRevoqueexterior").style.display = "none";
        document.getElementById("sectionRevoqueinterior").style.display = "none";
        document.getElementById("sectionContrapiso").style.display = "none";
        document.getElementById("sectionCarpeta").style.display = "none";
        document.getElementById("error").style.display= "none";
    }
  }