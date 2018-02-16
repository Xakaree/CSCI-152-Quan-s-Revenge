/*
Handles all objects, updates and draw calls
*/
function Scene() {
    this.entities = []; //list of entities
    this.players = [];
    this.collisions = []; //list of collision to resolve
    this.camera = new Camera();

    //runs at start of scene
    this.Start = function() {

        //test objects - TEMPORARY
        var p1 = new Player(400,100,tileSize,tileSize,p1controls, "green");
        this.players.push(p1);
        this.entities.push(p1);
        var p2 = new Player(800,400,tileSize,tileSize,p2controls, "blue");
        this.players.push(p2);
        this.entities.push(p2);
        this.entities.push(new SolidTile(8,11,15,1));
        this.entities.push(new SolidTile(10,7,3,1));
        this.entities.push(new SolidTile(18,7,3,1));
        this.entities.push(new SolidTile(0,0,width/tileSize,1));
        this.entities.push(new SolidTile(0,height/tileSize - 1,width/tileSize,1));
        this.entities.push(new SolidTile(0,1,1,height/tileSize-2));
        this.entities.push(new SolidTile(width/tileSize-1,1,1,height/tileSize-2));
        this.entities.push(new rangeItem(14, 7, 26, 13));
        this.entities.push(new rangeItem(24, 18, 26, 13));
    }

    /*
    runs update functions of each entity and then checks and resolve collisions
    */
    this.Update  = function() {
        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].Update();
        }
        this.checkCollisions();
        this.resolveCollisions();

    }

    /*
    checks for collision between entities
    adds collisions to this.collisions for resolution
    */
    this.checkCollisions = function() {
        this.collisions = []; //reset collision list
        for(var i = 0; i < this.entities.length; i++) {
            if(!this.entities[i].entity.active) continue;
            for(var j = i+1; j < this.entities.length; j++) {
                if(!this.entities[j].entity.active) continue;
                    if(collisionCheck(this.entities[i], this.entities[j])) {
                        this.collisions.push([this.entities[i], this.entities[j]]);
                    }
            }
        }
    }

    //resolve all collisions in this.collisions
    this.resolveCollisions = function() {
        for(var i = 0; i < this.collisions.length; i++) {
            collision(this.collisions[i][0], this.collisions[i][1]);
        }
    }


    /*
    clears canvas and runs draw function for each object
    */
    this.Draw = function() {
        ctx1.clearRect(0,0,canvas.width,canvas.height);

        

        
        
        

        ctx1.save();
        ctx0.save();

        this.camera.Update(this.players);

        ctx0.translate(-this.camera.x, -this.camera.y);
        ctx1.translate(-this.camera.x, -this.camera.y);

        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].Draw();
        }

        

        ctx0.restore();
        ctx1.restore();
    }
}