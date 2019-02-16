//gets the canvas so we can modidy it
var canvas = document.getElementById("myCanvas");
//how to actualy do graphics with the canvas
var ctx = canvas.getContext("2d");


//makes a red rectangle
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();

//makes a green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//makes a hollow blue rect
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();