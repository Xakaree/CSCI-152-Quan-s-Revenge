function Entity(x,y,w,h,tag, dmg = 5) {
    this.active = true; //toggle phyics/collision (NEEDS WORKS)

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

    this.updatePhysics = function() {
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
            if(this.vy > 0) this.y += Math.min(20*tileScale, this.vy * interval);
            else this.y += Math.max(-20*tileScale, this.vy * interval);

        }
    }

    this.solidCollision = function(collider) {
        var tx, ty;
        if(this.vx > 0) tx = this.getMidX() - Math.min(10*tileScale, (this.vx * interval)/2);
        else tx = this.getMidX() - Math.max(-10*tileScale, (this.vx * interval)/2);
        if(this.vy > 0) ty = this.getMidY() - Math.min(10*tileScale, (this.vy * interval)/2);
        else ty = this.getMidY() - Math.max(-10*tileScale, (this.vy * interval)/2);

        //calculate a normalized distance between entity and colliding entity
        var dx = (collider.entity.getMidX() - tx) / (collider.entity.width/2.0);
        var dy = (collider.entity.getMidY() - ty) / (collider.entity.height/2.0);
        //absolute values of the above variables
        var absDx, absDy;
        absDx = Math.abs(dx);
        absDy = Math.abs(dy);

        /* collision return codes (numbers are this entity's position relative to collidee)
          4 0 4
          3| |1
          4 2 4
        */

        //if x and y absolutes are close to each other then entity is on a corner
        if(Math.abs(absDx - absDy) < 0.01) {
            if(dx < 0) { //approaching from right
                this.x = collider.entity.getRight()+1;
            }
            else { //appraoching from left
                this.x = collider.entity.getLeft() - this.width-1;
            }
            if(dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot()+1;
            }
            else { //approaching from top
                this.y = collider.entity.getTop() - this.height-1;
            }
            return 4;
        }
        else if(absDx > absDy) { //appraoching from the side
            if(dx < 0) { //approaching from the right
                this.x = collider.entity.getRight()+1;
                this.vx = 0;
                return 1;
            }
            else { //approaching from left
                this.x = collider.entity.getLeft() - this.width-1;
                this.vx = 0;
                return 3;
            }
        }
        else { //approaching from the top/bottom
            if(dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot()+1;
                //console.log("top)")
                this.vy = 0;
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
    }
}

function collisionCheck(collider, collidee) {
    if(collider instanceof Entity && collidee instanceof Entity) {
        //console.log("Entity check");
        var l1 = collider.getLeft();
        var r1 = collider.getRight();
        var b1 = collider.getBot();
        var t1 = collider.getTop();

        var l2 = collidee.getLeft();
        var r2 = collidee.getRight();
        var b2 = collidee.getBot();
        var t2 = collidee.getTop();
    }
    else {
//console.log("Object check");
        var l1 = collider.entity.getLeft();
        var r1 = collider.entity.getRight();
        var b1 = collider.entity.getBot();
        var t1 = collider.entity.getTop();

        var l2 = collidee.entity.getLeft();
        var r2 = collidee.entity.getRight();
        var b2 = collidee.entity.getBot();
        var t2 = collidee.entity.getTop();
    }



    //checks if any edges of the box colliders are intersecting
    if(b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
        return false;
    }
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
