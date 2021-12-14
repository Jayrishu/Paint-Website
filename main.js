var mouseEvent = "empty";
var lastX, lastY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colorofline = "black";
widthofline = 2;
canvas.addEventListener("mousedown", downmouse);
function downmouse(e){
    colorofline = document.getElementById("color").value;
    widthofline = document.getElementById("width").value;
    mouseEvent = "mousedown";

}
canvas.addEventListener("mousemove", movemouse);
function movemouse(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colorofline;
        ctx.lineWidth = widthofline;
        ctx.moveTo (lastX, lastY);
        console.log("lastX =" + lastX + "lastY =" + lastY);
        ctx.lineTo (currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;

}
canvas.addEventListener("mouseup", upmouse);
function upmouse(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave", leavemouse);
function leavemouse(e){
    mouseEvent="mouseleave"
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}