var tablero;
var cTeclas = 0;

function numeroAleatorio (minimo, maximo)
{
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	    return numero;
}

var fondo = {
	imagenURL:"JavaScript/RecursosGraficos/fondo.gif",
	imagenOK: false
};

var link = {
	x: 100,
	y: 100,
	frenteURL: ["JavaScript/RecursosGraficos/monito_frente.png", 
	            "JavaScript/RecursosGraficos/monito_atras.png", 
	            "JavaScript/RecursosGraficos/monito_izquierda.png", 
	            "JavaScript/RecursosGraficos/monito_derecha.png"],
	frenteOK: [false, false, false, false],
	velocidad: 10
};
//
var ganon = {
	x: 400,
	y: 100,
	maloURL: "JavaScript/RecursosGraficos/malo.png",
	maloOK: false
};

var teclasCodigo = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

function inicio()
{
	var canvas = document.getElementById("tableroCanvas");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	link.imagen = [new Image(), new Image(), new Image(), new Image()];
	for(var i = 0; i<link.frenteURL.length; i++)
    {
       link.imagen[i].src = link.frenteURL[i];
	   link.imagen[i].onload = confirmarLink(i);
    }

	ganon.imagen = new Image();
	ganon.imagen.src = ganon.maloURL;
	ganon.imagen.onload = confirmarGanon;

    //
    document.addEventListener("keydown", teclado);
}

function teclado(datos)
{
	//debo definir un if para cada obstáculo, después de que se haya dibujado
	//Para comentar con atajo es CTRL + }
	//var flecha = datos.keyCode;
	var i = 0;
	if (datos.keyCode == teclasCodigo.DOWN)
	{
		if(link.y < 450)
		{
			link.y += link.velocidad;
			moverGanon(cTeclas);
			cTeclas++;
		}
	}
	if (datos.keyCode == teclasCodigo.UP)
	{
		if(link.y >0)
		{
			link.y -= link.velocidad;
			i = 1;
			moverGanon(cTeclas);
			cTeclas++;
		}
	}
	if (datos.keyCode == teclasCodigo.LEFT)
	{
		if(link.x > 0)
		{
			link.x -= link.velocidad;
			i = 2;
			moverGanon(cTeclas);
			cTeclas++;
		}
	}
	if (datos.keyCode == teclasCodigo.RIGHT)
	{
		//if((link.x > 0 && link.x < 103) && (link.y > 196 && link.y < 251))
		
		if(link.x < 450)
		{
			link.x += link.velocidad;
			i = 3;
			moverGanon(cTeclas);
			cTeclas++;
		}
	}

	dibujar(i);

	if((link.x >= 0 && link.x < 102 && link.y > 197 && link.y < 301) || 
		(link.x > 147 && link.x < 251 && link.y >= 0 && link.y < 302) || 
		(link.x > 298 && link.x < 500 && link.y > 298 && link.y < 402) ||
		(link.x >= (ganon.x - 50) && link.y >= (ganon.y - 50) && link.x <= (ganon.x + 50) && link.y <= (ganon.y + 50)))
		{
			alert("moriste");
			link.x = 100;
			link.y = 100;
			ganon.x = 400;
			ganon.y = 100;
			dibujar(0);
		}
}

function confirmarFondo()
{
    fondo.imagenOK = true;
    dibujar(0);
}

function confirmarLink(i)
{
	link.frenteOK[i] = true;
	dibujar(0);
}

function confirmarGanon()
{
	ganon.maloOK = true;
	dibujar(0);
}

function moverGanon(contadorTeclas)
{
    if(contadorTeclas == 10)
    {
    	ganon.y = numeroAleatorio(0, 450);
    	ganon.x = numeroAleatorio(0, 450);
    	cTeclas = 0;
    }
}

function dibujar(i)
{
	//como la variable de la condición  es booleana, si es true, no debo indicar el "== true"
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	if(link.frenteOK[0] == true && link.frenteOK[1] == true && link.frenteOK[2] == true && link.frenteOK[3] == true)
	{
		tablero.drawImage(link.imagen[i], link.x, link.y);

	}

	if(ganon.maloOK == true)
	{
		tablero.drawImage(ganon.imagen, ganon.x, ganon.y);
	}
}