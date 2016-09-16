# silly-machine
##Contexto
Son 3 botones que tiene que aparecer un borde al primer boton, y cada vez que se haga cri debe pasar el borde al siguiente boton cambiando el color del borde ademas debe aparecer el nombre del color del borde. Y tambien con el boton super cri se puede selecciona cualquier boton para que aparezca el borde.
## Explicacion del codigo
###Se crea: 
1. En el HTML le insertamos 3 <div> en ellos cuales van hacer de nuestro botones y creamos un <form> y dentro del form insertamos un <input> y dos <button>. 
2. En el CSS le creamos 3 clases para los bordes que parecen en los botones y le otorgamos un color. 
3. En el Js primero llamamos a nuestros elementos para llamar a nuestra ventana para hacer el cri:
```javascript
window.addEventListener("load", function() {
  var boton = document.getElementById("cri"); // Se esta llamando al  <button> con el id ="cri" de html.
  var contador = 1; // Se crea el contador para saber en que boto se iniciara.
  boton.addEventListener("click", function() { // Esta es la funcion donde se va hacer la condicion para que cada vez que se haga click.
    });
  
});
```
Luego se realiza la codicion : 
```javascript
  boton.addEventListener("click", function() {
    if(contador == 1) {// Esta es la condicion que en primer click el borde se pocisione en el primer boton haciendo aparecer l borde.
      document.getElementById("color").value = "Morado";
      document.getElementById("purple").classList.add("border-purple");
      document.getElementById("aqua").classList.remove("border-green");
    }
    if(contador == 2) {/*Esta es la segunda condicion que al hacer  click el borde se pocisione en el segundo  boton  pero a la vez se estaria removiendo el borde del primer boto*/.
      document.getElementById("color").value = "Amarillo";
      document.getElementById("pink").classList.add("border-yellow");
      document.getElementById("purple").classList.remove("border-purple");
    }
    if(contador == 3) {/*Esta es la tercera condicion que al hacer  click el borde se pocisione en el tercer  boton pero a la vez se estaria removiendo el borde del segundo boton*/.
      document.getElementById("color").value = "Verde";
      document.getElementById("aqua").classList.add("border-green");
      document.getElementById("pink").classList.remove("border-yellow");
      contador = 0;
    }
    contador++;
  });
});
```
Despues volvemos a llamar a nuestros elementos para hacer el supercri:
```javascript
window.addEventListener("load", function() {
  var boton = document.getElementById("superCri"); // Se esta llamando al  <button> con el id ="supercri" de html.
  boton.addEventListener("click", function() {

  });
});
```
Luego se realiza la codicion : 
```javascript
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
```



