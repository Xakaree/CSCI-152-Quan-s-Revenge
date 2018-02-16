//Game camera - NOT FINISHED

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

    this.Update = function(players) {

        if(this.lowX < this.x + 100 || this.lowY < this.y || this.highX > this.x + this.width - 100 || this.highY > this.y + this.height) {
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
            this.lowX = Math.min(this.lowX, players[i].entity.getMidX() * scale);
            this.lowY = Math.min(this.lowY, players[i].entity.getMidY() * scale);
            this.highX = Math.max(this.highX, players[i].entity.getMidX() * scale);
            this.highY = Math.max(this.highY, players[i].entity.getMidY() * scale);

        }
        this.midX = ((this.lowX + this.highX) / 2);
        this.midY = ((this.lowY + this.highY) / 2);
        console.log("low " + this.lowY.toString());
        console.log("high " + this.highY.toString());
        this.x = this.midX - (this.width/2);
        this.y = this.midY - (this.height/2);

        

        /*if(this.x < 0) {
            this.x = 0;
        }
        if(this.x + this.width > width * scale) {
            this.x = width - (this.width);
        }
        if(this.y < 0) {
            this.y = 0;
        }
        if(this.y + this.height > height * scale) {
            this.y = height - (this.height);
        }*/
    }
}