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


while(l<=300){
	trazarLinea("black", 0, l, (l+10), 300);
	trazarLinea("black", l, 0, 300, (l+10));
	l = l + 10;
}

trazarLinea("black", 0, 0, 0, 300);
trazarLinea("black", 0, 300, 300, 300);
trazarLinea("black", 0, 0, 300, 0);


