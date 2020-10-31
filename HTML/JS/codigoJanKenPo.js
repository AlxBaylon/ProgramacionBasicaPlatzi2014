//Define las opciones posibles en el juego
var opciones = ["Piedra","Papel","Tijera"];
//Definimos las variables de la elección de cada jugador
var opcionUsuario;
var opcionMaquina = Math.floor(Math.random() * 3);
//Entrada de la opción del usuario
opcionUsuario = prompt("¿Qué eliges?: \n Piedra: 0\n Papel: 1\n Tijera: 2.", 0);
//Definimos los posibles resultados según la elección del usuario    
opcionUsuarioPiedra = ["Empate uwu","GG noob, perdiste...","Ganaste crack, ¡tremenda tula 7w7!"];
opcionUsuarioPapel = ["Ganaste crack, ¡tremenda tula 7w7!","Empate uwu","GG noob, perdiste..."];
opcionUsuarioTijera = ["GG noob, perdiste...","Ganaste crack, ¡tremenda tula 7w7!","Empate uwu"];

    if (! opciones[opcionUsuario])
    {
    	alert("Opción inválida, elige bien chingado padre >:c");
    }
    else if(opcionUsuario == 0)
    {
    	alert("Elegiste: " + opciones[opcionUsuario] + "\nSkynet eleigió: " + opciones[opcionMaquina] + "\n" + opcionUsuarioPiedra[opcionMaquina]);    }
    else if (opcionUsuario == 1)
    {
        alert("Elegiste: " + opciones[opcionUsuario] + "\nSkynet eleigió: " + opciones[opcionMaquina] + "\n" + opcionUsuarioPapel[opcionMaquina]);
    }
    else if (opcionUsuario == 2)
    {
    	alert("Elegiste: " + opciones[opcionUsuario] + "\nSkynet eleigió: " + opciones[opcionMaquina] + "\n" + opcionUsuarioTijera[opcionMaquina]);
    }