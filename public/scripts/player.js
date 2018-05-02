function Player(x, y,w,h, controls, sprite) {
    this.animation = new animation(sprite,controls);
    this.entity = new Entity(x,y,64,64,"player"); //attach entity to this object for physics/collision
    this.speed = 350.0 * tileScale; //how fast player moves left/right
    this.accel = 2.0 * tileScale; //UNUSED FOR NOW
    this.decel = 2.0 * tileScale;
    this.controls = controls || defaultcontrols;
    this.jumpsnd =  new sound("audioFiles/sfx/jump.mp3", false, 1);
	  this.sprite = sprite;
    this.freezeTimer = 0;

    this.facing = 1; //direction of player, -1=left 1=right
    this.attacking = false;
    this.jumping = false;
    this.idling = false;

    this.item = null;
    this.dropCool = false; //items cant be picked up during dropcool
    this.dropcnt = 0; //drop cooldown counter
    this.dropTime = 5; //number of frames that drop cooldown lasts

    this.knockback = false;
    this.knockcnt = 0;
    this.knockTime = 5;

    this.health = 100;
    this.isAlive = true;
    this.drawPlayer = true;
}

//handles cooldown between dropping item and being able to pickup another
Player.prototype.updateCnts = function() {
    if(this.dropCool) this.dropcnt++;
    if(this.dropcnt == this.dropTime) {
        this.dropCool = false;
        this.dropcnt = 0;
    }

    if(this.knockback) this.knockcnt++;
    if(this.knockcnt == this.knockTime) {
        this.knockback = false;
        this.animation.image = this.sprite.image;
        this.knockcnt = 0;
        this.knockTime = 5; // reset knockback to default
    }
}

//handles all responses to input
Player.prototype.movement = function() {

    if(input.keyDown(this.controls.left) ) {
        if(!this.knockback) {
            if(!this.jumping) {
                this.entity.vx = -this.speed;
            }
            else {
                this.entity.vx = Math.min(-this.speed, this.entity.vx - this.accel);
            }
        }
        this.facing = -1;
    }
     else if(input.keyDown(this.controls.right)) {
        if(!this.knockback) {
            if(!this.jumping) {
                this.entity.vx = this.speed;
            }
            else {
                this.entity.vx = Math.max(this.speed, this.entity.vx + this.accel);
            }
        }
        this.facing = 1;
    }
    if(!input.keyDown(this.controls.right) && !input.keyDown(this.controls.left)) {
        //if no input while on the ground player stops immediately
        if(!this.jumping && !this.knockback) {
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
    if(input.keyPress(this.controls.jump) && !this.jumping && !this.knockback) {
        this.entity.vy = -1100.0 * tileScale;
        this.jumping = true;

        this.jumpsnd.play();
    }

    if(this.item != null && input.keyPress(this.controls.attack) && input.keyDown(this.controls.down)) {
        this.item.drop(this.facing);
        this.item = null;
        this.dropCool = true;
    }

    else if(this.item != null) {
        if(this.item.atkHold) {
          this.item.controls = this.controls;
            if(input.keyDown(this.controls.attack)) {
                this.item.attack();
            }
        }
        else {
             if(input.keyPress(this.controls.attack)) {
                this.item.attack();
            }
        }

    }
}
Player.prototype.aniChange = function() {
  if(!input.keyDown(this.controls.left) &&
      !input.keyDown(this.controls.right) &&
      !input.keyDown(this.controls.up)){
        if(!this.idling) {
          if(this.facing == 1) {
              this.animation.play(0,true);
          }
          else{
            this.animation.play(1,true);
          }
          this.idling = true;
        }
  }
  else {
    this.idling = false;
  }

  if(input.keyPress(this.controls.jump)){
    if(this.facing == 1){
      this.animation.play(2,false);
    }
    else{ this.animation.play(3,false);}
  }

  /*if(input.keyPress(this.controls.attack) && facing == 1){
    this.animation.play(4,false);
  }
  if(input.keyPress(this.controls.attack) && facing == -1){
    this.animation.play(5,false);
  }*/

  if(input.keyDown(this.controls.left) && this.jumping == false){
    this.animation.play(7,true);
  }
  else if(input.keyDown(this.controls.right) && this.jumping == false){
    this.animation.play(6,true);
  }
}

/*(REQUIRED)
    Update function loops after every interval
    -Use this function for all positional updates anything that needs constant checking/updating
*/
Player.prototype.Update = function() {

if(this.freezeTimer > 0){this.freezeTimer = this.freezeTimer - 1;} // decrement every freezetimer on every update
if(this.freezeTimer < 1)
{
    if(this.health <= 0) {
        if(this.isAlive) {
            if(this.item != null) this.item.drop(this.facing);
            this.item = null;
            this.isAlive = false;
            this.entity.active = false;
            this.drawPlayer = false;
        }
    }

    this.updateCnts(); //handles cooldown between dropping item and being able to pickup another
    if(this.isAlive) this.movement(); //respond to input
    this.aniChange();
    this.entity.updatePhysics(this); //apply acceleration, velocity to position
    this.animation.Update();
}// freezeTimer
}

//runs whenever collision detected involving this object
//Use collider.entity.tag to determine colliders object type (player, solid object, etc)
Player.prototype.onCollision = function(collider) {
    if(collider.entity.tag == "player") {

    }
    if(collider.entity.tag == "projectile" && collider.parent != this) {
        this.knockback = true;
        this.animation.image = this.sprite.damage;
        this.knockcnt = 0;
        this.entity.vx = collider.entity.vx;
        this.health -= collider.entity.dmg; //  test
    }
    if(collider.entity.tag == "knock" && collider.parent != this) {
        this.knockback = true;
        this.animation.image = this.sprite.damage;
        this.knockcnt = 0;
        this.knockTime = 20; 
        this.entity.vx = collider.entity.vx;
        this.health -= collider.entity.dmg; //  test
    }
    if(collider.entity.tag == "Exprojectile" && collider.parent != this) {
        this.knockback = true;
        this.animation.image = this.sprite.damage;
        this.knockcnt = 0;
        this.entity.vx = collider.entity.vx;
        this.health -= collider.entity.dmg; //  test
        this.knockTime = 15; //  increase knockback
    }
    if(collider.entity.tag == "fp" && collider.parent != this) // freeze projectile
    {
      this.knockback = true;
      this.animation.image = this.sprite.damage;
      this.knockcnt = 0;
      this.entity.vx = collider.entity.vx;
      this.health -= collider.entity.dmg; //  test
      this.freezeTimer += 3; // increment freezeTimer by amount of damge taken
    }
    if(collider.entity.tag =="Beam" && collider.parent != this)
    {
      this.knockback = false;
      this.knockcnt = 0;
      this.knockTime = 0;
      this.animation.image = this.sprite.damage;
      this.entity.vx = collider.entity.vx;
      this.health -= collider.entity.dmg; //  test
    }
    if(collider.entity.tag =="stick" && collider.parent != this)
    {

    }
    if(collider.entity.tag == "dead") {
        this.health = 0;
        this.entity.active = false;
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

        if(this.item != null) this.item.updatePosition();
    }

}

//All draw calls must be done in this function
Player.prototype.Draw = function() {
    if(this.drawPlayer) {
        // ctx1.fillStyle = color;
            //ctx1.fillRect(this.entity.x*scale,this.entity.y*scale,this.entity.width*scale,this.entity.height*scale);
            //ctx1.drawImage(this.sprite,srcX*64,srcY*64,64,64,this.entity.x,this.entity.y,tileSize,tileSize)
        this.animation.Draw(this.entity.x,this.entity.y,this.entity.width,this.entity.height);
        if(this.item != null) this.item.manualDraw(this.entity.x, this.entity.y);
    }

}
