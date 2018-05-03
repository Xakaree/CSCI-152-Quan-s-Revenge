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

function deathTile(pos,cw,ch) {
    this.entity = new Entity(0,0, cw,ch, "dead");

    this.Update = function() {
        if(pos == "left") {
            this.entity.x = scene.camera.x-tileSize;
            this.entity.y = scene.camera.y;
        }

        if(pos == "right") {
            this.entity.x = scene.camera.x + scene.camera.width + tileSize;
            this.entity.y = scene.camera.y;
        }

        if(pos == "up") {
            this.entity.x = scene.camera.x;
            this.entity.y = scene.camera.y-tileSize;
        }

        if(pos == "down") {
            this.entity.x = scene.camera.x - 20*tileSize;
            this.entity.y = scene.camera.y+ scene.camera.height+tileSize + 4*tileSize*(1/scale);
            this.entity.width = this.entity.width*(1/scale);
        }
    }

    this.Draw = function() {
        ctx1.fillStyle = "red";
        ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
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
    if(this.entity.x > 1500 || this.entity.x < -1500)
    {
      this.deactivate();
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
// freeze projectile
FreezeProjectile.prototype = Object.create(Projectile.prototype);
FreezeProjectile.prototype.constructor = FreezeProjectile;
function FreezeProjectile(parent,x,y,w,h, vx,vy, life, color ="red", dmg = 5) {
    Projectile.call(this, parent,x,y,w,h, vx,vy, life, color, dmg);
    this.entity.tag = "fp";
    this.constructor.name = "FreezeProjectile";
}

KnockProjectile.prototype = Object.create(Projectile.prototype);
KnockProjectile.prototype.constructor = KnockProjectile;
function KnockProjectile(parent,x,y,w,h, vx,vy, life, color ="grey", dmg = 2) {
    Projectile.call(this, parent,x,y,w,h, vx,vy, life, color, dmg);
    this.entity.tag = "knock";
    this.constructor.name = "KnockProjectile";
}

//beam projectile
BeamProjectile.prototype = Object.create(Projectile.prototype);
BeamProjectile.prototype.constructor = BeamProjectile;
function BeamProjectile(parent,x,y,w,h, vx,vy, life, color ="pink", dmg = 0.15) {
    Projectile.call(this, parent,x,y,w,h, vx,vy, life, color, dmg);
    this.entity.tag = "Beam";
    this.constructor.name = "BeamProjectile";
}

BeamProjectile.prototype.onCollision = function(collider) {
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile") {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {

    }
    if(collider.entity.tag == "solid") {
        this.deactivate();
    }
}



//explosive projectile
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
    this.snd = new sound("audioFiles/sfx/launcherCollision.mp3", false, 1);
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

        this.snd.play();
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

            this.snd.play();
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
    if(this.entity.active) {
        if(this.life > 0) {
            if(this.cnt >= this.life) {
                this.deactivate();
            }
            else this.cnt++;
        }
    }
    if(this.entity.x > 1500 || this.entity.x < -1500)
    {
      this.deactivate();
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


// sticky
StickyProjectile.prototype = Object.create(Projectile.prototype);
StickyProjectile.prototype.constructor = StickyProjectile;
function StickyProjectile(parent,x,y,w,h, vx,vy, life, color ="red", dmg = 5) {
    this.dmg = dmg;
    this.entity = new Entity(x,y,w,h,"stick", this.dmg);
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.color = ["green", "Yellow", "red"];
    this.entity.grav = 0;
    this.parent = parent;
    this.cnt = 0;
    this.timer = 0;
    this.life = life;
    this.explosivedmg = 1.5;
    this.snd = new sound("audioFiles/sfx/launcherCollision.mp3", false, 1);
    //for linked list
    this.next = null;
    this.prev = null;
}

StickyProjectile.prototype.init = function(parent,x,y,w,h, vx,vy, life, color, dmg) {
    this.entity.x = x;
    this.entity.y = y;
    this.entity.width = w
    this.entity.height = h;
    this.entity.vx = 800 * vx * tileScale;
    this.entity.vy = 800 * vy * tileScale;
    this.entity.grav = 0;
    this.dmg = dmg || 5;
    this.parent = parent;
    this.attached = null;
    this.cnt = 0;
    this.life = life;
    this.entity.active = true;
    this.hitx = 0;
    this.hity = 0;
}

StickyProjectile.prototype.onCollision = function(collider) {
    
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile" ) {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {
    
      this.attached = collider.entity;
      this.entity.x = this.attached.getMidX();
      this.entity.y = this.attached.getMidY();
    }
    if(collider.entity.tag == "solid") {
      if(!this.attached)
      {
        this.attached = collider.entity;
        this.hitx =  this.entity.x
        this.hity =  this.entity.y
      }
      if(this.attached)
      {
        
        this.entity.x = this.hitx;
        this.entity.y = this.hity;
      }
    }
}

StickyProjectile.prototype.Update = function() {
   if(this.attached){this.timer = this.timer + 1;}//  increment timer

    this.entity.updatePhysics(this);
    if(this.active) {
        if(this.life > 0) {
            if(this.cnt >= this.life) {
                this.deactivate();
            }
            else this.cnt++;
        }
    }

    if(this.entity.x > 1500 || this.entity.x < -1500)
    {
      this.deactivate();
    }

    if(this.timer > 44)
    {
      this.Kaboom();
    }
}

StickyProjectile.prototype.Draw = function() {
    ctx1.fillStyle = this.color[Math.floor(this.timer/15)];

    ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
}

StickyProjectile.prototype.deactivate = function() {
    if(this.entity.active) {
        this.entity.active = false;
        this.entity.x = -2000;
        this.entity.y = -2000;
        this.timer = 0;
        this.attached = null;
        scene.freelist.push(this);
    }

}

StickyProjectile.prototype.Kaboom = function()
{
  let color = ["red","orange", "white", "yellow", "brown"];
this.snd.play();
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
