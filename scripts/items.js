TommyGun.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function TommyGun(cx, cy) {
    this.width = 36
    this.height = 13
    this.sprite = TMY;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 5;
    this.atkHold = true;

    this.offset = 2;

    this.maxAmmo = 20;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

TommyGun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        this.offset = -this.offset;
        if(this.offset < 0) this.offset = -(Math.random(6) + 3);
        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
        }
    }
}

Shotgun.prototype = Object.create(Gun.prototype)
function Shotgun(cx,cy) {
    this.width = 26;
    this.height = 13;
    this.sprite = DBS;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;

    this.maxAmmo = 2;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 60;
}

Shotgun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;
        
        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.10));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.10));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.10));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.10));
        }
    }
}


Flamethrower.prototype = Object.create(Gun.prototype);
function Flamethrower() {
    this.width = 46;
    this.height = 18;
    this.sprite = FLM;
    Gun.call(this, this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 0;
    this.offsetY = 0;
    this.atkDelay = 0;
    this.atkHold = true;

    this.maxAmmo = 50;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 120;
}

Flamethrower.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;
        
        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0));
        }
    }
}