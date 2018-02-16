function Player(x, y,w,h, controls, color) {
    this.drawObject = true;
    this.updateObject = true;

    this.entity = new Entity(x,y,w,h,"player"); //attach entity to this object for physics/collision
    this.speed = 350.0; //how fast player moves left/right
    this.accel = 2.0; //UNUSED FOR NOW
    this.decel = 2.0;
    this.controls = controls || defaultcontrols;

    this.facing = 1; //direction of player, -1=left 1=right
    this.attacking = false;
    this.jumping = false;

    this.item = null;
    this.dropCool = false; //items cant be picked up during dropcool
    this.dropcnt = 0; //drop cooldown counter
    this.dropTime = 5; //number of frames that drop cooldown lasts

    //handles cooldown between dropping item and being able to pickup another
    this.updateDropCnt = function() {
        if(this.dropCool) this.dropcnt++;
        if(this.dropcnt == this.dropTime) {
            this.dropCool = false;
            this.dropcnt = 0;
        }
    }

    //handles all responses to input
    this.movement = function() {
        if(input.keyDown(this.controls.left)) {
            if(!this.jumping) {
                this.entity.vx = -this.speed;
            }
            else {
                this.entity.vx = Math.min(-this.speed, this.entity.vx - this.accel);
            }
            this.facing = -1;
        } 
        if(input.keyDown(this.controls.right)) {
            if(!this.jumping) {
                this.entity.vx = this.speed;
            }
            else {
                this.entity.vx = Math.max(this.speed, this.entity.vx + this.accel);
            }
            this.facing = 1;
        } 
        if(!input.keyDown(this.controls.right) && !input.keyDown(this.controls.left)) {
            //if no input while on the ground player stops immediately
            if(!this.jumping) {
                this.entity.vx = 0.0;
            }
            //if in the air player slows down over time
            /*else {
                if(this.entity.vx > 0) {
                    this.entity.vx = Math.max(0.0, this.entity.vx - this.decel);
                }
                else if(this.entity.vx < 0) {
                    this.entity.vx = Math.min(0.0, this.entity.vx + this.decel);
                }
            }*/
        } 
        if(input.keyPress(this.controls.jump) && !this.jumping) {
            this.entity.vy = -1100.0;
            this.jumping = true;
        }

        if(this.item != null && input.keyPress(this.controls.attack) && input.keyDown(this.controls.down)) {
            this.item.drop(this.facing);
            this.item = null;
            this.dropCool = true;
        }

        else if(input.keyPress(this.controls.attack)) {
            if(this.item != null) this.item.attack();
        }

        
    }

    /*(REQUIRED)
        Update function loops after every interval
        -Use this function for all positional updates anything that needs constant checking/updating
    */
    this.Update = function() {
        
        this.updateDropCnt(); //handles cooldown between dropping item and being able to pickup another
        this.movement(); //respond to input
        this.entity.updatePhysics(); //apply acceleration, velocity to position
        
    }

    //runs whenever collision detected involving this object
    //Use collider.entity.tag to determine colliders object type (player, solid object, etc)
    this.onCollision = function(collider) {
        if(collider.entity.tag == "player") {

        }
        if(collider.entity.tag == "item") {
            if(input.keyDown(this.controls.down) && input.keyPress(this.controls.attack)) {
                if(this.item == null && !this.dropCool) {
                    collider.pickUp(this);
                    this.item = collider;
                }
            }
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
        ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
        if(this.item != null) this.item.manualDraw();
    }
}