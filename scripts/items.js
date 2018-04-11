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
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0, 0));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.10, 0));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.10, 0));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0, 0));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.10, 0));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.10, 0));
        }
    }
}


Flamethrower.prototype = Object.create(Gun.prototype);
function Flamethrower(cx,cy) {
    this.width = 46;
    this.height = 18;
    this.sprite = FLM;
    Gun.call(this, this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;
    this.atkHold = true;

    this.maxAmmo = 100;
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

        var y = Math.random() * 0.2;
        var d = Math.random() * 100;

        if( d < 50) d = 1;
        else if(d >= 50) d = -1;

        var colors = ["red", "orange"];
        var index = Math.floor(Math.random()*colors.length);

        if(this.parent.facing == 1) {
        }
        scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, d * y, 20,colors[index]));
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, d * y, 20,colors[index]));
        }
    }
}

Lazer.prototype = Object.create(Gun.prototype);
function Lazer(cx,cy)
{
  this.width = 26;
  this.height = 13;
  this.sprite = LZG;
  Gun.call(this,this.sprite,cx,cy,this.width,this.height);

  this.offsetX = 26;
  this.offsetY = 28;
  this.atkDelay = 0;
  this.atkHold = false;

  this.maxAmmo = 10;
  this.currAmmo = this.maxAmmo;
  this.reloadSpeed = 85;
}

Lazer.prototype.attack = function()
{
  if(!this.atkCool && !this.reloading) {
      this.currAmmo--;
      if(this.currAmmo <= 0) {
          this.reloading = true;
      }
      else this.atkCool = true;

      var colors = ["green","red", "blue", "purple"];
      var index = Math.floor(Math.random()*colors.length);
      if(this.parent.facing == 1) {
          scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,7,19, 0, 0, colors[index]));
    }
      if(this.parent.facing == -1) {
          scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,7,19, 0, 0,colors[index]));
      }
  }
}
