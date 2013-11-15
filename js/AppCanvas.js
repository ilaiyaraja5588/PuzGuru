var context;
var canvasWidth;
var canvasHeight;
var jumpHeightLevel=300;//window.innerHeight/2;
var x = 0;
var directionX = 1;
var directionY = 1;
var speed=1;
var ballX=100;
var ballY=jumpHeightLevel+20;
var radious=20;
var curRadious=20;
var playerSize=10;
var playerX;
var playerY;

var ballsCount=1;
var balls=new Array();
//level1 ball-Big ball
//BallArray(ballX,ballY,ballRadious,ballJumpHeight,modified?,Ative?);
balls[0]= new Array(ballX,ballY,20,jumpHeightLevel,1,1);
//Level2 ball- 2 balls
balls[1]= new Array(0,0,0,0,0,0);
//Level3 ball - 4 balls
balls[2]= new Array(0,0,0,0,0,0);
balls[3] = new Array(0,0,0,0,0,0);
$(function(){
	
   context= ballSplitCanvas.getContext('2d');
   //alert(ballX+","+ballY);
   //alert('ballsX[0]='+balls[1][4]);
});
/*drawBall=function (ballX,ballY,radious)
{
	//alert();
   context.beginPath();
   context.fillStyle="#0000ff";
   // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
   context.arc(ballX,ballY,radious,0,Math.PI*2,true); context.closePath();
   context.fill();
}*/
resizeCanvas_ballSplit=function () {
	canvasWidth=window.innerWidth-(window.innerWidth/15);
	canvasHeight=window.innerHeight-(window.innerHeight/4.5);
    ballSplitCanvas.width = canvasWidth;
    ballSplitCanvas.height = canvasHeight;
	
	ballX=100;
	ballY=jumpHeightLevel+20;
	playerX=canvasWidth/2;
	playerY=canvasHeight;
    /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
    */
   // playAnim_ballSplit();
   moveBall();
	//drawPlayer_ballSplit();
}
playAnim_ballSplit=function(){
	//alert('isPlaying1='+isPlaying);
   moveBall();
	
  //context.clearRect(0, 0, ballSplitCanvas.width, ballSplitCanvas.height);
  /*if(isPlaying)
	displayBall();//moveBall(ballX,ballY,curRadious);
	*/
  /*if(isPlaying)
	drawPlayer_ballSplit();*/
	//alert();
  if(isPlaying)
	setTimeout("playAnim_ballSplit()", speed);
}

moveBall=function() {
  //alert(isPlaying+'l');
  //alert("Before:"+ballX+","+ballY+","+radious);
  ballX=moveX(ballX); // Instead of writing out all the code about the ball is draw(), we simply call three functions. How do we know the names of these functions? We made them up!
  
  //alert("After:"+ballX+","+ballY+","+radious);
  ballY=moveY(ballY);//directionY
  //alert(ballY);
  bounceX();
  bounceY();
  if(isPlaying) context.clearRect(0, 0, ballSplitCanvas.width, ballSplitCanvas.height);
  if(isPlaying)
  {
    displayBall();
	drawPlayer_ballSplit();
  }
  if(isPlaying)
	setTimeout("moveBall("+ballX+","+ballY+","+radious+")", speed);
  if(collisionDetection(playerX,playerY,playerSize,ballX,ballY,curRadious))
	isPlaying=0;//$("#check").html('1');
  else
    isPlaying=1;//$("#check").html('0');
	
	//moveBall(ballX,ballY,radious);
  //playAnim_ballSplit(ballX,ballY,curRadious);
}

// A function to move the ball
moveX=function(x1) { 
  // Change the x location by speed
  //if(directionX!=1) alert(directionX);
  x1 = x1 + (directionX*1);
  return x1;
}
moveY=function(y1) { 
  // Change the x location by speed
  //alert("directionX="+directionX);
  y1 = y1 + (directionY*1);
  return y1;
}
// A function to bounce the ball
bounceX=function() {
  // If weâ€™ve reached an edge, reverse speed
<<<<<<< HEAD
  //alert(ballX+","+curRadious+","+canvasWidth+","+directionX);
  if ((ballX+(curRadious/2) > canvasWidth) || (ballX-(curRadious/2) < 0)) {
=======
  //alert(curX+","+curRadious+","+canvasHeight);
  if ((curX+(curRadious/2) > canvasWidth) || (curX-(curRadious/2) < 0)) {
>>>>>>> d7fb4277eebb407db23e2429341a63fbbb66ba2a
    directionX = directionX * - 1;
  }
}
bounceY=function() {
  // If weâ€™ve reached an edge, reverse speed
  //alert(ballY+","+curRadious+","+canvasHeight+","+jumpHeightLevel);
  //if ((ballY+(curRadious/2) > canvasHeight) || (ballY-(curRadious/2) < jumpHeightLevel)) {
  if ((ballY > canvasHeight) || (ballY < jumpHeightLevel)) {
    directionY = directionY * - 1;
  }
}
// A function to display the ball
displayBall=function() {
	//alert(ballX+","+ballY+","+curRadious+","+directionX);
   context.beginPath();
   context.fillStyle="#0000ff";
   // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
   context.arc(ballX,ballY,curRadious,0,Math.PI*2,true);
   context.closePath();
   context.fill();
}
//////////////////////////////////////////////////
//Player
/////////////////////////////////////////////////

/*initPlayer_ballSplit=function(){
	context.moveTo((canvasWidth/2)-10,canvasHeight);
	context.lineTo((canvasWidth/2)+10,canvasHeight);
	context.lineTo((canvasWidth/2),canvasHeight-10);
	context.lineTo((canvasWidth/2)-10,canvasHeight);

	context.stroke();
	movePlayer_ballSplit();
}
*/
drawPlayer_ballSplit=function(){
	context.moveTo(playerX-playerSize,playerY);
	context.lineTo(playerX+playerSize,playerY);
	context.lineTo(playerX,playerY-playerSize);
	context.lineTo(playerX-playerSize,playerY);
	context.stroke();
	//alert((playerX+","+playerY));
}

$(document).keydown(function(e){
    if (e.keyCode == 37) { 
       //alert( "left pressed" );
	   if(playerX>(14))
		playerX-=4;
	   //drawPlayer_ballSplit();
       return false;
    }
	if (e.keyCode == 39) { 
       //alert( "right pressed" );
	   if(playerX<(canvasWidth-14))
		playerX+=4;
	   //drawPlayer_ballSplit();
       return false;
    }
});
/////////////////////////////////////////////////////
//collisiondetection();
/////////////////////////////////////////////////////
collisionDetection=function(playerX,playerY,playerSize,ballX,ballY,ballRadious){
	var collied=0;
	//playerX,playerY,playerSize,ballX,ballY,ballRadious
	//alert("playerXm="+ballX);
	var collisionPart=0;
	var xCollied=0;
	var yCollied=0;
					
			if(playerX<ballX)
				if((playerX+playerSize)>=(ballX-(ballRadious/2)))
				{
					collisionPart=1;
					xCollied=1;
				}
			
			if(playerX>=ballX)
				if((playerX-playerSize)<=(ballX+(ballRadious/2)))
				{
					collisionPart=2;
					xCollied=1;
				}
	if(playerY>=ballY)
		if((playerY-playerSize)<=(ballY+(ballRadious/2)))
		{
			collisionPart=3;
			yCollied=1;
		}
	
    //$("#check").html("playerX="+parseInt(playerX)+","+"playerY="+parseInt(playerY)+"   ,,,,   ballX="+ballX+"ballY="+ballY+","+ballRadious+","+xCollied+","+yCollied);
	//alert();
	//if(collisionPart!=0) {alert(collisionPart);}
	//if(collied==1) {isPlaying=0;alert(collied);}
	if(yCollied==1 && xCollied==1) {collied=1;}
	return collied;
}
/////////////////////////////////////////////////////
//Click event for firring and move Player
/////////////////////////////////////////////////////
$("#ballSplitCanvas").on("click",function(){
	alert("pl");
});
isCollision=function(c1, c2) {
  var dx = c1.x - c2.x;
  var dy = c1.y - c2.y;
  var dist = c1.radius + c2.radius;
 
  return (dx * dx + dy * dy <= dist * dist)
}
