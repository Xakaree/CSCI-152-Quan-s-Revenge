//Game camera - NOT FINISHED

function Camera() { 
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;

    this.Update = function(player) {
        this.x = Math.floor(player.entity.x + (player.entity.width/2) - (this.width/2));
        this.y = Math.floor(player.entity.y + (player.entity.height/2) - (this.height/2));

        if(this.x < 0) {
            this.x = 0;
        }
        if(this.x + this.width > width) {
            this.x = width - this.width;
        }
        if(this.y < 0) {
            this.y = 0;
        }
        if(this.y + this.height > height) {
            this.y = height - this.height;
        }
    }
}