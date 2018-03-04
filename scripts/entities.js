//tile that acts as a solid object (walls,platforms)
function SolidTile(cx,cy,cw,ch) {
    this.entity = new Entity(cx*tileSize,cy*tileSize, cw*tileSize,ch*tileSize, "solid");

    this.Update = function() {

    }

    this.Draw = function() {
        ctx1.fillStyle = "black";
        ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
    }

}

function deathTile(cx,cy,cw,ch) {
    this.entity = new Entity(cx,cy, cw*tileSize,ch*tileSize, "dead");

    this.Update = function() {

    }

    this.Draw = function() {
        /*ctx1.fillStyle = "red";
        ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);*/
    }
}

function Projectile(parent,x,y,w,h, dir) {
    this.entity = new Entity(x,y,w,h,"projectile");
    this.entity.vx = 800 * dir * tileScale;
    this.entity.grav = 0;
    this.dmg = 10;
    this.parent = parent;

    this.onCollision = function(collider) {
        if(collider.entity.tag == "projectile") {

        }
        if(collider.entity.tag == "player" && this.parent) {
            this.entity.active = false;
            this.entity.x = -2000;
            this.entity.y = -2000;
        }
        if(collider.entity.tag == "solid") {
            this.entity.active = false;
            this.entity.x = -2000;
            this.entity.y = -2000;
           // scene.entities.pop();
        }
    }

    this.Update = function() {
        this.entity.updatePhysics();
    }

    this.Draw = function() {
        ctx1.fillStyle = "red";
        ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
    }
}

function TommyGun(cx, cy, w, h) {
    this.parent = null;
    this.entity = new Entity(cx*tileSize, cy*tileSize, w, h, "item");
    this.img = TGR;
    this.atkDelay = 5;
    this.atkcnt = 0;
    this.atkCool = false;
    this.offset = 2;

    this.pickUp = function(parent) {
        this.parent = parent;
    }

    this.drop = function(facing) {
        this.parent = null;
        if(facing == 1) {
            this.entity.vx = 300*tileScale;
        }
        else this.entity.vx = -300*tileScale;
        
        this.entity.vy = -600*tileScale;
    }

    this.attack = function() {
        if(!this.atkCool) {
            this.offset = -this.offset;
            if(this.offset < 0) this.offset = -(Math.random(6) + 3);
            this.atkCool  = true;
            if(this.parent.facing == 1) {
                scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing));
            }
            if(this.parent.facing == -1) {
                scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing));
            }
        }
        
    }

    this.onCollision = function(collider) {
        if(this.parent == null && collider.entity.tag == "solid") {
            this.entity.solidCollision(collider);
        }
    }

    this.Update = function() {
        if(this.atkCool) {
            this.atkcnt++;
            if(this.atkcnt == this.atkDelay) {
                this.atkcnt = 0;
                this.atkCool = false;   
            }
        }

        if(this.parent == null) {
            this.entity.updatePhysics();
        }
        else {
            if(this.parent.facing == 1) {
                this.entity.x = this.parent.entity.x+16*tileScale*2;
                this.entity.y = this.parent.entity.y + this.parent.entity.height/3;
                this.img = TGR;
            }
            if(this.parent.facing == -1) {
                this.entity.x = this.parent.entity.getRight() - 36*tileScale*2;
                this.entity.y = this.parent.entity.y + this.parent.entity.height/3;
                this.img = TGL;
            }
            
        }
    }

    this.manualDraw = function() {
        ctx1.drawImage(this.img, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }

    this.Draw = function() {
        ctx1.fillStyle = "white";
        //ctx1.fillRect(this.entity.x, this.entity.y,this.entity.width,this.entity.height);
        if(this.parent == null) ctx1.drawImage(this.img, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }

    
}
