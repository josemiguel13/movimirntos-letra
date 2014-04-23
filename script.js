movimirntos-letra
=================

movimiento letras 

var debug = "";
window.onload = function()
{
	//alert("Hola");
	var color = "#fff";
	var dibujar = SVG('divsvg').size("100%", 400);
	var image = dibujar.image('estudia.gif');
    image.size("100%", "100%");
    image.hide();


	
	var letraM = [[0,0],[0,200],[40,200],[60,90],[120,200],[140,200],[140,0],[60,60],[0,0]]; 
	//[[0, 0],[0,200],[60,90],[120,200],[120,0],[60,60],[0,0]]; 
	var letraC = [[0, 0],[200, 0], [200, 20], [20, 20],[20, 180],[200, 180],
				  [200,200],[0,200],[0,0]];

				   
				  
	var continua = dibujar.polyline(letraM).fill("none").stroke({width : 4, color: '#fff'}).attr({ fill: color });
	continua.animate(1000).plot(letraC).loop();

	for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				 
						if(this.value == 1)
						{
							image.show();
							
							continua.maskWith(image);
						}
						else
						{
							
							image.hide();
							continua.unmask();
							
						}
						break;
			}
		});
	}

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
