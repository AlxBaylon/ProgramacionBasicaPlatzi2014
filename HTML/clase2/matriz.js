function explosion()
{
    alert("Explotaste cual musulmán");
    document.write("Pifaste bonito<br/>");
}
function salvado()
{
    alert("Salvado cual prota de shonen");
    document.write("Rifaste bonito<br/>");
}

function mostrar(pos)
{
   document.write(pos.coords.latitude + " , " + pos.coords.longitude);
}

//1 = bomba y 0 = a salvo
var campo = [ [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],
              [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],
              [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)],
              [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)] ];

//alert(campo);

var contadorX, contadorY;
var textos = ["¡Ganaste!","Alahu akbar..."];

alert("Estas en un campo minado, \nElije de entre el 0 y 3 para X y Y");

contadorX = prompt("Elije el número de X: ", 0);
contadorY = prompt("Elije el número de Y: ", 0);

if ((contadorX >=4 && contadorY >=4) || (contadorX <0 && contadorY <0))
{
    explosion();
}
else if((contadorX >=0 && contadorY >=0) || (contadorX <4 && contadorY <4))
{
   var posicion = campo[contadorX][contadorY];

   if(posicion == 1)
   {
      explosion();
      document.write(textos[posicion]);
      navigator.geolocation.getCurrentPosition( mostrar );
   }
   else
   {
     salvado();
     document.write(textos[posicion]);
     navigator.geolocation.getCurrentPosition( mostrar );
   }
}
else
{
	alert("¡¡Opción inválida!!\n" + "¡Te saliste del campo!");
	explosion();
}