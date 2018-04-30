function Entity(x,y,w,h,tag, dmg = 5) {
    this.active = true; //toggle phyics/collision (NEEDS WORKS)

    this.cdir = 0;  //0-left/right 1-up/down

    //this.grav = 3000.0;
    this.grav = 3000 * tileScale;

    this.dmg = dmg;
    //positions
    this.x = x;
    this.y = y;
    //velocity
    this.vx = 0.0;
    this.vy = 0.0;
    //acceleration
    this.ax = 0.0;
    this.ay = 0.0;

    this.airfriction = 200.0 * tileScale;
    this.friction = 700.0 * tileScale;

    //width and height of box collider
    this.width = w;
    this.height = h;
    this.tag = tag; //tag specifies object type (player, item, etc), used in onCollision

    //functions for getting differrent position of entity
    //used for collision
    this.getTop = function() {return this.y;}
    this.getRight = function() {return this.x + this.width;}
    this.getBot = function() {return this.y + this.height;}
    this.getLeft = function() {return this.x;}

    this.getMidX = function() {return this.x + (this.width/2);}
    this.getMidY = function() {return this.y + (this.height/2);}

    this.dx;
    this.dy;
    this.absDx;
    this.absDy;
    this.tx;
    this.ty;

    this.updatePhysics = function(parent) {
        if(this.active) {
            /*
                NOTE: when adjusting positions over time
                values have to be multiplied by the interval for smoothing and to
                keep them framerate independent (See below)
            */

            //apply velocity changes
            this.vx += this.ax * interval;
            if(this.vx > 0 && this.vy != 0) {
                this.vx = Math.max(0.0, this.vx - (this.airfriction * interval));
            }
            else if(this.vx < 0 && this.vy != 0) {
                this.vx = Math.min(0.0, this.vx + (this.airfriction * interval));
            }
            this.vy += (this.ay * interval) + (this.grav * interval);
            //apply positional changes based on velocity (this is capped at 20 pixels per frame right now)
            
            if(this.vx > 0) this.x += Math.min(20*tileScale, this.vx * interval);
            else this.x += Math.max(-20*tileScale, this.vx * interval);

            this.cdir = 0;
            scene.tileCollision(parent);


            if(this.vy > 0) this.y += Math.min(20*tileScale, this.vy * interval);
            else this.y += Math.max(-20*tileScale, this.vy * interval);

            this.cdir = 1;
            scene.tileCollision(parent);

        }
    }

    this.horizontalCollision = function(collider) {
        this.dx = collider.entity.getMidX() - this.getMidX();
        if(this.dx < 0) { //right
            this.x = collider.entity.getRight()+1;
            this.vx = 0;
            this.ax = 0;
            return 1;
        }
        else { //left
            this.x = collider.entity.getLeft() - this.width-1;
            this.vx = 0;
            this.ax = 0;
            return 1;
        }
    }

    this.verticalCollision = function(collider) {
        this.dy = collider.entity.getMidY() - this.getMidY();
        if(this.dy < 0) { //bot
            this.y = collider.entity.getBot()+1;
            //console.log("top)")
            this.vy = 0;
            this.ay = 0;
            return 2;
        }
        else { //top
            this.y = collider.entity.getTop() - this.height-1;
            this.vy = 0;
            this.ay = 0;

            if(this.vx > 0) {
                this.vx = Math.max(0.0, this.vx - (this.friction * interval));
            }
            else if(this.vx < 0) {
                this.vx = Math.min(0.0, this.vx + (this.friction * interval));
            }
            return 0;
        }
    }

    this.solidCollision = function(collider) {
        if(this.cdir == 0) return this.horizontalCollision(collider);
        else return this.verticalCollision(collider);
    }

    /*this.solidCollision = function(collider) {
    if(this.vx > 0) this.tx = this.getMidX() - Math.min(10*tileScale, (this.vx * interval)/2);
        else this.tx = this.getMidX() - Math.max(-10*tileScale, (this.vx * interval)/2);
        if(this.vy > 0) this.ty = this.getMidY() - Math.min(10*tileScale, (this.vy * interval)/2);
        else this.ty = this.getMidY() - Math.max(-10*tileScale, (this.vy * interval)/2);

        //calculate a normalized distance between entity and colliding entity
        this.dx = (collider.entity.getMidX() - this.tx) / (collider.entity.width/2.0);
        this.dy = (collider.entity.getMidY() - this.ty) / (collider.entity.height/2.0);

        this.dx = collider.entity.getMidX() - this.getMidX();
        this.dy = collider.entity.getMidY() - this.getMidY();

        //absolute values of the above variables
        this.absDx = Math.abs(this.dx);
        this.absDy = Math.abs(this.dy);

         collision return codes (numbers are this entity's position relative to collidee)
          4 0 4
          3| |1
          4 2 4
        

        //if x and y absolutes are close to each other then entity is on a corner
        if(Math.abs(this.absDx - this.absDy) < 0.01) {
            if(this.dx < 0) { //approaching from right
                this.x = collider.entity.getRight()+1;
            }
            else { //appraoching from left
                this.x = collider.entity.getLeft() - this.width-1;
            }
            if(this.dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot()+1;
            }
            else { //approaching from top
                this.y = collider.entity.getTop() - this.height-1;
            }
            return 4;
        }
        if(this.absDx > this.absDy) { //appraoching from the side
            if(this.dx < 0) { //approaching from the right
                this.x = collider.entity.getRight()+1;
                this.vx = 0;
                this.ax = 0;
                return 1;
            }
            else { //approaching from left
                this.x = collider.entity.getLeft() - this.width-1;
                this.vx = 0;
                this.ax = 0;
                return 3;
            }
        }
        else { //approaching from the top/bottom
            if(this.dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot()+1;
                //console.log("top)")
                this.vy = 0;
                this.ay = 0;
                return 2;
            }
            else { //approaching from top
                this.y = collider.entity.getTop() - this.height-1;
                this.vy = 0;
                this.ay = 0;

                if(this.vx > 0) {
                    this.vx = Math.max(0.0, this.vx - (this.friction * interval));
                }
                else if(this.vx < 0) {
                    this.vx = Math.min(0.0, this.vx + (this.friction * interval));
                }
                return 0;
            }
        }
    }*/
}

function collisionCheck(collider, collidee) {
    
    /*var l1 = collider.entity.getLeft();
    var r1 = collider.entity.getRight();
    var b1 = collider.entity.getBot();
    var t1 = collider.entity.getTop();

    var l2 = collidee.entity.getLeft();
    var r2 = collidee.entity.getRight();
    var b2 = collidee.entity.getBot();
    var t2 = collidee.entity.getTop();*/

    if(collider.entity.y+collider.entity.height < collidee.entity.y
        || collider.entity.y > collidee.entity.y+collidee.entity.height
        || collider.entity.x+collider.entity.width < collidee.entity.x
        || collider.entity.x > collidee.entity.x+collidee.entity.width) {
            return false;
        }

    //checks if any edges of the box colliders are intersecting
    /*if(b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
        return false;
    }*/
    else return true;
}


//calls the onCollision function for each entity, passing in the other entity as a parameter
function collision(collider, collidee) {
    if(collider.onCollision) {
        collider.onCollision(collidee);
    }
    if(collidee.onCollision) {
        collidee.onCollision(collider);
    }
}
