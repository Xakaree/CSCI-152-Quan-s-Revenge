//tile that acts as a solid object (walls,platforms)
function SolidTile(cx,cy,cw,ch, image) {
    this.entity = new Entity(cx*tileSize,cy*tileSize, cw*tileSize,ch*tileSize, "solid");
    this.image = image;
    this.Update = function() {

    }

    this.Draw = function() {
        ctx1.fillStyle = "black";
        //ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
        ctx1.drawImage(this.image, this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
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

function Projectile(parent,x,y,w,h, vx,vy, life, color ="red",dmg = 5) {
    this.entity = new Entity(x,y,w,h,"projectile", dmg);
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.color = color;
    this.entity.grav = 0;
    this.dmg = dmg; //  what is this for ?
    this.parent = parent;
    this.cnt = 0;
    this.life = life;
}

Projectile.prototype.onCollision = function(collider) {
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp") {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {
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

Projectile.prototype.Update = function() {
    this.entity.updatePhysics();
    if(this.life > 0) {
        if(this.cnt >= this.life) {
            this.entity.active = false;
            this.entity.x = -2000;
            this.entity.y = -2000;
        }
        else this.cnt++;
    }

}

Projectile.prototype.Draw = function() {
    ctx1.fillStyle = this.color;
    ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
}
