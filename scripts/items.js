TommyGun.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function TommyGun(cx, cy) {
    this.width = 36
    this.height = 13
    Gun.call(this,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--

    this.imgR = TGR;
    this.imgL = TGL;
    this.img = this.imgR;
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 5;
    this.atkHold = true;

    this.offset = 2;

    this.maxAmmo = 20;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;

    this.attack = function() {
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
}

Shotgun.prototype = Object.create(Gun.prototype)
function Shotgun(cx,cy) {
    this.width = 26;
    this.height = 13;
    Gun.call(this,cx,cy,this.width,this.height);

    this.imgR = DBR;
    this.imgL = DBL;
    this.img = this.imgR;
    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;

    this.maxAmmo = 2;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 60;
    
    this.attack = function() {
        if(!this.atkCool && !this.reloading) {
            this.currAmmo--;
            if(this.currAmmo <= 0) {
                this.reloading = true;
            }
            else this.atkCool = true;
            
            if(this.parent.facing == 1) {
                scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y, 10,10,this.parent.facing, 0));
                scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y, 10,10,this.parent.facing, 0.25));
                scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y, 10,10,this.parent.facing, -0.25));
            }
            if(this.parent.facing == -1) {
                scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y, 10,10,this.parent.facing, 0));
                scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y, 10,10,this.parent.facing, -1));
                scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y, 10,10,this.parent.facing, 1));
            }
        }
    }
}