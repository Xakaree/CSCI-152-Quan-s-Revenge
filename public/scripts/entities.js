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
}

Projectile.prototype.onCollision = function(collider) {
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile") {

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
}

ExplosiveProjectile.prototype.onCollision = function(collider) {
    let color = ["red","orange", "white", "yellow", "brown"];
    if(collider.entity.tag == "projectile" || collider.entity.tag == "fp" || collider.entity.tag == "Exprojectile" ) {

    }
    if(collider.entity.tag == "player" && collider != this.parent) {
        this.entity.active = false;

        for(var i =0.1 ; i < 1;  i+= 0.1)
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getRight(), this.entity.y, 10,10,Math.random(), i, 20, color[index], 1));
        }

        for(var i =0.1 ; i < 1;  i+= 0.1)
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getLeft(), this.entity.y, 10,10,-Math.random(), i, 20, color[index], 1));
        }

        for(var i =0.1 ; i < 0.6;  i+= 0.1) // up right
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getRight(), this.entity.y, 10,10,Math.random() , (Math.floor(Math.random() * 5) + 5 )/10, 20,  color[index], 1));
        }

        for(var i =0.1 ; i < 0.6;  i+= 0.1) // up left
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getLeft(), this.entity.y, 10,10, -Math.random() , (Math.floor(Math.random() * 5) + 5 )/10, 20,  color[index], 1));
        }

        this.entity.x = -2000;
        this.entity.y = -2000;
    }
    if(collider.entity.tag == "solid") {
        this.entity.active = false;

        for(var i =0.1 ; i < 1;  i+= 0.1) // right
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getRight(), this.entity.y, 10,10,Math.random(), i, 20,  color[index], 1));
        }

        for(var i =0.1 ; i < 1;  i+= 0.1) //left
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getLeft(), this.entity.y, 10,10,-Math.random(), i, 20, color[index], 1));
        }

        for(var i =0.1 ; i < 0.6;  i+= 0.1) // up right
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getRight(), this.entity.y, 10,10,Math.random() , (Math.floor(Math.random() * 5) + 5 )/10, 20,  color[index], 1));
        }

        for(var i =0.1 ; i < 0.6;  i+= 0.1) // up left
        {
          let index  = Math.floor(Math.random() *color.length);
          scene.entities.push(new Projectile(this,this.entity.getLeft(), this.entity.y, 10,10, -Math.random() , (Math.floor(Math.random() * 5) + 5 )/10, 20,  color[index], 1));
        }


        this.entity.x = -2000;
        this.entity.y = -2000;
       // scene.entities.pop();
    }
}

ExplosiveProjectile.prototype.Update = function() {
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

ExplosiveProjectile.prototype.Draw = function() {
    ctx1.fillStyle = this.color;
    ctx1.fillRect(this.entity.x * scale,this.entity.y * scale,this.entity.width * scale,this.entity.height * scale);
}
