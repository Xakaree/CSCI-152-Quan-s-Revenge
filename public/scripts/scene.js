var map = [
    [1,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,7,7,7,7,1,0,0,0,0,0],
    [1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,6,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,7,7,7,7,7,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,6,0,0,0],
    [1,0,0,0,0,0,0,1,7,7,7,7,7,7,7,7,7,7,1,0,0,0,0,0,0,0,0,0,1,7,7,7,7,7,7,7,7,7,7,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,5,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,4,0,1,0,0,0,0,0,0,0,0,0,0,1,7,7,7,7,7,7,7,7,7,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,7,7,7,7,7,7,7,7,7,7,7,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1]
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
var map3 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,2,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,3,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
var map3 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,2,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,3,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
/*
Handles all objects, updates and draw calls
*/
function Scene() {
    this.entities = []; //list of entities
    this.solidentities = [];
    this.playersPassed = [];
    this.collisions = []; //list of collision to resolve
    this.items = [TommyGun, Shotgun, Flamethrower, Lazer,Freeze,Bazooka];
    this.maps= [map,map,map,map];
    this.camera = new Camera();
    this.currStage  = 0;
    this.para =  null;
    this.active = true;

    this.win = false;
    this.wincnt = 0;
    this.winTime = 240;
    this.winner;
}

//runs at start of scene
Scene.prototype.Start = function() {
    this.loadMap(this.maps[this.currStage]);
    this.para = new Parallax(this.camera, stageData[this.currStage].background ,stageData[this.currStage].midground, stageData[this.currStage].foreground, stageData[this.currStage].gradient,stageData[this.currStage].objs ); // beta features

}

Scene.prototype.PassPlayers = function(selection){
  for (var i = 0; i < selection.length; i++) {
    this.playersPassed[i] = selection[i];
  }
}

Scene.prototype.loadMap = function(map) {
    this.entities = [];
    this.solidentities = [];
    this.players = [];

    for(var i = 0; i < map.length; i++) {
        for(var j = 0; j < map[i].length; j++) {
            switch(map[i][j]) {
                case 0:
                    break;
                case 1:
                    this.solidentities.push(new SolidTile(j,i, 1,1,MSCAFF));
                    break;
                case 2:
                    if(this.playersPassed[0]) this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,this.playersPassed[0][1], this.playersPassed[0][0]));
                    break;
                case 3:
                    if(this.playersPassed[1]) this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,this.playersPassed[1][1], this.playersPassed[1][0]));
                    break;
                case 4:
                    if(this.playersPassed[2]) this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,this.playersPassed[2][1], this.playersPassed[2][0]));
                    break;
                case 5:
                    if(this.playersPassed[3]) this.players.push(new Player(j*tileSize,i*tileSize,tileSize,tileSize,this.playersPassed[3][1], this.playersPassed[3][0]));
                    break;
                case 6:
                    var k = Math.floor(Math.random() * this.items.length);
                    this.entities.push(new this.items[k](j, i));
                    break;
                case 7:
                    this.solidentities.push(new SolidTile(j,i, 1,1,IRON));
                    break;
            }
        }
    }

    this.entities.push(new deathTile(-500*tileScale,height+500*tileScale,width,1));
}

/*
runs update functions of each entity and then checks and resolve collisions
*/
Scene.prototype.Update  = function() {

    if(input.keyPress(82)) {
        this.loadMap(this.maps[this.currStage]);
    }
    this.para.Update();

    if(this.active) {
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

        if(!this.win) this.checkWin();
    }

    if(this.win) {
        this.wincnt++;
        if(this.wincnt >= this.winTime) {
            this.win = false;
            this.wincnt = 0;
            this.loadMap(this.maps[this.currStage]);
        }
    }

}

/*
checks for collision between entities
adds collisions to this.collisions for resolution
*/
Scene.prototype.distTo = function(a, b) {
    return Math.sqrt(Math.pow((a.entity.getMidX() - b.entity.getMidX()),2) + Math.pow((a.entity.getMidY() - b.entity.getMidY()),2));
}

Scene.prototype.checkWin = function() {
    var cnt = 0;
    var ind;
    for(var i = 0; i < this.players.length; i++) {
        if(this.players[i].health > 0) {
            cnt++;
            ind = i;
        }
    }
    if(cnt <= 1) {
        this.winner = ind + 1;
        this.win = true;

    }
}

Scene.prototype.checkCollisions = function() {
    this.collisions = []; //reset collision list

    for(var i = 0; i < this.players.length; i++) {
        if(!this.players[i].entity.active) {
            continue;
        }
        var c = [0, this.distTo(this.players[i], this.solidentities[0])];
        for(var j = 0; j < this.solidentities.length; j++) {
            if(c[1] > this.distTo(this.players[i], this.solidentities[j])) {
                c = [j, this.distTo(this.players[i], this.solidentities[j])];
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
        var c = [0, this.distTo(this.entities[i], this.solidentities[0])];
        for(var j = 0; j < this.solidentities.length; j++) {
            if(c[1] > this.distTo(this.entities[i], this.solidentities[j])) {
                c = [j, this.distTo(this.entities[i], this.solidentities[j])];
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
Scene.prototype.resolveCollisions = function() {
    for(var i = 0; i < this.collisions.length; i++) {
        collision(this.collisions[i][0], this.collisions[i][1]);
    }
}

Scene.prototype.drawHealth = function() {
    for(var i = 0; i < this.players.length; i++) {
        //ctx1.fillStyle = "grey";
        //ctx1.fillRect(canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 40 + this.camera.y, 40,30);


        ctx1.fillStyle  = "black";
        ctx1.font = "30px Arial";
        if(this.players[i].isAlive) ctx1.drawImage(this.players[i].sprite.portrait, 0,0,32,32, canvas.width/4 * i + 15 + this.camera.x, canvas.height*8/9 - 40 + this.camera.y, 64,64)
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

Scene.prototype.drawWin = function() {
    ctx1.globalAlpha = 0.5;
    ctx1.fillStyle = "black";
    ctx1.fillRect(this.camera.x,this.camera.y,width,height);
    ctx1.globalAlpha = 1.0;

    ctx1.fillStyle = "white";
    ctx1.font = "80px Arial";
    ctx1.fillText("Player " + this.winner + " Wins!", this.camera.x + width/3, this.camera.y + height/2);
}

/*
clears canvas and runs draw function for each object
*/
Scene.prototype.Draw = function() {
    ctx1.clearRect(0,0,canvas.width,canvas.height);

    ctx0.fillStyle = "#0f7dc6";
    ctx0.fillRect(0,0,width,height);

    ctx1.save();
    ctx0.save();
    this.camera.Update(this.players);
    this.para.Draw();

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

    if(this.win) {
        this.drawWin();
    }

    ctx0.restore();
    ctx1.restore();
}
