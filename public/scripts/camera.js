function Camera() { 
    this.x = 0.0;
    this.y = 0.0;
    this.rx = 0.0;
    this.ry = 0.0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.lowX = width;
    this.lowY = height;
    this.highX = 0;
    this.highY = 0;
    this.midX = 0;
    this.midY = 0;

    this.moveSpeed = 0.1;
    scale = 0.8;
}

Camera.prototype.initPos = function(players) {
    if(this.lowX < this.x + 200 || this.lowY < this.y || this.highX > this.x + this.width - 200 || this.highY > this.y + this.height) {
        if(scale > 0.1) scale -= 0.3 * interval;
    }
    if(this.lowX > this.x + this.width/4 || this.highX < this.x + (3*this.width/4)) {
        if(scale < 1.0) scale += 0.3 *interval;
    }

    this.lowX = Infinity;
    this.lowY = Infinity;
    this.highX = -Infinity;
    this.highY = -Infinity;
    for(var i = 0; i < players.length; i++) {
        if(!players[i].isAlive) continue;
        this.lowX = Math.min(this.lowX, players[i].entity.getMidX() * scale);
        this.lowY = Math.min(this.lowY, players[i].entity.getMidY() * scale);
        this.highX = Math.max(this.highX, players[i].entity.getMidX() * scale);
        this.highY = Math.max(this.highY, players[i].entity.getMidY() * scale);

    }

    if(this.lowX != Infinity) {
        this.midX = ((this.lowX + this.highX) / 2);
        this.midY = ((this.lowY + this.highY) / 2);
    }
    this.x = this.midX - (this.width/2);
    this.y = this.midY - (this.height/2);
} 

Camera.prototype.Update = function(players) {

    if(this.lowX < this.x + 200 || this.lowY < this.y || this.highX > this.x + this.width - 200 || this.highY > this.y + this.height) {
        if(scale > 0.8) scale -= 0.3 * interval;
    }
    if(this.lowX > this.x + this.width/4 || this.highX < this.x + (3*this.width/4)) {
        if(scale < 1.0) scale += 0.3 *interval;
    }

    this.lowX = Infinity;
    this.lowY = Infinity;
    this.highX = -Infinity;
    this.highY = -Infinity;
    for(var i = 0; i < players.length; i++) {
        if(!players[i].isAlive) continue;
        this.lowX = Math.min(this.lowX, players[i].entity.getMidX() * scale);
        this.lowY = Math.min(this.lowY, players[i].entity.getMidY() * scale);
        this.highX = Math.max(this.highX, players[i].entity.getMidX() * scale);
        this.highY = Math.max(this.highY, players[i].entity.getMidY() * scale);

    }

    if(this.lowX != Infinity) {
        this.midX = ((this.lowX + this.highX) / 2);
        this.midY = ((this.lowY + this.highY) / 2);
    }
    this.x = this.x + this.moveSpeed * ((this.midX - (this.width/2) - this.x));
    this.y = this.y + this.moveSpeed * ((this.midY - (this.height/2) - this.y));

    if(this.x < -5*tileSize) this.x = -5*tileSize;
    if(this.x + this.width > scene.maps[scene.currStage][0].length*tileSize + 5*tileSize) this.x = scene.maps[scene.currStage][0].length*tileSize + 5*tileSize - this.width;

    if(this.y+this.height > scene.maps[scene.currStage].length*tileSize + 5*tileSize) this.y = scene.maps[scene.currStage].length*tileSize + 5*tileSize - this.height;
    //console.log(scene.tilemap[0].length*tileSize);
    //console.log(this.y+this.height);
}