function ItemSpawn(itemList, x, y) {
    this.active = true;
    this.x = x * tileSize; //actual position
    this.y = y * tileSize; //actual position
    this.tx = x; //tile position
    this.ty = y; //tile position
    this.lastItem = null;
    this.itemList = itemList;
    this.spawnTimer = 0;
    this.spawnTime = 240;
    this.spawning = false;

    this.spawnItem();
}

ItemSpawn.prototype.Update = function() {
    if(this.lastItem != null && this.lastItem.parent != null) {
        this.lastItem = null;
        this.spawning = true;
        console.log("spawning");
    }

    if(this.spawning) {
        this.spawnTimer++;
        if(this.spawnTimer >= this.spawnTime) {
            this.spawning = false;
            this.spawnItem();
            this.spawnTimer = 0;
        }
    }
}

ItemSpawn.prototype.spawnItem = function() {
    var k = Math.floor(Math.random() * this.itemList.length);
    this.lastItem = new this.itemList[k](this.tx,this.ty);
    scene.entities.push(this.lastItem);
}

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
        var tmy = new sound("audioFiles/sfx/tmygun.mp3", false, 1);
        tmy.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        this.offset = -this.offset;
        if(this.offset < 0) this.offset = -(Math.random(6) + 3);
        if(this.parent.facing == 1) {
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(Projectile, this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0);
        }
        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(Projectile, this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0);
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
        var shotgunsnd = new sound("audioFiles/sfx/shotgun.mp3", false, 1);
        shotgunsnd.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0, 17,"red",15);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.05, 17, "red",15);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.05, 17, "red",15);
        }
        if(this.parent.facing == -1) {
            createObject(Projectile, this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0, 17,"red",15);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.05, 17,"red",15);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.05, 17,"red",15);
        }
    }
}


Flamethrower.prototype = Object.create(Gun.prototype);
function Flamethrower(cx,cy) {
    this.width = 46;
    this.height = 18;
    this.sprite = FLM;
    Gun.call(this, this.sprite,cx,cy,this.width,this.height);
    this.snd = new sound("audioFiles/sfx/flamethrower.mp3", false, 1);
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
        this.snd.play();
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
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, d * y, 20));
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, d * y, 20, colors[index]);
        }

        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, d * y, 20));
            createObject(Projectile, this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, d * y, 20, colors[index]);
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
      var lasersnd = new sound("audioFiles/sfx/laser.mp3", false, 1);
      lasersnd.play();
      this.currAmmo--;
      if(this.currAmmo <= 0) {
          this.reloading = true;
      }
      else this.atkCool = true;

      var colors = ["green","red", "blue", "purple"];
      var index = Math.floor(Math.random()*colors.length);
      if(this.parent.facing == 1) {
          createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 13,5,this.parent.facing, 0, 0, colors[index]);
    }
      if(this.parent.facing == -1) {
          createObject(Projectile, this.parent, this.entity.x - 10 , this.entity.y, 10,3,this.parent.facing, 0, 0,colors[index]);
      }
  }
}

Freeze.prototype = Object.create(Gun.prototype);
function Freeze(cx,cy)
{
  this.width = 46;
  this.height = 10;
  this.sprite = FZG;
  Gun.call(this, this.sprite,cx,cy,this.width,this.height);

  this.offsetX = 32;
  this.offsetY = 22;
  this.atkDelay = 0;
  this.atkHold = true;

  this.maxAmmo = 50;
  this.currAmmo = this.maxAmmo;
  this.reloadSpeed = 150;
}
Freeze.prototype.attack = function()
{
  if(!this.atkCool && !this.reloading) {
      this.currAmmo--;
      if(this.currAmmo <= 0) {
          this.reloading = true;
      }
      else this.atkCool = true;

      var y = Math.random() * 0.2;
      var d = Math.random() * 50;

      if( d < 50) d = 1;
      else if(d >= 100) d = -1;

      var colors = ["cyan", "white"];
      var index = Math.floor(Math.random()*colors.length);
      if(this.parent.facing == 1) {
        createObject(FreezeProjectile, this.parent,this.entity.getRight(), this.entity.y, 10,10, 0.6, d * y, 0,colors[index],0.25);
        /*let fp = new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10, 0.6, d * y, 0,colors[index],0.25);
        fp.entity.tag = "fp";
        scene.entities.push(fp);*/
      }
      if(this.parent.facing == -1) {
        createObject(FreezeProjectile, this.parent, this.entity.x - 10 , this.entity.y, 10,10, -0.6, d * y, 0,colors[index],0.25);
        /*let fp = new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10, -0.6, d * y, 0,colors[index],0.25);
        fp.entity.tag = "fp";
        scene.entities.push(fp);*/
      }
  }
}

Bazooka.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function Bazooka(cx, cy) {
    this.width = 64
    this.height = 16
    this.sprite = BZK;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 12;
    this.offsetY = 15;
    this.atkDelay = 0;
    this.atkHold = false;

    this.maxAmmo = 1;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 170;
}

Bazooka.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
    var bzka = new sound("audioFiles/sfx/bazooka.mp3", false, 1);
    bzka.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
          //scene.entities.push(new ExplosiveProjectile,this.parent,this.entity.getRight(), this.entity.y, 30,15,this.parent.facing*30, 0, 0, "red", 15));
          createObject(ExplosiveProjectile,this.parent,this.entity.getRight(), this.entity.y, 30,15,this.parent.facing*30, 0, 0, "red", 15);
        }
        if(this.parent.facing == -1) {
          //scene.entities.push(new ExplosiveProjectile(this.parent, this.entity.x - 20 , this.entity.y, 30,15,this.parent.facing*30, 0, 0,"red", 15));
          createObject(ExplosiveProjectile, this.parent, this.entity.x - 20 , this.entity.y, 30,15,this.parent.facing*30, 0, 0,"red", 15);
        }
    }
}

BeamCannon.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function BeamCannon(cx, cy) {
    this.width = 30
    this.height = 16
    this.sprite = BMC;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 5;
    this.atkHold = true;

    this.maxAmmo = 15;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

BeamCannon.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(BeamProjectile, this.parent,this.entity.getRight(), this.entity.y, 300,10,this.parent.facing, 0,0,"pink");
        }
        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(BeamProjectile, this.parent, this.entity.x - 300 , this.entity.y, 300,10,this.parent.facing, 0,0, "pink");
        }
    }
}

StickyGun.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function StickyGun(cx, cy) {
    this.width = 35
    this.height = 18
    this.sprite = STK;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 5;
    this.atkHold = false;

    this.maxAmmo = 4;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

StickyGun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
    var stky = new sound("audioFiles/sfx/launcher.mp3", false, 1);
    stky.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(StickyProjectile, this.parent,this.entity.getRight(), this.entity.y, 20,20,this.parent.facing, 0,0,"green");
        }
        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(StickyProjectile, this.parent, this.entity.x -20 , this.entity.y, 20,20,this.parent.facing, 0,0, "green");
        }
    }
}

Revolver.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function Revolver(cx, cy) {
    this.width = 20
    this.height = 15
    this.sprite = RLV;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 10;
    this.atkHold = false;

    this.maxAmmo = 6;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

Revolver.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        var rev =  new sound("audioFiles/sfx/revolver.mp3", false, 1);
        rev.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 15,8,this.parent.facing, 0,0,"Red",20);
        }
        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(Projectile, this.parent, this.entity.x -20 , this.entity.y, 10,5,this.parent.facing, 0,0, "Red",20);
        }
    }
}

KnockbackGun.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function KnockbackGun(cx, cy) {
    this.width = 20
    this.height = 20
    this.sprite = KBG;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 31;
    this.offsetY = 20;
    this.atkDelay = 15;
    this.atkHold = false;

    this.maxAmmo = 5;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

KnockbackGun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
    var knck =  new sound("audioFiles/sfx/knockback.mp3", false, 1);
        knck.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        this.offset = -this.offset;
        if(this.offset < 0) this.offset = -(Math.random(6) + 3);
        if(this.parent.facing == 1) {
            //scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(KnockProjectile, this.parent,this.entity.getRight() + 10, this.entity.y, 10,10,this.parent.facing, 0,7,"grey");
        }
        if(this.parent.facing == -1) {
            //scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
            createObject(KnockProjectile, this.parent, this.entity.x - 20, this.entity.y, 10,10,this.parent.facing, 0,7,"grey");
        }
    }
}

HornGun.prototype = Object.create(Gun.prototype)
function HornGun(cx,cy) {
    this.width = 30;
    this.height = 15;
    this.sprite = HRN;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;

    this.maxAmmo = 5;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 70;
}

HornGun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        var horn = new sound("audioFiles/sfx/horn.mp3", false, 1);
    horn.play();
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0, 0);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.10, 0);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.10, 0);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.05, 0);
            createObject(Projectile, this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.05, 0);
        }
        if(this.parent.facing == -1) {
            createObject(Projectile, this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0, 0);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.10, 0);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.10, 0);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.05, 0);
            createObject(Projectile, this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.05, 0);
        }
    }
}
