function Entity(x,y,w,h,tag) {
    this.active = true; //toggle phyics/collision (NEEDS WORKS)

    this.grav = 3000.0;

    //positions
    this.x = x;
    this.y = y;
    //velocity
    this.vx = 0.0;
    this.vy = 0.0;
    //acceleration
    this.ax = 0.0;
    this.ay = 0.0;
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
        /*
            NOTE: when adjusting positions over time
            values have to be multiplied by the interval for smoothing and to
            keep them framerate independent (See below)
        */

        //apply velocity changes        
        this.vx += this.ax * interval;
        this.vy += (this.ay * interval) + (this.grav * interval);
        //apply positional changes based on velocity (this is capped at 20 pixels per frame right now)
        this.x += Math.min(20, this.vx * interval);
        this.y += Math.min(20, this.vy * interval);
    }

    this.solidCollision = function(collider) {
        //calculate a normalized distance between entity and colliding entity
        var dx = (collider.entity.getMidX() - this.getMidX()) / (collider.entity.width/2);
        var dy = (collider.entity.getMidY() - this.getMidY()) / (collider.entity.height/2);
        //absolute values of the above variables
        var absDx = Math.abs(dx);
        var absDy = Math.abs(dy);


        /* collision return codes (numbers are this entity's position relative to collidee)
          4 0 4
          3| |1            
          4 2 4
        */

        //if x and y absolutes are close to each other then entity is on a corner
        if(Math.abs(absDx - absDy) < 0.01) {
            if(dx < 0) { //approaching from right
                this.x = collider.entity.getRight();
            }
            else { //appraoching from left
                this.x = collider.entity.getLeft() - this.width;
            }
            if(dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot();
            }
            else { //approaching from top
                this.y = collider.entity.getTop() - this.height;
            }
            return 4;
        }
        else if(absDx > absDy) { //appraoching from the side
            if(dx < 0) { //approaching from the right
                this.x = collider.entity.getRight();
                return 1;
            }
            else { //approaching from left
                this.x = collider.entity.getLeft() - this.width;
                return 3;
            }
        }
        else { //approaching from the top/bottom
            if(dy < 0) { //approaching from bottom
                this.y = collider.entity.getBot();
                this.vy = 0;
                return 2;
            }
            else { //approaching from top
                this.y = collider.entity.getTop() - this.height;
                this.vy = 0;
                this.ay = 0;
                return 0;
            }
        }
    }
}

function collisionCheck(collider, collidee) {
    var l1 = collider.entity.getLeft();
    var r1 = collider.entity.getRight();
    var b1 = collider.entity.getBot();
    var t1 = collider.entity.getTop();

    var l2 = collidee.entity.getLeft();
    var r2 = collidee.entity.getRight();
    var b2 = collidee.entity.getBot();
    var t2 = collidee.entity.getTop();


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