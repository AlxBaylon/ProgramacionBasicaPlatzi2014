var dibujoC, lienzo;

function inicio()
{
	dibujoC = document.getElementById("dibujo");
	lienzo = dibujoC.getContext("2d");
	lienzo.moveTo(0,0);
	lienzo.lineTo(0,300);
	lienzo.lineTo(300,300);
	lienzo.lineTo(300,0);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle = "#FF0000";
	lienzo.stroke();

	lienzo.beginPath();
	lienzo.strokeStyle = "#0000FF";
	lienzo.arc(150,150, 50, (Math.PI*2),false);
	lienzo.stroke();
	lienzo.closePath();

	var radio;
    lienzo.strokeStyle = "#00FF00";
	for(radio=49; radio>0; radio--)
	{
         lienzo.beginPath();
	     lienzo.arc(150,150, radio, (Math.PI*2),false);
	     lienzo.stroke();
	     lienzo.arc(150,150, radio, (Math.PI*2),false);
	     lienzo.stroke();
	     lienzo.arc(150,150, radio, (Math.PI*2),false);
	     lienzo.stroke();
	     lienzo.closePath();
	}

    var yLienzo=300; 
    var xLienzo=300;
    var espacioLinea =10;
    var n;
    lienzo.strokeStyle = "#000000";
	for(n=0; n<=(yLienzo/espacioLinea) && n<=(xLienzo/espacioLinea); n++)
	{
         lienzo.beginPath();
         lienzo.moveTo((n*espacioLinea),0);
	     lienzo.lineTo(0,(n*espacioLinea));
	     lienzo.stroke();

	     lienzo.beginPath();
         lienzo.moveTo(xLienzo,(n*espacioLinea));
	     lienzo.lineTo((n*espacioLinea),yLienzo);
	     lienzo.stroke();

         lienzo.beginPath();
         lienzo.moveTo((n*espacioLinea), 0);
	     lienzo.lineTo(xLienzo, (yLienzo-(n*espacioLinea)));
	     lienzo.stroke();

	     lienzo.beginPath();
         lienzo.moveTo(0, (n*espacioLinea));
	     lienzo.lineTo((xLienzo-(n*espacioLinea)),yLienzo);
	     lienzo.stroke();
	     lienzo.closePath();
	}

}