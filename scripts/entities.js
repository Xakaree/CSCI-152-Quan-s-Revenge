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

function Projectile(parent,x,y,w,h, vx,vy) {
    this.entity = new Entity(x,y,w,h,"projectile");
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
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