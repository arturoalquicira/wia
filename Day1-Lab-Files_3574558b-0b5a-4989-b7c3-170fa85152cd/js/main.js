/*
     Name: Arturo Alquicira
     Date: 02-04-14
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload= function(){
/*******************************************
FILE SETUP

// Setup up 6 different Canvases in index.html one for each problem.
// Link the main.js file
// Setup the call to that canvas and get it's 2d context


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
var theCanvas1= document.getElementById("Canvas1");
    if(theCanvas1 && theCanvas1.getContext){
        var ctx= theCanvas1.getContext("2d");
        if(ctx){
            ctx.fillStyle= "blue";
            ctx.strokeStyle= "black";
            ctx.lineWidth= 5;

            ctx.fillRect(0,0,50,100);
            ctx.strokeRect(0,0,50,100);

        }
    }

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas2= document.getElementById("Canvas2");
    if(theCanvas2 && theCanvas2.getContext){
        var ctx= theCanvas2.getContext("2d");
        if(ctx){
            var degrees= 360;
            var radians= (Math.PI/180)*degrees;
            ctx.fillStyle= "rgba(255,0,0,.5)"
            ctx.strokeStyle= "black";

            ctx.beginPath();
            ctx.arc(50,50,20,0,radians);
            ctx.fill();
            ctx.arc(50,50,30,0,radians);
            ctx.stroke();
        }
    }



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

var theCanvas3= document.getElementById("Canvas3");
    if(theCanvas3 && theCanvas3.getContext){
        var ctx= theCanvas3.getContext("2d");
        if(ctx){
            ctx.strokeStyle= "blue";
            ctx.fillStyle= "red";
            ctx.lineWidth= 5;

            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(125,30);
            ctx.lineTo(155,100);
            ctx.lineTo(225,100);
            ctx.lineTo(175,150);
            ctx.lineTo(195,220);
            ctx.lineTo(130,180);
            ctx.lineTo(50,220);
            ctx.lineTo(90,150);
            ctx.lineTo(30,100);
            ctx.closePath();

            ctx.fill();
            ctx.stroke();

        }
    }
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    var theCanvas4= document.getElementById("Canvas4");
    if(theCanvas4 && theCanvas4.getContext){
        var ctx= theCanvas4.getContext("2d");
        if(ctx){
            ctx.strokeStyle= "blue";
            ctx.fillStyle= "cyan";
            ctx.lineWidth= 5;

            ctx.beginPath();
            moveTo(100,100);

            //bezierCurveTo(cx,cy,cx2,cy2,endX,endY)

            ctx.bezierCurveTo(100,200,190,50,300,200);
            ctx.bezierCurveTo(320,220,280,220,280,200);
            ctx.bezierCurveTo(280,220,260,220,260,200);
            ctx.bezierCurveTo(260,220,240,220,240,200);
            ctx.bezierCurveTo(240,220,220,220,220,200);
            ctx.bezierCurveTo(220,220,200,220,200,200);
            ctx.bezierCurveTo(200,220,180,220,180,200);
            ctx.bezierCurveTo(180,220,160,220,160,200);
            ctx.bezierCurveTo(160,220,140,220,140,200);
            ctx.bezierCurveTo(140,220,120,220,120,200);
            ctx.bezierCurveTo(120,220,80,220,100,200);
            ctx.stroke();
            ctx.fill();




        }
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

    var theCanvas5= document.getElementById("Canvas5");
    if(theCanvas5 && theCanvas5.getContext){
        var ctx= theCanvas5.getContext('2d');
        if(ctx){

            var theString= "Diamonds are forever";

            ctx.font= '30pt Helvetica';
            ctx.fillStyle= "darkgray";
            ctx.strokeStyle= "black";

            ctx.fillText(theString,150,100);
            ctx.strokeText(theString,145,100);
        }
    }


/*******************************************
PART 6

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
    var theCanvas6= document.getElementById('Canvas6');
    if(theCanvas6 && theCanvas6.getContext){
        var ctx= theCanvas6.getContext('2d');
        if(ctx){

            ctx.fillStyle= "yellow";
            ctx.strokeStyle= "black";
            ctx.lineWidth= 2;

            var degrees= 360;
            var radians= (Math.PI/180)*degrees;
            ctx.beginPath();
            ctx.arc(177,150,100,0,radians);
            ctx.stroke();
            ctx.fill();

            ctx.fillStyle= "black";
            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(125,30);
            ctx.lineTo(155,100);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(200,100);
            ctx.lineTo(225,30);
            ctx.lineTo(255,100);
            ctx.fill();
            ctx.closePath();

            var degrees2= 180;
            var radians2= (Math.PI/180)*degrees2;
            ctx.fillStyle= "red"
            ctx.strokeStyle= "black";


            ctx.beginPath();
            ctx.arc(200,200,30,0,radians2);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            var degrees3= 360;
            var radians3= (Math.PI/180)*degrees3;
            ctx.fillStyle= 'white';
            ctx.beginPath();
            ctx.arc(147,130,15,0,radians3);
            ctx.closePath();
            ctx.arc(247,130,15,0,radians3);
            ctx.stroke();
            ctx.fill();

            var theString= "Are you looking at me?";

            ctx.font= '20pt Helvetica';
            ctx.fillStyle= "darkgray";

            ctx.fillText(theString,280,100);





        }
    }

}
