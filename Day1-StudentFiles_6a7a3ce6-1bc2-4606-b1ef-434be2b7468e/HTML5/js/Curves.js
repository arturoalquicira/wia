window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
        ctx.strokeStyle= "blue";
        ctx.lineWidth= 5;

        //stroke a simple bezier curve
        ctx.beginPath();
        ctx.moveTo(50,200);

        //bezierCurveTo(cx,cy,cx2,cy2,endX,endY)

        ctx.bezierCurveTo(50,100,200,100,200,150);
        ctx.stroke();

        //stroke a quadratic curve

        ctx.strokeStyle= "green";
        ctx.lineWidth= 5;

        //quadraticCurveTo(cx,cy,endX,endY)

        ctx.beginPath();
        ctx.moveTo(400,200);
        ctx.quadraticCurveTo(500,300,600,150);
        ctx.stroke();



						
						
						
						
		}
	}
}