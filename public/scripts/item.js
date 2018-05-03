function Item(sprite,cx,cy,w,h) {
    this.parent = null;
    this.entity = new Entity(cx*tileSize, cy*tileSize, w, h, "item");
    //this.animation = new animation(sprite);
    this.img = sprite;
    this.atkDelay = 0;
    this.atkcnt = 0;
    this.atkHold = false;
    this.atkCool = false;
    this.offsetX = 0;
    this.offsetY = 0;

}

Item.prototype.pickUp = function(parent) {
    this.parent = parent;
    this.entity.active = false;

}

Item.prototype.drop = function(facing) {
    this.parent = null;
    this.entity.active = true;
    if(facing == 1) {
        this.entity.vx = 300*tileScale;
    }
    else this.entity.vx = -300*tileScale;

    this.entity.vy = -600*tileScale;
}

Item.prototype.atkTimer = function() {
    if(this.atkCool) {
        this.atkcnt++;
        if(this.atkcnt >= this.atkDelay) {
            this.atkcnt = 0;
            this.atkCool = false;
        }
    }
}

Item.prototype.onCollision = function(collider) {
    if(this.parent == null && collider.entity.tag == "solid") {
        this.entity.solidCollision(collider);
    }
}

Item.prototype.updatePosition = function() {
    if(this.parent.facing == 1) {
        this.entity.x = this.parent.entity.x+this.offsetX;
        this.entity.y = this.parent.entity.y + this.offsetY;
        //this.img = this.imgR;
    }
    if(this.parent.facing == -1) {
        this.entity.x = this.parent.entity.getRight() - this.offsetX - this.entity.width;
        this.entity.y = this.parent.entity.y + this.offsetY;
        //this.img = this.imgL;
    }
}

Item.prototype.Update = function() {
    this.atkTimer();

    if(this.parent == null) {
        this.entity.updatePhysics(this);
    }
    else {
        this.updatePosition();
    }
}

Item.prototype.manualDraw = function(x,y) {
    if(this.parent.facing == 1) {
        ctx1.drawImage(this.img, 0,0,this.entity.width, this.entity.height, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }
    else if(this.parent.facing == -1) {
        ctx1.drawImage(this.img, 0,this.entity.height,this.entity.width, this.entity.height, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }
    //ctx1.drawImage(this.img, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
}

Item.prototype.Draw = function() {
    ctx1.fillStyle = "white";
    //ctx1.fillRect(this.entity.x, this.entity.y,this.entity.width,this.entity.height);
    if(this.parent == null) {
        ctx1.drawImage(this.img, 0,0,this.entity.width, this.entity.height, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
        ctx1.drawImage(iEx, (this.entity.x+5)*scale, (this.entity.y-35)*scale, (9*2)*scale, (10*3)*scale);
    }
}

Gun.prototype = Object.create(Item.prototype);
function Gun(sprite,cx,cy,w,h) {
    Item.call(this,sprite,cx,cy,w,h)

    this.reloading = false;
    this.reloadSpeed = 0;
    this.reloadcnt = 0;
    this.maxAmmo = 0;
    this.currAmmo = this.maxAmmo
}

Gun.prototype.reloadtimer = function() {
    if(this.reloading) {
        this.reloadcnt++;
        if(this.reloadcnt >= this.reloadSpeed) {
            this.reloadcnt = 0;
            this.currAmmo = this.maxAmmo;
            this.reloading = false;
        }
    }
}

Gun.prototype.manualDraw = function(x,y) {
    if(this.reloading) ctx1.fillRect((x + 20) * scale, y * scale-10,(this.reloadcnt/this.parent.entity.width) * 20 * scale, 5 * scale);
    if(this.parent.facing == 1) {
        ctx1.drawImage(this.img, 0,0,this.entity.width, this.entity.height, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }
    else if(this.parent.facing == -1) {
        ctx1.drawImage(this.img, 0,this.entity.height,this.entity.width, this.entity.height, this.entity.x * scale, this.entity.y * scale, this.entity.width * scale, this.entity.height * scale);
    }
}

Gun.prototype.Update = function() {
    this.atkTimer();
    this.reloadtimer();

    if(this.parent == null) {
        this.entity.updatePhysics(this);
    }
    else {
        this.updatePosition();
    }
}
