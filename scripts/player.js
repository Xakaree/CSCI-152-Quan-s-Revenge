function Player(x, y,w,h, controls, color) {
    this.entity = new Entity(x,y,w,h,"player"); //attach entity to this object for physics/collision
    this.speed = 350.0; //how fast player moves left/right
    this.accel = 5.0; //UNUSED FOR NOW
    this.grav = 3000.0; //how fast player accelerates downward
    this.controls = controls || defaultcontrols;

    this.facing = 1; //direction of player, -1=left 1=right
    this.attacking = false;
    this.jumping = false;

    //handles all responses to input
    this.input = function() {
        if(input[this.controls.left]) {
            this.entity.vx = -this.speed;
            this.facing = -1;
        } 
        else if(input[this.controls.right]) {
            this.entity.vx = this.speed;
            this.facing = 1;
        } 
        else {
            this.entity.vx = 0.0;
        } 
        if(input[this.controls.jump] && !this.jumping) {
            this.entity.vy = -1100.0;
            this.jumping = true;
        }
    }

    /*(REQUIRED)
        Update function loops after every interval
        -Use this function for all positional updates anything that needs constant checking/updating
    */
    this.Update = function() {
        
        this.input(); //respond to input

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