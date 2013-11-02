var context;
var canvasWidth;
var canvasHeight;
var jumpHeightLevel=300;//window.innerHeight/2;
var x = 0;
var directionX = 1;
var directionY = 2;
var speed=1;
var ballX=10;
var ballY=jumpHeightLevel;
var radious=20;

$(function(){
	
   context= ballSplitCanvas.getContext('2d');
   resizeCanvas();
});
 drawBall=function (ballX,ballY,radious)
 {
	//alert();
   context.beginPath();
   context.fillStyle="#0000ff";
   // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
   context.arc(ballX,ballY,radious,0,Math.PI*2,true); context.closePath();
   context.fill();
 }
 resizeCanvas=function () {
	canvasWidth=window.innerWidth-(window.innerWidth/15);
	canvasHeight=window.innerHeight-(window.innerHeight/5.5);
    ballSplitCanvas.width = canvasWidth;
    ballSplitCanvas.height = canvasHeight;
    /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
    */
    drawStuff(); 
}
drawStuff=function(){
	//alert('o');
	moveBall(ballX,ballY,radious);
}

moveBall=function(curX,curY,curRadious) {
  context.clearRect(0, 0, ballSplitCanvas.width, ballSplitCanvas.height);
  curX=moveX(curX); // Instead of writing out all the code about the ball is draw(), we simply call three functions. How do we know the names of these functions? We made them up!
  curY=moveY(curY);//directionY
  //alert(curY);
  bounceX(curX,curRadious,canvasWidth);
  bounceY(curY,curRadious,canvasHeight,jumpHeightLevel);
  display(curX,curY,curRadious);
	//moveBall(ballX,ballY,radious);
  setTimeout("moveBall("+curX+","+curY+","+curRadious+");", speed);
  
}

// A function to move the ball
moveX=function(x1) { 
  // Change the x location by speed
  x1 = x1 + directionX;
  return x1;
}
moveY=function(y1) { 
  // Change the x location by speed
  y1 = y1 + directionY;
  return y1;
}
// A function to bounce the ball
bounceX=function(curX,curRadious,canvasWidth) {
  // If weâ€™ve reached an edge, reverse speed
  //alert(curX+","+curRadious+","+canvasHeight);
  if ((curX+(curRadious/2) > canvasWidth) || (curX-(curRadious/2) < 0)) {
    directionX = directionX * - 1;
  }
}
bounceY=function(curY,curRadious,canvasHeight,jumpHeightLevel) {
  // If weâ€™ve reached an edge, reverse speed
  //alert(curY+","+curRadious+","+canvasHeight+","+jumpHeightLevel);
  //if ((curY+(curRadious/2) > canvasHeight) || (curY-(curRadious/2) < jumpHeightLevel)) {
  if ((curY > canvasHeight) || (curY < jumpHeightLevel)) {
    directionY = directionY * - 1;
  }
}
// A function to display the ball
display=function(curX,curY,curRadious) {
	//alert(curX+","+curY+","+curRadious+","+directionY);
   context.beginPath();
   context.fillStyle="#0000ff";
   // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
   context.arc(curX,curY,curRadious,0,Math.PI*2,true);
   context.closePath();
   context.fill();
}
