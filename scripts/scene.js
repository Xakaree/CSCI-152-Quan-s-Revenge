
var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,2,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,3,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var map2 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,6,0,0,0,0,0,6,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
/*
Handles all objects, updates and draw calls
*/
function Scene() {
    this.entities = []; //list of entities
    this.solidentities = [];
    this.playersPassed = [];
    this.collisions = []; //list of collision to resolve
    this.camera = new Camera();

    this.PassPlayers = function(selection){
      for (var i = 0; i < selection.length; i++) {
        this.playersPassed[i] = selection[i];
      }
      //console.log(this.playersPassed[0]);
    }

    this.loadMap = function(map) {
        this.entities = [];
        this.solidentities = [];
        this.players = [];

        for(var i = 0; i < map.length; i++) {
            for(var j = 0; j < map[i].length; j++) {
                switch(map[i][j]) {
                    case 0:
                        break;
                    case 1:
                        this.solidentities.push(new SolidTile(j,i, 1,1));
                        break;
                    case 2:
                        this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,p1controls, QSsprite));
                        break;
                    case 3:
                        this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,p2controls, GZsprite));
                        break;
                    case 4:
                        this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,p3controls, SHsprite));
                        break;
                    case 5:
                        this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,p4controls, LCsprite));
                        break;
                    case 6:
                        this.entities.push(new TommyGun(j, i, 36, 13));
                        break;

                }
            }
        }

        this.entities.push(new deathTile(-500*tileScale,height+500*tileScale,width,1));
    }

    //runs at start of scene
    this.Start = function() {
        this.loadMap(map);
    }

    /*
    runs update functions of each entity and then checks and resolve collisions
    */
    this.Update  = function() {
        if(input.keyPress(82)) {
            this.loadMap(map);
        }

        for(var i = 0; i < this.players.length; i++) {
            this.players[i].Update();
        }
        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].Update();
        }
        for(var i = 0; i < this.solidentities.length; i++) {
            this.solidentities[i].Update();
        }
        this.checkCollisions();
        this.resolveCollisions();

    }

    /*
    checks for collision between entities
    adds collisions to this.collisions for resolution
    */
    var distTo = function(a, b) {
        return Math.sqrt(Math.pow((a.entity.getMidX() - b.entity.getMidX()),2) + Math.pow((a.entity.getMidY() - b.entity.getMidY()),2));
    }

    this.checkCollisions = function() {
        this.collisions = []; //reset collision list

        for(var i = 0; i < this.players.length; i++) {
            if(!this.players[i].entity.active) {
                continue;
            }
            var c = [0, distTo(this.players[i], this.solidentities[0])];
            for(var j = 0; j < this.solidentities.length; j++) {
                if(c[1] > distTo(this.players[i], this.solidentities[j])) {
                    c = [j, distTo(this.players[i], this.solidentities[j])];
                }
            }
            if(collisionCheck(this.players[i], this.solidentities[c[0]])) {
                //this.collisions.push([this.players[i], this.solidentities[c[0]]]);
                collision(this.players[i], this.solidentities[c[0]]);
                i--;
            }
        }

        for(var i = 0; i < this.entities.length; i++) {
            if(!this.entities[i].entity.active) {
                continue;
            }
            var c = [0, distTo(this.entities[i], this.solidentities[0])];
            for(var j = 0; j < this.solidentities.length; j++) {
                if(c[1] > distTo(this.entities[i], this.solidentities[j])) {
                    c = [j, distTo(this.entities[i], this.solidentities[j])];
                }
            }
            if(collisionCheck(this.entities[i], this.solidentities[c[0]])) {
                //this.collisions.push([this.entities[i], this.solidentities[c[0]]]);
                collision(this.entities[i], this.solidentities[c[0]]);
                i--;
            }
        }

        for(var i = 0; i < this.players.length; i++) {
            if(!this.players[i].entity.active) continue;
            for(var j = 0; j < this.entities.length; j++) {
                if(!this.entities[j].entity.active) continue;
                    if(collisionCheck(this.players[i], this.entities[j])) {
                        this.collisions.push([this.players[i], this.entities[j]]);
                    }
            }
        }


        /*for(var i = 0; i < this.entities.length; i++) {
            if(!this.entities[i].entity.active) continue;
            for(var j = i+1; j < this.entities.length; j++) {
                if(!this.entities[j].entity.active) continue;
                    if(collisionCheck(this.entities[i], this.entities[j])) {
                        this.collisions.push([this.entities[i], this.entities[j]]);
                    }
            }
        }*/
    }

    //resolve all collisions in this.collisions
    this.resolveCollisions = function() {
        for(var i = 0; i < this.collisions.length; i++) {
            collision(this.collisions[i][0], this.collisions[i][1]);
        }
    }

    this.drawHealth = function() {
        for(var i = 0; i < this.players.length; i++) {
            //ctx1.fillStyle = "grey";
            //ctx1.fillRect(canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 40 + this.camera.y, 40,30);


            ctx1.fillStyle  = "black";
            ctx1.font = "30px Arial";
            if(this.players[i].isAlive) ctx1.drawImage(this.players[i].sprite.v1portrait, 0,0,32,32, canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 40 + this.camera.y, 64,64)
            else ctx1.fillText("X", canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 15 + this.camera.y);




            //if(this.players[i].isAlive) ctx1.fillText("P" + (i+1).toString(), canvas.width/4 * i + 15 + this.camera.x, canvas.height*7/8 - 15 + this.camera.y);
            //else ctx1.fillText("X", canvas.width/4 * i + 15 + this.camera.x, canvas.height*7/8 - 15 + this.camera.y);

            ctx1.fillRect(canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 5 + this.camera.y, 100 * 2.5 + 10, 25 + 10);
            ctx1.fillStyle  = "grey";
            ctx1.fillRect(canvas.width/4 * i + this.camera.x + 20, canvas.height*8/9 + this.camera.y, 100 * 2.5, 25);
            if(this.players[i].health < 40) ctx1.fillStyle  = "red";
            else if(this.players[i].health < 70) ctx1.fillStyle  = "yellow";
            else ctx1.fillStyle  = "green";
            ctx1.fillRect(canvas.width/4 * i + this.camera.x + 20, canvas.height*8/9 + this.camera.y, Math.max(0,this.players[i].health * 2.5), 25);
        }
    }

    /*
    clears canvas and runs draw function for each object
    */
    this.Draw = function() {
        ctx1.clearRect(0,0,canvas.width,canvas.height);


        ctx0.fillStyle = "#0f7dc6";
        ctx0.fillRect(0,0,width,height);

        ctx1.save();
        ctx0.save();

        this.camera.Update(this.players);

        ctx0.translate(-this.camera.x, -this.camera.y);
        ctx1.translate(-this.camera.x, -this.camera.y);

        for(var i = 0; i < this.solidentities.length; i++) {
            this.solidentities[i].Draw();
        }
        for(var i = 0; i < this.players.length; i++) {
            this.players[i].Draw();
        }
        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].Draw();
        }


        this.drawHealth();

        ctx0.restore();
        ctx1.restore();
    }
}
