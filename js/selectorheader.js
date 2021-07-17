function mostrar(){
    getSelectValue = document.getElementById("selecciontrabajo").value;
    if(getSelectValue=="cimientos"){
      document.getElementById("trabajos").style.visibility = "hidden";
      document.getElementById("cimientos").style.visibility = "visible";
      document.getElementById("capavertical").style.visibility = "hidden";
      document.getElementById("capahorizontal").style.visibility = "hidden";
      document.getElementById("mamposteria").style.visibility = "hidden";
      document.getElementById("revoqueexterior").style.visibility = "hidden";
      document.getElementById("revoqueinterior").style.visibility = "hidden";
      document.getElementById("contrapiso").style.visibility = "hidden";
      document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="capavertical"){
      document.getElementById("trabajos").style.visibility = "hidden";
      document.getElementById("cimientos").style.visibility = "hidden";
      document.getElementById("capavertical").style.visibility = "visible";
      document.getElementById("capahorizontal").style.visibility = "hidden";
      document.getElementById("mamposteria").style.visibility = "hidden";
      document.getElementById("revoqueexterior").style.visibility = "hidden";
      document.getElementById("revoqueinterior").style.visibility = "hidden";
      document.getElementById("contrapiso").style.visibility = "hidden";
      document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="capahorizontal"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "visible";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="mamposteria"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "visible";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="revoqueexterior"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "visible";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="revoqueinterior"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "visible";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="contrapiso"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "visible";
        document.getElementById("carpeta").style.visibility = "hidden";
    }else if(getSelectValue=="carpeta"){
        document.getElementById("trabajos").style.visibility = "hidden";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "visible";
    }else if(getSelectValue=="0"){
        document.getElementById("trabajos").style.visibility = "visible";
        document.getElementById("cimientos").style.visibility = "hidden";
        document.getElementById("capavertical").style.visibility = "hidden";
        document.getElementById("capahorizontal").style.visibility = "hidden";
        document.getElementById("mamposteria").style.visibility = "hidden";
        document.getElementById("revoqueexterior").style.visibility = "hidden";
        document.getElementById("revoqueinterior").style.visibility = "hidden";
        document.getElementById("contrapiso").style.visibility = "hidden";
        document.getElementById("carpeta").style.visibility = "hidden";
    }
  }