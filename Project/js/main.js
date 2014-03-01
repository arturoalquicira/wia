$(document).ready(function() {
    $('#coin-slider').coinslider({
        width: 800,
        height: 600,
        navigation: true
    });
});

google.load("visualization","1",{packages:["corechart"]});

google.setOnLoadCallback(drawChart);

function drawChart(){
    var data= google.visualization.arrayToDataTable([

        ["Band Name", "Downloads"],
        ["Big Big Love", 1000],
        ["Little Jesus", 4600],
        ["She's A Tease", 3420],
        ["Rey Pila", 9830],
        ["Teen Flirt", 4400]

    ]);


    var options= {

        title: "Downloads on iTunes",
        width: 800,
        height: 500

    };

    var chart= new google.visualization.BarChart(document.getElementById("chart"));

    chart.draw(data, options);

};


$(function(){

    $("#info").hide();
    $("#show_info").click(function(){

        $("#info").toggle("5000", function(){
        });

    });



});

window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle="rgb(218,33,40)";
            ctx.beginPath();
            ctx.moveTo(298,214);
            ctx.lineTo(305,190);
            ctx.lineTo(299,184);
            ctx.lineTo(292,190);
            ctx.lineTo(298,214);
            ctx.fill();


            var theString= "At The Venue - HQ";

            //draw a string using default settings
            ctx.font= "25pt Helvetica";

            ctx.fillText(theString,200,160);



        }
    }

    $(function(){

        $(theCanvas).hide();
        $("#contact").hover(function(){

            $(theCanvas).toggle("5000", function(){
            });

        });



    });

}