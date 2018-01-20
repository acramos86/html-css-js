var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function trazarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

trazarLinea("pink", 20, 80, 100, 400);
trazarLinea("black", 100, 0, 180, 340);
trazarLinea("red", 300, 300, 0, 0);
trazarLinea("green", 20, 0, 20, 200);