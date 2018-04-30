function Tile(cx,cy,cw,ch,image) {
    this.entity = new Entity(cx*tileSize,cy*tileSize, cw*tileSize,ch*tileSize, "tile");
    this.image = image;
    this.Update = function() {

    }

    this.Draw = function() {
        ctx1.fillStyle = "black";
        //ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
        ctx1.drawImage(this.image, this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
    }
}

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

function Projectile(parent,x,y,w,h, vx,vy, life, color ="red", dmg = 5) {
    this.dmg = dmg;
    this.entity = new Entity(x,y,w,h,"projectile", this.dmg);
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.color = color;
    this.entity.grav = 0;
    this.parent = parent;
    this.cnt = 0;
    this.life = life;

    //for linked list
    this.next;
    this.prev;
}

Projectile.prototype.init = function(parent,x,y,w,h, vx,vy, life, color, dmg) {
    //this.entity = new Entity(x,y,w,h,"projectile");
    this.entity.x = x;
    this.entity.y = y;
    this.entity.width = w
    this.entity.height = h;
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.entity.grav = 0;
    this.color = color || "red";
    this.dmg = dmg || 5;
    this.parent = parent;
    this.cnt = 0;
    this.life = life;
    this.entity.active = true;
}

Projectile.prototype.onCollision = function(collider) {
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile") {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {
        this.deactivate();
    }
    if(collider.entity.tag == "solid") {
        this.deactivate();
    }
}

Projectile.prototype.Update = function() {
    this.entity.updatePhysics(this);
    if(this.entity.active) {
        if(this.life > 0) {
            if(this.cnt >= this.life) {
                this.deactivate();
            }
            else this.cnt++;
        }
    }
    

}

Projectile.prototype.Draw = function() {
    ctx1.fillStyle = this.color;
    ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
}

Projectile.prototype.deactivate = function() {
    if(this.entity.active) {
        this.entity.active = false;
        this.entity.x = -2000;
        this.entity.y = -2000;
        scene.freelist.push(this);
    }
}

FreezeProjectile.prototype = Object.create(Projectile.prototype);
FreezeProjectile.prototype.constructor = FreezeProjectile;
function FreezeProjectile(parent,x,y,w,h, vx,vy, life, color ="red", dmg = 5) {
    Projectile.call(this, parent,x,y,w,h, vx,vy, life, color, dmg = 5);
    this.entity.tag = "fp";
    this.constructor.name = "FreezeProjectile";
}

function ExplosiveProjectile(parent,x,y,w,h, vx,vy, life, color ="red", dmg = 5) {
    this.dmg = dmg;
    this.entity = new Entity(x,y,w,h,"Exprojectile", this.dmg);
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.color = color;
    this.entity.grav = 0;
    this.parent = parent;
    this.cnt = 0;
    this.life = life;
    this.explosivedmg = 0.5;

    //for linked list
    this.next = null;
    this.prev = null;
}

ExplosiveProjectile.prototype.init = function(parent,x,y,w,h, vx,vy, life, color, dmg) {
    this.entity.x = x;
    this.entity.y = y;
    this.entity.width = w
    this.entity.height = h;
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.entity.grav = 0;
    this.color = color || "red";
    this.dmg = dmg || 5;
    this.parent = parent;
    this.cnt = 0;
    this.life = life;
    this.entity.active = true;
}

ExplosiveProjectile.prototype.onCollision = function(collider) {
    let color = ["red","orange", "white", "yellow", "brown"];
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile" ) {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {
        

        for(var i =0.1 ; i < 0.5;  i+= 0.1)
        {
          let index  = Math.floor(Math.random() *color.length);
          createObject(Projectile, this,this.entity.getLeft(), this.entity.y, 10,10,-Math.random(), i, 20, color[index], this.explosivedmg);
        }
        for(var i =0.1 ; i < 0.5;  i+= 0.1)
        {
          let index  = Math.floor(Math.random() *color.length);
          createObject(Projectile, this,this.entity.getRight(), this.entity.y, 10,10,Math.random(), i, 20, color[index], this.explosivedmg);
        }
        for(var i =0.1 ; i < 0.5;  i+= 0.1) // up left
        {
          let index  = Math.floor(Math.random() *color.length);
          createObject(Projectile, this,this.entity.getLeft(), this.entity.y, 10,10, -Math.random() ,-Math.random() , 20,  color[index], this.explosivedmg);
        }
        for(var i =0.1 ; i < 0.5;  i+= 0.1) // up right
        {
          let index  = Math.floor(Math.random() *color.length);
          createObject(Projectile, this,this.entity.getRight(), this.entity.y, 10,10,Math.random() , -Math.random() , 20,  color[index],this.explosivedmg);
        }
        this.deactivate();
    }
    if(collider.entity.tag == "solid") {
        

          for(var i =0.1 ; i < 0.5;  i+= 0.1)
          {
            let index  = Math.floor(Math.random() *color.length);
            createObject(Projectile, this,this.entity.getLeft(), this.entity.y, 10,10,-Math.random(), i, 20, color[index], this.explosivedmg);
          }
          for(var i =0.1 ; i < 0.5;  i+= 0.1)
          {
            let index  = Math.floor(Math.random() *color.length);
            createObject(Projectile, this,this.entity.getRight(), this.entity.y, 10,10,Math.random(), i, 20, color[index], this.explosivedmg);
          }
          for(var i =0.1 ; i < 0.5;  i+= 0.1) // up left
          {
            let index  = Math.floor(Math.random() *color.length);
            createObject(Projectile, this,this.entity.getLeft(), this.entity.y, 10,10, -Math.random() ,-Math.random() , 20,  color[index], this.explosivedmg);
          }
          for(var i =0.1 ; i < 0.5;  i+= 0.1) // up right
          {
            let index  = Math.floor(Math.random() *color.length);
            createObject(Projectile, this,this.entity.getRight(), this.entity.y, 10,10,Math.random() , -Math.random() , 20,  color[index],this.explosivedmg);
          }
       // scene.entities.pop();
       this.deactivate();
    }
}

ExplosiveProjectile.prototype.Update = function() {
    this.entity.updatePhysics(this);
    if(this.life > 0) {
        if(this.cnt >= this.life) {
            this.deactivate();
        }
        else this.cnt++;
    }

}

ExplosiveProjectile.prototype.Draw = function() {
    ctx1.fillStyle = this.color;
    ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
}

ExplosiveProjectile.prototype.deactivate = function() {
    if(this.entity.active) {
        this.entity.active = false;
        this.entity.x = -2000;
        this.entity.y = -2000;
        scene.freelist.push(this);
    }
    
}
