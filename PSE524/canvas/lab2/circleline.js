//base skeleton of canvas
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d"); // takes canvas and lets us draw, can be 3d

//drawing commands
ctx.beginPath();
ctx.moveTo(400,100);
ctx.lineTo(40,270);
ctx.stroke();

//draw circle
ctx.beginPath();
ctx.arc(300,350,60,0,2*Math.PI);
ctx.stroke();