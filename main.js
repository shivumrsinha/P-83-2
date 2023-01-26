var mouseEvent = "empty";
var color = "pink";
var width = 5;
var radius = 20;
var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var lastPostionOfX, lastPositionOfY;
var touchEvent = "empty";

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    width = document.getElementById("Width").value;
    color = document.getElementById("Color").value;
    radius = document.getElementById("Radius").value;
    console.log(width);
    console.log(color);
    console.log(radius);
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentPositionOfX = e.clientX - canvas.offsetLeft;
    currentPositionOfY = e.clientY - canvas.offsetTop;
    if (mouseEvent = "mousedown") {
        console.log("current position of x and y coordinates = ");
        console.log(" x  = " + currentPositionOfX, " y  = " + currentPositionOfY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentPositionOfX, currentPositionOfY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    width = document.getElementById("Width").value;
    color = document.getElementById("Color").value;
    radius = document.getElementById("Radius").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentPositionOfX, currentPositionOfY, radius, 0, 2 * Math.PI);
    ctx.stroke();

}




