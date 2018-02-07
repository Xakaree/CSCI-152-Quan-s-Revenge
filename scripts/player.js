function Player(x, y,w,h, controls, sprite) {
    this.entity = new Entity(x,y,w,h,"player"); //attach entity to this object for physics/collision
    this.speed = 350.0; //how fast player moves left/right
    this.accel = 5.0; //UNUSED FOR NOW
    this.grav = 3000.0; //how fast player accelerates downward
    this.controls = controls || defaultcontrols;

	this.sprite = sprite;

    this.facing = 1; //direction of player, -1=left 1=right
    this.attacking = false;
    this.jumping = false;
	
	//Animation Variables
	var srcX=0; //To track frame
	var srcY=0;	//To track animation
	var lastInput = 0; // No Input
	var frameLimit = 4; //To keep row looping
	var counter=0;
	var aniSpd = 6; //Speed Cap on animation

    //handles all responses to input
    this.input = function() {
        if(input[this.controls.left]) {
            this.entity.vx = -this.speed;
            this.facing = -1;
			if(lastInput != 2 && !this.jumping){
				srcX=0,srcY=7;
				lastInput = 2;
				frameLimit = 11;
			}
			else if(lastInput != 2 && this.jumping){
				srcY=1;
			}
        } 
        else if(input[this.controls.right]) {
            this.entity.vx = this.speed;
            this.facing = 1;
			if(lastInput != 1 && !this.jumping){
				srcX=0,srcY=6;
				lastInput = 1;
				frameLimit = 11;
			}
			else if(lastInput != 1 && this.jumping){
				srcY=0;
			}
        } 
        else {
            this.entity.vx = 0.0;
			if(lastInput != 0 && !this.jumping){
				if(this.facing == 1){ srcX=0,srcY=0;}
				else{ srcX=0,srcY=1;}
				lastInput = 0;
				frameLimit = 4;
			}
        } 
        if(input[this.controls.jump] && !this.jumping) {
            this.entity.vy = -1100.0;
            this.jumping = true;
			if(lastInput != 3){
				lastInput = 3;
				if(this.facing == 1){srcX=0,srcY=2;}
				else{srcX=0,srcY=3;}
			}
        }
    }

    /*(REQUIRED)
        Update function loops after every interval
        -Use this function for all positional updates anything that needs constant checking/updating
    */
    this.Update = function() {
        
        this.input(); //respond to input
		counter++;
		
		if(counter == aniSpd){ 
			if(this.jumping){if (srcX != 1){srcX++;}}
			else{ srcX = (srcX+1)%frameLimit;}
			counter = 0;
		}

        /*
            NOTE: when adjusting positions over time
            values have to be multiplied by the interval for smoothing and to
            keep them framerate independent (See below)
        */

        //apply velocity changes        
        this.entity.vx += this.entity.ax * interval;
        this.entity.vy += (this.entity.ay * interval) + (this.grav * interval);
        //apply positional changes based on velocity (this is capped at 20 pixels per frame right now)
        this.entity.x += Math.min(20, this.entity.vx * interval);
        this.entity.y += Math.min(20, this.entity.vy * interval);
    }

    //runs whenever collision detected involving this object
    //Use collider.entity.tag to determine colliders object type (player, solid object, etc)
    this.onCollision = function(collider) {
        if(collider.entity.tag == "player") {

        }
        if(collider.entity.tag == "solid") {
            switch(this.entity.solidCollision(collider)) {
                case 0: //bottom collision
                    this.jumping = false;
                    break;
            }
        }
        
    }

    //All draw calls must be done in this function
    this.Draw = function() {
       // ctx1.fillStyle = color;
       // ctx1.fillRect(this.entity.x,this.entity.y,this.entity.width,this.entity.height);
	   ctx1.drawImage(this.sprite,srcX*64,srcY*64,64,64,this.entity.x,this.entity.y,tileSize,tileSize)
    }
}