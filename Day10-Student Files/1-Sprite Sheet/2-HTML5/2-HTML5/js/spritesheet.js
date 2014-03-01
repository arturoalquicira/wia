var canvas = document.getElementById("canvas");

var ctx= canvas.getContext("2d");

//create a variable to track frame number

var count = 0;

//create 2 vars to track the x,y position inside of our sprite sheet

var x;
var y;

var xPos= 0;
var yPos= 0;


//load our image

var img = new Image();

img.src= "images/doggy.png";

//wait for it to load and then run a function

img.onload= draw;

function draw(){
    //call for a frame animation, RAF

    //creates a loop so, that anytime a frame is ready, it will draw itself
    requestAnimationFrame(draw);

    //clear canvas
    ctx.clearRect(0,0,213,201);

    //set up count, x, y variables
    //sprite sheet is 9 columns acrosss
    //total images- 150 images
    //width - 213px height - 201px

    x=(count%9)*213;

    y= Math.floor(count/9)*201;

    //draw the image based on the count

    ctx.drawImage(img,x,y,213,201,xPos++,yPos++,213,201);

    //increase the count ----EXCEPT can't over 150

    if(count==149){
        count=0;
    }else{
        count++;
    }

}

