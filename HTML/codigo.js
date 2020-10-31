var peso;
var pesoEnMarte;

alert ("¿Quieres saber tu peso en Marte?");
peso = prompt ("¿Cuál es tu peso en Kg.?", 
	             "70");
peso = Number(peso)
pesoEnMarte = ((peso / 9.811) * 3.711).toFixed(2)

alert ("Tu peso en Marte es: " + pesoEnMarte + " Kg.")

//var nombre = "Ely";
//var cumpleaños = "tu cumpleaños es hoy, 30 de Septiembre";
//var edad = 24;

//alert(5 + "4" * 3);
//alert(nombre + ", " + cumpleaños + "\n" + edad + " años");