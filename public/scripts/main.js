var background = document.getElementById("layer0"); //canvas for background draws
var canvas = document.getElementById("layer1"); //main canvas
var QS1 = document.getElementById("QS1"); // Version 1 of Quan
var QS2 = document.getElementById("QS2"); // Version 2 of Quan
var LC1 = document.getElementById("LC1"); // Version 1 of Luchador Castillo
var LC2 = document.getElementById("LC2"); // Version 2 of Luchador Castillo

//use these ctx for draw calls
var ctx0 = background.getContext("2d"); //background context
var ctx1 = canvas.getContext("2d"); //main canvas

var dbrlR = document.getElementById("dbrlR");
var dbrlL = document.getElementById("dbrlL");

var fps = 60; //frame rate at which the game updates
var interval = 1/fps; //interval time (see game loop)
var oldTime, newTime, deltaTime = 0; //var for storing frame time difference

//Note: width and height below do not change canvas size
var width = canvas.width; //width of game level
var height = canvas.height; //height of game level
var tileSize = 32; //size of tiles in level
var tileScale = tileSize/32;

var scale = 1.0;

var sessionCode = "";

/*control mapping
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
    attack: 90
}

var p3controls = {  //player controls are set to this if no controls passed in
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

var p4controls = {  //player controls are set to this if no controls passed in
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

/*
Main loop for the game
	-runs the update function based on the interval set above (1/fps)
*/
function GameLoop() {
    requestAnimationFrame(GameLoop);
    newTime = performance.now(); //time at start of new frame
    //calculates the time in seconds between last frame and new one (should be small, capped at 1 second)
    deltaTime += (newTime - oldTime)/1000;
    oldTime = newTime;

    /*
	if more time has passed than interval, run updates until less than interval
    keeps updates consistent across varying framerates
    */
    while(deltaTime >= interval) {

        deltaTime -= interval;
        //scene.Update();
        input.Update();
        startScreen.Update();
        startScreen.Draw();

        if(deltaTime > 5) {
            deltaTime = 0;
        }
    }
}



var input = new InputHandler();
if(typeof io != 'undefined') {
    input.initSocket();   
}
var startScreen = new startScreen();

var scene = new Scene();
//scene.Start();
setSoundtrackVolume(100, spaceList);
setSoundtrackVolume(100, cityList);
setSoundtrackVolume(100, battleList);
setSoundtrackVolume(100, menuList);
playSoundtrack(0, menuList);

var oldTime = performance.now(); //start time of scene (needed for delatime)
//setTimeout(GameLoop, 0);
//requestAnimationFrame(Draw); //starts game loop
requestAnimationFrame(GameLoop);
