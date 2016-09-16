window.addEventListener("load", function() {
  var boton = document.getElementById("cri");
  var contador = 1;
  boton.addEventListener("click", function() {
    if(contador == 1) {
      document.getElementById("color").value = "Morado";
      document.getElementById("purple").classList.add("border-purple");
      document.getElementById("aqua").classList.remove("border-green");
    }
    if(contador == 2) {
      document.getElementById("color").value = "Amarillo";
      document.getElementById("pink").classList.add("border-yellow");
      document.getElementById("purple").classList.remove("border-purple");
    }
    if(contador == 3) {
      document.getElementById("color").value = "Verde";
      document.getElementById("aqua").classList.add("border-green");
      document.getElementById("pink").classList.remove("border-yellow");
      contador = 0;
    }
    contador++;
  });
  
});

window.addEventListener("load", function() {
  var boton = document.getElementById("superCri");
  boton.addEventListener("click", function() {
    var color = document.getElementById("color").value;
    if (color == "morado") {
      document.getElementById("purple").classList.toggle("border-purple");
      document.getElementById("pink").classList.remove("border-yellow");
      document.getElementById("aqua").classList.remove("border-green");
    } else if (color == "amarillo") {
      document.getElementById("pink").classList.toggle("border-yellow");
      document.getElementById("purple").classList.remove("border-purple");
      document.getElementById("aqua").classList.remove("border-green");
    } else if (color == "verde") {
      document.getElementById("aqua").classList.toggle("border-green");
      document.getElementById("pink").classList.remove("border-yellow");
      document.getElementById("purple").classList.remove("border-purple");
    }
  });
});



