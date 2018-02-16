//tile that acts as a solid object (walls,platforms)
function SolidTile(cx,cy,cw,ch) {
    this.entity = new Entity(cx*tileSize,cy*tileSize, cw*tileSize,ch*tileSize, "solid");

    this.Update = function() {

    }

    this.Draw = function() {
        ctx1.fillStyle = "black";
        ctx1.fillRect(this.entity.x,this.entity.y,this.entity.width,this.entity.height);
    }

}

function Projectile(x,y,w,h, dir) {
    this.entity = new Entity(x,y,w,h,"projectile");
    this.entity.vx = 800 * dir;
    this.entity.grav = 0;

    this.onCollision = function(collider) {
        if(collider.entity.tag == "projectile") {

        }
        if(collider.entity.tag == "solid") {
            this.entity.active = false;
            this.entity.x = -20;
            this.entity.y = -20;
           // scene.entities.pop();
        }
    }

    this.Update = function() {
        this.entity.updatePhysics();
    }

    this.Draw = function() {
        ctx1.fillStyle = "red";
        ctx1.fillRect(this.entity.x,this.entity.y,this.entity.width,this.entity.height);
    }
}

function rangeItem(cx, cy, w, h) {
    this.parent = null;
    this.entity = new Entity(cx*tileSize, cy*tileSize, w, h, "item");
    this.img = dbrlR;

    this.pickUp = function(parent) {
        this.parent = parent;
    }

    this.drop = function() {
        this.parent = null;
    }

    this.attack = function() {
        console.log("attack");
        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.entity.getRight(), this.entity.y, 15,15,this.parent.facing));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.entity.x, this.entity.y, 15,15,this.parent.facing));
        }
        
    }

    this.onCollision = function(collider) {
        if(collider.entity.tag == "solid") {
            this.entity.solidCollision(collider);
        }
    }

    this.Update = function() {
        if(this.parent == null) {
            this.entity.updatePhysics();
        }
        else {
            if(this.parent.facing == 1) {
                this.entity.x = this.parent.entity.x+5;
                this.entity.y = this.parent.entity.y + this.parent.entity.height/3;
                this.img = dbrlR;
            }
            if(this.parent.facing == -1) {
                this.entity.x = this.parent.entity.getRight() - 32;
                this.entity.y = this.parent.entity.y + this.parent.entity.height/3;
                this.img = dbrlL;
            }
            
        }
    }

    this.Draw = function() {
        ctx1.fillStyle = "white";
        //ctx1.fillRect(this.entity.x, this.entity.y,this.entity.width,this.entity.height);
        ctx1.drawImage(this.img, this.entity.x, this.entity.y);
    }

    
}
