var ship;
function init() {

    var canvas = document.getElementById("easel");
    var stage= new createjs.Stage(canvas);

    var centerX= canvas.width/2;
    var centerY= canvas.width/2;

    //Create a sprite sheet variable
    var ss= new createjs.SpriteSheet({

        //animation attributes
        animations:{
            //written sort of like JSON
            //sequence names
            fly:[0,6],
            explode:[7,11,"fly"]
        },

        //image attributes is the location of the sprite sheet
        images: ["images/Ship-Blink.png"],

        //frame attributes - parameters for each individual frame
        frames:{
            regX:55,
            regY:40,
            height:80,
            width:110

        }

    });

    //call our sprite sheet

    ship= new createjs.BitmapAnimation(ss);

    //center the ship
    ship.x= centerX;
    ship.y= centerY;

    ship.gotoAndPlay("fly");

    //add Ship to stage
    stage.addChild(ship);

    //update the stage
    //we need a ticker

    //set our FPS
    createjs.Ticker.setFPS(15);

    createjs.Ticker.addListener(function(){

        stage.update();

    });


} //end of init

function blowUp(){

    ship.gotoAndPlay("explode");


}
