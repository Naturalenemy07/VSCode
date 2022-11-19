//base skeleton of canvas
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d"); // takes canvas and lets us draw, can be 3d

//drawing commands
ctx.rect(20,20,200,100); //two coordinate pairs (x1,y1,width, height)
ctx.stroke(); //draws the rectangle

//fill in new rectangle
ctx.fillStyle = "blue";
ctx.fillRect(300,300,100,160);

//fill in using rgb values
ctx.fillStyle = "rgba(10,150,150,1)";
ctx.fillRect(10,400,100,100);