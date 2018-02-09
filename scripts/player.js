function Player(x, y,w,h, controls, color) {
    this.entity = new Entity(x,y,w,h,"player"); //attach entity to this object for physics/collision
    this.speed = 350.0; //how fast player moves left/right
    this.accel = 2.0; //UNUSED FOR NOW
    this.decel = 2.0;
    this.grav = 3000.0; //how fast player accelerates downward
    this.controls = controls || defaultcontrols;

    this.facing = 1; //direction of player, -1=left 1=right
    this.attacking = false;
    this.jumping = false;

    this.input = {
        left: {keyPress:false,keyDown: false},
        right: {keyPress:false,keyDown: false},
        down: {keyPress:false,keyDown: false},
        up: {keyPress:false,keyDown: false},
        jump: {keyPress:false,keyDown: false},
        attack: {keyPress:false,keyDown: false},
    }

    //handles all responses to input
    this.movement = function() {
        if(this.input.left.keyDown) {
            if(!this.jumping) {
                this.entity.vx = -this.speed;
            }
            else {
                this.entity.vx = Math.min(-this.speed, this.entity.vx - this.accel);
            }
            this.facing = -1;
        } 
        if(this.input.right.keyDown) {
            if(!this.jumping) {
                this.entity.vx = this.speed;
            }
            else {
                this.entity.vx = Math.max(this.speed, this.entity.vx + this.accel);
            }
            this.facing = 1;
        } 
        if(!this.input.right.keyDown && !this.input.left.keyDown) {
            //if no input while on the ground player stops immediately
            if(!this.jumping) {
                this.entity.vx = 0.0;
            }
            //if in the air player slows down over time
            else {
                if(this.entity.vx > 0) {
                    this.entity.vx = Math.max(0.0, this.entity.vx - this.decel);
                }
                else if(this.entity.vx < 0) {
                    this.entity.vx = Math.min(0.0, this.entity.vx + this.decel);
                }
            }
        } 
        if(this.input.jump.keyPress && !this.jumping) {
            this.entity.vy = -1100.0;
            this.jumping = true;
        }
    }

    /*(REQUIRED)
        Update function loops after every interval
        -Use this function for all positional updates anything that needs constant checking/updating
    */
    this.Update = function() {
        
        this.updateInput();
        this.movement(); //respond to input

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

    //All draw calls must be done in tbis function
    this.Draw = function() {
        ctx1.fillStyle = color;
        ctx1.fillRect(this.entity.x,this.entity.y,this.entity.width,this.entity.height);
    }
}

Player.prototype.updateInput = function() {
    if(this.input.left.keyPress) this.input.left.keyPress = false;
    if(!this.input.left.keyDown && input[this.controls.left])
        this.input.left.keyPress = true;
    this.input.left.keyDown = input[this.controls.left];
    
    if(this.input.right.keyPress) this.input.right.keyPress = false;
    if(!this.input.right.keyDown && input[this.controls.right])
        this.input.right.keyPress = true;
    this.input.right.keyDown = input[this.controls.right];

    if(this.input.up.keyPress) this.input.up.keyPress = false;
    if(!this.input.up.keyDown && input[this.controls.up])
        this.input.up.keyPress = true;
    this.input.up.keyDown = input[this.controls.up];

    if(this.input.down.keyPress) this.input.down.keyPress = false;
    if(!this.input.down.keyDown && input[this.controls.down])
        this.input.down.keyPress = true;
    this.input.down.keyDown = input[this.controls.down];

    if(this.input.jump.keyPress) this.input.jump.keyPress = false;
    if(!this.input.jump.keyDown && input[this.controls.jump])
        this.input.jump.keyPress = true;
    this.input.jump.keyDown = input[this.controls.jump];

    if(this.input.attack.keyPress) this.input.attack.keyPress = false;
    if(!this.input.attack.keyDown && input[this.controls.attack])
        this.input.attack.keyPress = true;
    this.input.attack.keyDown = input[this.controls.attack];
}