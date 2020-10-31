function Pokemon (nomP, vidP, ataP, griP, imaP)
{
        this.nombre = nomP;
		this.vida = vidP;
		this.ataque = ataP; 
	    this.grito = griP;
	    this.imagen = imaP;
	    this.gritar = function()
	    {
	     	alert(this.grito);
	    }
}

   
function inicio()
{
	var pikachu = new Pokemon("Pikachu", 100, 55, "Pikaa!!", "pikachu.jpg"); 
    var heracross = new Pokemon("Heracross", 140, 100, "Heraa!!!", "heracross.png"); 
    var scizor = new Pokemon("Scizor", 120, 90, "Scaii!!", "scizor.png"); 
    var seleccionPokemon = prompt("¿Qué Pokemon elegirá?: \n" + 
    	                           pikachu.nombre + "\n" +
    	                           scizor.nombre + "\n" + 
    	                           heracross.nombre, pikachu.nombre);

	 function mostrarPokemon(nombrePoke)
    {
        if(nombrePoke == "Pikachu" || nombrePoke == "pikachu")
        {
        	//Aquí es textContent porque en algunos ordenadores 
        	//no funcionan ciertas sentencias y lo pongo para recordar en repasos posteriores.
        	nombrePokemon.textContent = pikachu.nombre;
        	datosPokemon.innerText = "Vida: " + pikachu.vida + "\n" + 
        	                         "Ataque: " + pikachu.ataque + "\n" + 
        	                         "Grito: " + pikachu.grito + "\n" + 
        	                         "Imagen: " + pikachu.imagen;
            imagenPokemon.src = pikachu.imagen;
            imagenPokemon.alt = pikachu.imagen;
            pikachu.gritar();
            //NO LO BORRES!!!!!!!! Es un ejemplo de otra forma de insertar código desde JavaScript en HTML
            //document.write('<center><img id="imagenPokemon" src="pikachu.jpg"></center>');
        }
        else if(nombrePoke == "Scizor" || nombrePoke == "scizor")
        {
        	nombrePokemon.innerText = scizor.nombre;
        	datosPokemon.innerText = "Vida: " + scizor.vida + "\n" + 
        	                         "Ataque: " + scizor.ataque + "\n" + 
        	                         "Grito: " + scizor.grito + "\n" + 
        	                         "Imagen: " + scizor.imagen;
            imagenPokemon.src = scizor.imagen;
            imagenPokemon.alt = scizor.imagen;
            scizor.gritar();
        }
        else if(nombrePoke == "Heracross" || nombrePoke == "heracross")
        {
        	nombrePokemon.innerText = heracross.nombre;
        	datosPokemon.innerText = "Vida: " + heracross.vida + "\n" + 
        	                         "Ataque: " + heracross.ataque + "\n" + 
        	                         "Grito: " + heracross.grito + "\n" + 
        	                         "Imagen: " + heracross.imagen;
            imagenPokemon.src = heracross.imagen;
            imagenPokemon.alt = heracross.imagen;
            heracross.gritar();
        }
        else
        {
        	alert("Se equivocó compa");
        }
    }
    mostrarPokemon(seleccionPokemon);

 }