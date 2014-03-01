
window.onload = function(){

    var theCanvas = document.getElementById('logo');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            ctx.fillStyle="rgb(255,229,52)";
            ctx.strokeStyle="rgb(255,255,255)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(197,148);
            ctx.lineTo(180,152);
            ctx.lineTo(167,165);
            ctx.lineTo(150,160);
            ctx.lineTo(132,165);
            ctx.lineTo(120,152);
            ctx.lineTo(102,148);
            ctx.lineTo(98,130);
            ctx.lineTo(85,118);
            ctx.lineTo(89,100);
            ctx.lineTo(85,83);
            ctx.lineTo(97,70);
            ctx.lineTo(102,53);
            ctx.lineTo(119,48);
            ctx.lineTo(132,36);
            ctx.lineTo(149,40);
            ctx.lineTo(167,36);
            ctx.lineTo(179,48);
            ctx.lineTo(197,53);
            ctx.lineTo(201,70);
            ctx.lineTo(214,83);
            ctx.lineTo(210,100);
            ctx.lineTo(214,118);
            ctx.lineTo(202,130);
            ctx.lineTo(197,148);
            ctx.fill();
            ctx.stroke();



            ctx.strokeStyle="rgb(255,255,255)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(195,127);
            ctx.lineTo(149,153);
            ctx.lineTo(104,127);
            ctx.lineTo(104,74);
            ctx.lineTo(150,47);
            ctx.lineTo(195,74);
            ctx.lineTo(195,127);
            ctx.stroke();

            ctx.strokeStyle="rgb(255,255,255)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(185,127);
            ctx.lineTo(139,153);
            ctx.lineTo(94,127);
            ctx.lineTo(94,74);
            ctx.lineTo(140,47);
            ctx.lineTo(185,74);
            ctx.lineTo(185,127);
            ctx.stroke();

            ctx.strokeStyle="rgb(255,255,255)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(205,127);
            ctx.lineTo(159,153);
            ctx.lineTo(114,127);
            ctx.lineTo(114,74);
            ctx.lineTo(160,47);
            ctx.lineTo(205,74);
            ctx.lineTo(205,127);
            ctx.stroke();

            ctx.fillStyle="rgb(255,255,255)";
            ctx.lineStyle="rgb(255,229,52)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(149,55);
            ctx.bezierCurveTo(149,55,155,55,155,56);
            ctx.bezierCurveTo(155,56,154,85,156,89);
            ctx.bezierCurveTo(158,93,164,100,164,101);
            ctx.bezierCurveTo(165,102,167,105,165,124);
            ctx.bezierCurveTo(163,143,164,141,161,144);
            ctx.bezierCurveTo(157,146,136,147,135,141);
            ctx.bezierCurveTo(133,135,133,117,133,113);
            ctx.bezierCurveTo(133,110,130,102,139,95);
            ctx.bezierCurveTo(147,87,143,65,144,56);
            ctx.bezierCurveTo(144,56,146,55,149,55);
            ctx.fill();
            ctx.stroke();

            var logoName = "ALCOHOL FACTS";

            ctx.fillStyle = '#34626F';
            ctx.font = "25pt 'Helvetica', sans-serif";
            ctx.fillText(logoName, 10,220);


        }
    }

    //Labels for graphic 1

    var theCanvas2 = document.getElementById('labels1');
    if (theCanvas2 && theCanvas2.getContext) {
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2) {


            ctx2.fillStyle="rgba(255,229,52,.5)";
            ctx2.strokeStyle="rgb(255,229,52)";
            ctx2.lineWidth=1;
            ctx2.fillRect(44,18,30,30);
            ctx2.strokeRect(44,18,30,30);
            ctx2.fill();
            ctx2.stroke();

            ctx2.fillStyle="rgba(205,93,80,.5)";
            ctx2.strokeStyle="rgb(205,93,80)";
            ctx2.lineWidth=1;
            ctx2.fillRect(44,60,30,30);
            ctx2.strokeRect(44,60,30,30);
            ctx2.fill();
            ctx2.stroke();

            ctx2.fillStyle="rgba(47,52,64,.5)";
            ctx2.strokeStyle="rgb(47,52,64)";
            ctx2.lineWidth=1;
            ctx2.fillRect(44,101,30,30);
            ctx2.strokeRect(44,101,30,30);
            ctx2.fill();
            ctx2.stroke();


            var first = "College Grads";

            ctx2.fillStyle = 'rgb(255,229,52)';
            ctx2.font = "10pt 'Helvetica', sans-serif";
            ctx2.fillText(first, 84,38);

            var second = "High School or Less";

            ctx2.fillStyle = 'rgb(205,93,80)';
            ctx2.font = "10pt 'Helvetica', sans-serif";
            ctx2.fillText(second, 84,78);

            var third = "Some College";

            ctx2.fillStyle = 'rgb(47,52,64)';
            ctx2.font = "10pt 'Helvetica', sans-serif";
            ctx2.fillText(third, 84,121);

            var percentage = "All values are in %";

            ctx2.fillStyle = 'rgb(47,52,64)';
            ctx2.font = "10pt 'Helvetica', sans-serif";
            ctx2.fillText(percentage, 45,170);


        }
    }

};

$(function() {
    var canvas= document.getElementById("info1");
    var ctx =canvas.getContext("2d");

    //create the line graph data
    var lineChartData= {
        labels:["Beer", "Wine", "Liquor", "NA"],
        datasets:[
            {
                //college info
                fillColor: "rgba(44,62,80,.5)",
                strokeColor: "rgba(44,62,80,1)",
                pointColor: "rgba(44,62,80,1)",
                pointStrokeColor: "#fff",
                data: [29,42,21,8]
            },

            {
                //some college info
                fillColor: "rgba(255,229,52,.5)",
                strokeColor: "rgba(255,229,52,1)",
                pointColor: "rgba(255,229,52,1)",
                pointStrokeColor: "#fff",
                data: [33,32,29,6]
            },

            {
                //high school info
                fillColor: "rgba(205,93,80,.5)",
                strokeColor: "rgba(205,93,80,1)",
                pointColor: "rgba(205,93,80,1)",
                pointStrokeColor: "#fff",
                data: [44,30,21,5]
            }
        ]



    };

    var options= {
        bezierCurve: true,
        onAnimationComplete: done

    };



//
    var myLine= new Chart(ctx).Line(lineChartData, options);

    function done(){

        //get data url put it in as an image

        var dataURL= canvas.toDataURL();

        document.getElementById("canvasImg").src=dataURL;
        $("#info1").hide();

    }

});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Alcohol Type', 'Male', 'Female'],
        ['Beer',  48,      22],
        ['Wine',  20,      51],
        ['Liquor',  26,       21],
        ['NA',  6,      6]
    ]);

    var options = {
        title: 'Alcohol Use By Gender',
        hAxis: {title: 'Alcohol Type', titleTextStyle: {color: 'red'}},
        vAxis: {title: '%', titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}


$(function(){

    $(".description1").hide();
    $(".show-me1").hover(function(){

        $(".description1").fadeIn("5000", function(){
        });

    });

    $(".description2").hide();
    $(".show-me2").hover(function(){

        $(".description2").fadeIn("5000", function(){
        });

    });



});





