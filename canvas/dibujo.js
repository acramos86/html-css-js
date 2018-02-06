var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;

function trazarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

/*for (var i = 0; i < 300; i = i + 10 ) {
	trazarLinea("blue", 0, i, (i+10), 300);
	trazarLinea("blue", i, 0, 300, (i+10));
}*/

/*while(l<=300){
	trazarLinea("black", 0, l, (l+10), 300);
	//trazarLinea("black", l, 0, 300, (l+10));
	l = l + 10;
}*/

var dato=document.getElementById("texto_lineas");
var dato_boton=document.getElementById("boton");

function dibujoPorClick(){
	var x = parseInt(dato.value);
	for (var i = 0; i < 300; i = i + x ) {
		trazarLinea("blue", 0, i, (i+10), 300);
		trazarLinea("blue", i, 0, 300, (i+10));		
	}
	alert("Listo mijo");	
}

dato_boton.addEventListener("click", dibujoPorClick );



document.addEventListener("keyup", dibujoTeclado );

var teclas = {
	ARRIBA: 38,
	ABAJO: 40,
	IZQUIERDA: 37,
	DERECHA: 39
};

console.log(teclas);

var inicioX = 150;
var inicioY = 150;
var finX = 150;
var finY = 150;
var contador = 0;

function dibujoTeclado(evento){
	
	if (contador == 0){
		contador = contador + 1 ;

		switch(evento.keyCode){				

			case teclas.ARRIBA:
				trazarLinea("black", inicioX, inicioY, finX, (finY = finY - 10));
			break;

			case teclas.ABAJO:
				trazarLinea("black", inicioX, inicioY, finX, (finY = finY + 10));
			break;

			case teclas.IZQUIERDA:
				trazarLinea("black", inicioX, inicioY, (finX = finx - 10), finY);
			break;

			case teclas.DERECHA:
				trazarLinea("black", inicioX, inicioY, (finX = finx = 10), finY);
			break;

			default:
				console.log("Necesito que estripe una flecha, esa no sirve");
			break;

		}
		
	}else{
		switch(evento.keyCode){			

			case teclas.ARRIBA:
				trazarLinea("black", finX, finY, finX, (finY = finY - 10));
			break;

			case teclas.ABAJO:
				trazarLinea("black", finX, finY, finX, (finY = finY + 10));
			break;

			case teclas.IZQUIERDA:
				trazarLinea("black", finX, finY, (finX = finX - 10), finY);
			break;

			case teclas.DERECHA:
				trazarLinea("black", finX, finY, (finX = finX + 10), finY);
			break;

			default:
				console.log("Necesito que estripe una flecha, esa no sirve");
			break;

		}
	}

	

}

