 

function Stage_1(){

    this.entities = []; //list of entities
    this.solidentities = [];
    this.playersPassed = [];
    this.collisions = []; //list of collision to resolve
    this.camera = new Camera();
    
    var plat1 = new Image(1,1);
    var plat2 = new Image(1, 1);
    var cloud1 = new Image(1, 1);
    var cloud2 = new Image(1, 1);
    var cloud3 = new Image(canvas.height, canvas.width);
    
    
    plat1.src = "Images/platform_1.png";
    plat2.src = "Images/platform_2.png";
    cloud1.src = "Images/cloud1.PNG";
    cloud2.src = "Images/cloud2.PNG";
    cloud3.src = "Images/cloud3.PNG";
    
    
    this.plyPos =[50,50]// [(canvas.width/tileSize)/6, (canvas.height/tileSize) - ((canvas.height/tileSize)/6)   ];
    this.plat1Pos =  [0, 10];
    this.plat2Pos =  [0, 3];
    this.plat3Pos =  [0, 0];
   
   
   
    Stage_1.prototype.Start =  function(){
    this.loadMap();
   }
   
    Stage_1.prototype.PassPlayers = function(selection){
   
   for(var i = 0; i < selection.length; i++){
   this.playersPassed[i] = selection[i];
   }
}

    Stage_1.prototype.loadMap = function(){
    this.entities = [];
    this.solidentities = [];
    this.players = [];
     this.players.push(new Player(tileSize,tileSize,tileSize,tileSize,p1controls, this.playersPassed[0]));
//     this.solidentities.push(new SolidTile(this.plat3Pos[0], this.plat3Pos[1], (canvas.width/tileSize)/3, 1));
//     this.solidentities.push(new SolidTile(this.plat2Pos[0], this.plat2Pos[1], (canvas.width/tileSize)/4, 1));
     this.solidentities.push(new SolidTile(this.plat1Pos[0], this.plat1Pos[1], (canvas.width/tileSize)/1.5, 1));
//     
}

    Stage_1.prototype.Update  = function() {
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

    Stage_1.prototype.distTo = function(a, b) {
    return Math.sqrt(Math.pow((a.entity.getMidX() - b.entity.getMidX()),2) + Math.pow((a.entity.getMidY() - b.entity.getMidY()),2));
    }

    Stage_1.prototype.checkCollisions = function() {
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

    Stage_1.prototype.resolveCollisions = function() {
    for(var i = 0; i < this.collisions.length; i++) {
        collision(this.collisions[i][0], this.collisions[i][1]);
    }
}

    Stage_1.prototype.Draw = function() {
    
        var divider = 10;
        ctx1.clearRect(0,0,canvas.width,canvas.height);
        ctx0.clearRect(0,0,canvas.width,canvas.height);
        
        ctx1.save();
        ctx0.save();
        
        var grd = ctx1.createRadialGradient
        (	canvas.width/divider,canvas.height/divider,150,
	        canvas.width/divider,canvas.height/divider,300
        );

        grd.addColorStop(0,"yellow");
        grd.addColorStop(1,"#28D2F7");
        
        ctx1.fillStyle = grd;
        ctx1.fillRect(0,0,width,height);
        
       ctx1.drawImage(cloud1, 3*tileSize, 1*tileSize, 400, 200);
       ctx1.drawImage(cloud3, 19*tileSize, 10*tileSize, 400, 200);
       ctx1.drawImage(cloud1, 35*tileSize, 3*tileSize, 400, 200);
       ctx1.drawImage(cloud2, 20*tileSize, 15*tileSize, 400, 200);
       ctx1.drawImage(cloud3, 2*tileSize, 10*tileSize, 400, 200);
       ctx1.drawImage(cloud2, 2*tileSize, 19*tileSize, 400, 200);
       ctx1.drawImage(cloud1, 20*tileSize, 4*tileSize, 400, 200);

    this.camera.Update(this.players);

    ctx0.translate(-this.camera.x, -this.camera.y);
    ctx1.translate(-this.camera.x, -this.camera.y);

    
     ctx1.shadowColor = 'black';
     ctx1.shadowBlur =   10;

     ctx1.drawImage(cloud1, -20*tileSize, -5*tileSize, 600, 300);
     ctx1.drawImage(cloud3, 12*tileSize, 16*tileSize, 400, 200);
     ctx1.drawImage(cloud1, 9*tileSize, 2*tileSize, 400, 200);
//     ctx1.drawImage(cloud2, 6*tileSize, 14*tileSize, 400, 200);
     ctx1.drawImage(cloud3, 26*tileSize, 3*tileSize, 600, 200);
//     ctx1.drawImage(cloud2, 22*tileSize, 19*tileSize, 400, 200);
     ctx1.drawImage(cloud1, 16*tileSize, 14*tileSize, 400, 200);
    
    
    for(var i = 0; i < this.solidentities.length; i++) {
        this.solidentities[i].Draw();
    }
    
    // Draw platform images 
    //ctx1.drawImage(plat2, (this.plat1Pos[0]*tileSize)-65, (this.plat1Pos[1]*tileSize)-25, 1000,155);
    //ctx1.drawImage(plat1, (this.plat2Pos[0]*tileSize)-65, (this.plat2Pos[1]*tileSize)-25, 500,155);
    //ctx1.drawImage(plat2, (this.plat3Pos[0]*tileSize)-65, (this.plat3Pos[1]*tileSize)-25, 550,160);
    for(var i = 0; i < this.players.length; i++) {
        this.players[i].Draw();
    }
    for(var i = 0; i < this.entities.length; i++) {
        this.entities[i].Draw();
    }
    
    

    ctx0.restore();
    ctx1.restore();
}

}