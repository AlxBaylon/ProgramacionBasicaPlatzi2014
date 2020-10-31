var palabras = ["Alexandra", "Amor", "Guitarra", "Darkho"];
var hombre, espacio, l, numeroA, palabra;

function numeroAleatorio (minimo, maximo)
{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	    return numero;
}

var Ahorcado = function (con)
{
	this.contexto = con;
	this.intentosMax = 5;
	this.intentos = 0;
	this.vivo = true;
	this.completado = false;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000";
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{

		dibujo.beginPath();
		dibujo.arc(150,140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos > 1)
		{
			dibujo.beginPath();
        	dibujo.moveTo(150,180);
        	dibujo.lineTo(150,250);
        	dibujo.lineWidth = 5;
	        dibujo.strokeStyle = "#FF";
        	dibujo.stroke();
         	dibujo.closePath();
			
			if(this.intentos > 2)
			{
				dibujo.beginPath();
        	    dibujo.moveTo(120,210);
        	    dibujo.lineTo(150,181);
        	    dibujo.lineTo(180,210);
        	    dibujo.lineWidth = 5;
	            dibujo.strokeStyle = "#FF";
        	    dibujo.stroke();
         	    dibujo.closePath();
				
	         	if(this.intentos > 3)
	            	{
	            		dibujo.beginPath();
                 	    dibujo.moveTo(120,280);
                 	    dibujo.lineTo(150,250);
                	    dibujo.lineTo(180,280);
                 	    dibujo.lineWidth = 5;
	                    dibujo.strokeStyle = "#FF";
                	    dibujo.stroke();
                	    dibujo.closePath();
                	    
		                if(this.intentos > 4)
		                    {
		                    	dibujo.beginPath();
                        	    dibujo.moveTo(120,140);
                        	    dibujo.lineTo(140,120);
                        	    dibujo.moveTo(120,120);
                        	    dibujo.lineTo(140,140);

                        	    dibujo.moveTo(160,140);
                        	    dibujo.lineTo(180,120);
                        	    dibujo.moveTo(160,120);
                        	    dibujo.lineTo(180,140);

                        	    dibujo.lineWidth = 5;
	                            dibujo.strokeStyle = "#4433FF";
                	            dibujo.stroke();
                         	    dibujo.closePath();
		                    }
		            }
			}
		}
	}
}

Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if(this.intentos >= this.intentosMax)
	{
		this.vivo = false;
		alert("Moriste viejo");
	}
	this.dibujar();
}

function inicio() 
{
	numeroA = numeroAleatorio(0, 3);
	l = document.getElementById("letras");
	var boton = document.getElementById("botoncito");
	var canvas = document.getElementById("ahorcadiño");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);

	palabra = palabras[numeroA].toUpperCase();
	espacio = new Array(palabra.length);

	boton.addEventListener("click", checarLetra);

	mostrarPista(espacio);

}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var c = 0;
	var largo = espacio.length;

	for(i = 0; i<largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto = texto + espacio[i] + " ";
			c++;
		}
		else
		{
			texto += "_ "; 
		}
		
	}
	if(c == largo)
	{
		hombre.completado = true;
	}
	pista.innerText = texto;
}

function checarLetra(tecla)
{

	var letra = l.value
	letra = letra.toUpperCase();
	l.value = "";
	mostrarPalabra(letra, hombre, palabra);
    
}

function mostrarPalabra(letra, ahorcado, palabra) 
{
	var p;
	var encontrado = false;
	var i;

	if(ahorcado.vivo)
	{
		
	 if(!ahorcado.completado)
	 {  for(p in palabra)
	   {
		 if(letra == palabra[p])
		 {
			espacio[p] = letra;
			encontrado = true;
		 }
	   }
	   mostrarPista(espacio);

	   if(!encontrado)
	   {
		ahorcado.trazar();
	   }

	   if(!ahorcado.vivo)
	   {
		mostrarPista(palabra);
	   }

	 }
    }
}