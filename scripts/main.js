var background = document.getElementById("layer0"); //canvas for background draws
var canvas = document.getElementById("layer1"); //main canvas

//use these ctx for draw calls
var ctx0 = background.getContext("2d"); //background context
var ctx1 = canvas.getContext("2d"); //main canvas

var fps = 60; //frame rate at which the game updates
var interval = 1/fps; //interval time (see game loop)
var oldTime, newTime, deltaTime = 0; //var for storing frame time difference

//Note: width and height below do not change canvas size
var width = 1024; //width of game level
var height = 704; //height of game level
var tileSize = 32; //size of tiles in level

//Draw tile grid -- TEMPORARY
ctx0.fillStyle = "grey";
ctx0.fillRect(0,0,width,height);
ctx0.fillStyle = "black";
for(var i = 0; i < width/tileSize; i++) {
    for(var j = 0; j < height/tileSize; j++) {
        ctx0.rect(i*tileSize,j*tileSize,tileSize,tileSize);
    }
}
ctx0.stroke();

//initialize input array of bools -- use input[keycode] to see if key pressed
var input = new Array(91);
for (var i = 0; i < input.length; i++) {
    input[i] = false;
}

//event listeners for input
document.addEventListener('keydown',doKeyDown,false);
document.addEventListener('keyup',doKeyRelease,false);

/*
input function called everytime key is pushed down
*/
function doKeyDown(e) {
    var key = e.keyCode;
    input[key] = true;
}

/*
input function called everytime key is released
*/
function doKeyRelease(e) {
    var key = e.keyCode;
    input[key] = false;
}



/*
control mapping
  -set values equal to the keycode of the desired key
  -pass as parameter when creating player
*/
var defaultcontrols = {  //player controls are set to this if no controls passed in
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

var p1controls = {
    left: 37,   //left arrow
    right: 39,  //right arrow
    up: 38,     //up arrow
    down: 40,   //down arrow
    jump: 38,   //up arrow
    attack: 32  //spacebar
}

var p2controls = {
    left: 65,   //a
    right: 68,  //d
    up: 87,     //w
    down: 83,   //s
    jump: 87,   //w
    attack: null
}

/*
Main loop for the game
	-runs the update function based on the interval set above (1/fps)
*/
function GameLoop() {
    newTime = performance.now(); //time at start of new frame
    //calculates the time in seconds between last frame and new one (should be small, capped at 1 second)
    deltaTime += Math.min(1, (newTime - oldTime)/1000);
    oldTime = newTime;

    /*
	if more time has passed than interval, run updates until less than interval
    keeps updates consistent across varying framerates
    */
    while(deltaTime >= interval) {
        deltaTime -= interval;
        //scene.Update();
		menu.Update();
    }
    //scene.Draw();
	menu.Draw();

    requestAnimationFrame(GameLoop); //loops while allowing rest of browser to run
}

menu = new Menu();

//scene = new Scene();
//scene.Start();

oldTime = performance.now(); //start time of scene (needed for delatime)
requestAnimationFrame(GameLoop); //starts game loop