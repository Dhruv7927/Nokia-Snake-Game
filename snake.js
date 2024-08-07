var cvs=document.getElementById("canvas");    //the called script from snake_game.html
var ctx=cvs.getContext("2d");  
var snakeW=10;  // snake width
var snakeH=10;  // snake height
var dir = "right";  // snake's default direction to move right at the starting

// function drawSnake() starts
function drawSnake(x,y){                     // x and y are defined in line 144
	ctx.fillStyle="white";                       // color of the snake
	ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)// first2 are position,last2 are dimensions
	ctx.fillStyle="black";                       // black is the color between the body of the snake 
	ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)//gives space between two squares
}
// function drawSnake() ends


//create snake
var len = 4;
snake= [];                        //array used
for(var i=len-1;i>=0;i--){
	snake.push({                 //push stores the data in the array
		x:i,                     //x=i
		y:0                      //y=1
		})	
	}
//creating snake is over here but to grow it is defined later in this page
	
	
//control direction
document.addEventListener("keydown",dirControl) //addEventListener tells to do what if anything happens or done
function dirControl(e){           //e or event is used to get command from keyboard
		if(e.keyCode==37&& dir!="right")/*37 is the keycode for  to get understand it to the computer and '&' is used to check that it should be done when both the statement will be true then only it can be performed*/
		{
		dir="left";							//dir is a variable defined in line 5
		}
			
		else if(e.keyCode==38&&dir!="down")
		{
		dir="up";	
		}
			
		else if(e.keyCode==39&&dir!="left")
		{
		dir="right";	
		}
			
		else if(e.keyCode==40&&dir!="up")
		{
		dir="down";	
		}
}
	
	
//creat food
var food={                 
	x:Math.round(Math.random()*(cvs.width/snakeW-1)+1), /*Math.round is used to get decimal on our need. Math.random is used to get food on random position 
			and it gives value from 0-1, to get this value more or say anywhere in the
			canvas we will multiply it by the quotient got by dividing sanke width
			by canvas width and to prevent going outside we will subtract by 1. Here
			+1 indicates that the food should come from 1-49 and same for the y-axis*/	
	y:Math.round(Math.random()*(cvs.height/snakeH-1)+1)
}
	
	
//draw food
function drawFood(x,y){
	ctx.fillStyle="red";
	ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
}
	
	
//draw function
function draw(){
	ctx.clearRect(0,0,cvs.width,cvs.height);//first 0 is for x-axis and second 0 is for y-axis. cvs.width and cvs.height tells it that where, how much and what to clear.
	for(var i=0;i<snake.length;i++)    //here snake's length is 4
	{
		var X  = snake[i].x;     //i=0. Here .x is defining: x ka i. x is 3   
		var Y  = snake[i].y;    //.y is 0. 
		drawSnake(X,Y)
	}
drawFood(food.x,food.y);


//snake head
var snakeX  = snake[0].x;         //location of head on x-axis
var snakeY  = snake[0].y;         //location of head on y-axis
if(snakeX<0||snakeY<0||snakeX>=cvs.width/snakeW||snakeY>=cvs.height/snakeH)//if any of this statement becomes true than the game will be over
{
	alert("Game Over");
}
	
if(dir=="right")
{
	snakeX++;  // this is done simultaneously for the movement of the snake and the length of the snake
}
		
else if(dir=="left")
{
	snakeX--;	
}
		
	else if(dir=="up")
	{
		snakeY--;
	}
else if(dir=="down")
	{
		snakeY++;
	}
	
if(snakeX==food.x && snakeY==food.y)
{
food={
	x:Math.round(Math.random()*(cvs.width/snakeW)+1),
	y:Math.round(Math.random()*(cvs.height/snakeH)+1)
	}

//new head	
var newHead  =  {  /*this whole statement defines the snake's new head by shifting the 
                   head of the snake in front which is defined in line 140*/
     x:snakeX,   
	 y:snakeY
				}			
}
	
else{
snake.pop();   // a chella function ne matlab ke chella array ne hataavi de che. 
var newHead  = 
		{
		x:snakeX,
		y:snakeY
		}
}
	
snake.unshift(newHead); //it joins in front whereas push joins at back.
} 
//end function draw()
	
setInterval(draw,150); /*here 150 means the speed of the snake. The less the number the 
                       more the speed of the snake.
					   here draw is written because we have to continue function draw()
					   conitnuousluy*/