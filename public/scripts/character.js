function CSelect(){
  this.active = false;
  this.stageselect = null;
  this.selection = []; // array used for the player's character selections
  this.versions = 2; // current available versions of characters
  //var inputNum = null;

  this.char1 = {
    controller: null,
    confirmed: false,
    x: width/15.85,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 0,
    color: 0
  }
  this.char2 = {
    controller: null,
    confirmed: false,
    x: width/3.185,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 1,
    color: 0
  }
  this.char3 = {
    controller: null,
    confirmed: false,
    x: width/1.877,
    y: height/2,
    w: 160,
    h: 192.5,
    character:2,
    color:0
  }
  this.char4 = {
    controller: null,
    confirmed: false,
    x: width/1.28,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 3,
    color: 0
  }

  this.getFreeChar = function() {
    if(this.char1.controller == null) return this.char1;
    else if(this.char2.controller == null) return this.char2;
    else if(this.char3.controller == null) return this.char3;
    else if(this.char4.controller == null) return this.char4;
    else return null;
  }

  this.checkController = function(controller) {
    if(this.char1.controller == controller || this.char2.controller == controller || this.char3.controller == controller || this.char4.controller == controller) return true;
    else return false;
  }

  this.checkReadyStart = function() {
    if(this.char1.controller != null && !this.char1.confirmed) return false;
    if(this.char2.controller != null && !this.char2.confirmed) return false;
    if(this.char3.controller != null && !this.char3.confirmed) return false;
    if(this.char4.controller != null && !this.char4.confirmed) return false;
    return true;
  }

  this.startGame = function() {
      this.active = false;

      if(this.char1.controller != null) this.selection.push([this.characters[this.char1.character][this.char1.color], this.char1.controller]);
      if(this.char2.controller != null) this.selection.push([this.characters[this.char2.character][this.char2.color], this.char2.controller]);
      if(this.char3.controller != null) this.selection.push([this.characters[this.char3.character][this.char3.color], this.char3.controller]);
      if(this.char4.controller != null) this.selection.push([this.characters[this.char4.character][this.char4.color], this.char4.controller]);

      input.resetKeys();
      this.stageselect = new StageSelect(this.selection); //save characters
      this.stageselect.Start();
  }

  this.checkInput = function(char) {
    if(char.controller) {
      if(!char.confirmed) {
        if (input.keyPress(char.controller.up)) // up
        {
              var colorSnd = new sound("audioFiles/sfx/changeColor.mp3", false, 1);
              colorSnd.play();
              char.color = (char.color + 1)% this.versions;
        }
        else if (input.keyPress(char.controller.down)) // down
        {
              var colorSnd = new sound("audioFiles/sfx/changeColor.mp3", false, 1);
              colorSnd.play();
              char.color = (char.color -1)% this.versions;
              if (char.color < 0){
                char.color = this.versions-1;
              }
        }

        else if (input.keyPress(char.controller.left)) { //left
              var nextChar = new sound("audioFiles/sfx/nextChar.mp3", false, 1);
              nextChar.play();
              char.color = 0;
              char.character = (char.character-1)% this.characters.length;
              if (char.character < 0){
                char.character = this.characters.length-1;
              }
        }
        else if (input.keyPress(char.controller.right)) { // right
              var nextChar = new sound("audioFiles/sfx/nextChar.mp3", false, 1);
              nextChar.play();
              char.color = 0;
              char.character = (char.character+1)% this.characters.length;
        }
      }

      if (input.keyPress(char.controller.attack)) {
            var charSelect = new sound("audioFiles/sfx/charSelect.mp3", false, 1);
            charSelect.play();
            if(this.checkReadyStart()) this.startGame();
            else if(char.confirmed == false) char.confirmed = true;
      }

      if(input.keyPress(char.controller.jump)) {
        if(char.confirmed == true) {
          char.confirmed = false;
        }
      }

    }
  }

  this.Update = function(){
    if (this.active){

    if(this.char1.controller == null || this.char2.controller == null || this.char3.controller == null || this.char4.controller == null) {
        var curchar = this.getFreeChar();
        var inp = input.getKeyPress();
        if(inp != null) {
          if(inp.constructor == Array) {
            if(inp[1] == 4 && !this.checkController(econtrols[inp[0]])) {
              curchar.controller = econtrols[inp[0]];
              input.resetKeys();
            }
          }
          else {
            if(inp == p1controls.attack && !this.checkController(p1controls)) {
            var joinSnd = new sound("audioFiles/sfx/joinSnd.mp3", false, 1);
              joinSnd.play();
              curchar.controller = p1controls;
              input.resetKeys();
            }
            else if(inp == p2controls.attack && !this.checkController(p2controls)) {
            var joinSnd = new sound("audioFiles/sfx/joinSnd.mp3", false, 1);
              joinSnd.play();
              curchar.controller = p2controls;
              input.resetKeys();
            }
            else if(inp == p3controls.attack && !this.checkController(p3controls)) {
            var joinSnd = new sound("audioFiles/sfx/joinSnd.mp3", false, 1);
              joinSnd.play();
              curchar.controller = p3controls;
              input.resetKeys();
            }
            else if(inp == p4controls.attack && !this.checkController(p4controls)) {
            var joinSnd = new sound("audioFiles/sfx/joinSnd.mp3", false, 1);
              joinSnd.play();
              curchar.controller = p4controls;
              input.resetKeys();
            }
          }
        }
    }

    this.checkInput(this.char1);
    this.checkInput(this.char2);
    this.checkInput(this.char3);
    this.checkInput(this.char4);
  }
  if(this.stageselect != null){
    this.stageselect.Update();
  }
}

  this.Draw = function(){
    if (this.active){
      ctx1.clearRect(0,0,width,height);

    //ctx1.fillStyle = "navy";   // color of character background
// This is for char1
    ctx1.fillStyle = "gray"; // change color
    if(this.char1.controller != null) ctx1.fillStyle = "navy";
    if(this.char1.confirmed == true) ctx1.fillStyle = "green";
    ctx1.fillRect(this.char1.x, this.char1.y, this.char1.w, this.char1.h);
    ctx1.fillRect(150,height/5,150,150);
    if(this.char1.controller != null) {

    ctx1.drawImage(this.characters[this.char1.character][this.char1.color].portrait,0, 0, 64, 64,200,height/4,150,150);
    //ctx1.fillStyle = "navy";

    ctx1.drawImage(this.characters[this.char1.character][this.char1.color].image,0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );

    ctx1.fillStyle = "white";
      ctx1.font = "40px Arial";
      ctx1.fillText(this.characters[this.char1.character][this.char1.color].name, this.char1.x-(this.characters[this.char1.character][this.char1.color].name.length), this.char1.y + 250);
    }
    else {
      ctx1.fillStyle = "black";
      ctx1.font = "20px Arial";
      ctx1.fillText("Press Attack", this.char1.x + 15, this.char1.y + 70);
      ctx1.fillText("to Join", this.char1.x + 15, this.char1.y + 90);
    }

    /*if (this.char1.color == 0) {
      ctx1.drawImage(this.characters[this.char1.character].image,0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );
    }
   else if(this.char1.color == 1){
    ctx1.drawImage(this.characters[this.char1.character].v2Sprite,0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );
  }*/

//

//This is for char2
//------------------------------------------------------------------------------------------
    ctx1.fillStyle = "gray"; // change color
    if(this.char2.controller != null) ctx1.fillStyle = "navy";
    if(this.char2.confirmed == true) ctx1.fillStyle = "green";
    ctx1.fillRect(this.char2.x, this.char2.y, this.char2.w, this.char2.h);
    ctx1.fillRect(350,height/5,150,150);
    if(this.char2.controller != null) {

    ctx1.fillStyle = "navy";

    ctx1.drawImage(this.characters[this.char2.character][this.char2.color].portrait,0, 0, 64, 64,400,height/4,150,150);

    ctx1.drawImage(this.characters[this.char2.character][this.char2.color].image,0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );

    ctx1.fillStyle = "white";
      ctx1.font = "40px Arial";
      ctx1.fillText(this.characters[this.char2.character][this.char2.color].name, this.char2.x-(this.characters[this.char2.character][this.char2.color].name.length), this.char2.y + 250);
    }
    else {
      ctx1.fillStyle = "black";
      ctx1.font = "20px Arial";
      ctx1.fillText("Press Attack", this.char2.x + 15, this.char2.y + 70);
      ctx1.fillText("to Join", this.char2.x + 15, this.char2.y + 90);
    }

    /*if (this.char2.color == 0) {
      ctx1.drawImage(this.characters[this.char2.character].image,0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );
    }
    else if(this.char2.color == 1){
    ctx1.drawImage(this.characters[this.char2.character].v2Sprite,0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );
  }*/

// This is for char 3
//--------------------------------------------------------------------------------------------------
    ctx1.fillStyle = "gray"; // change color
    if(this.char3.controller != null) ctx1.fillStyle = "navy";
    if(this.char3.confirmed == true) ctx1.fillStyle = "green";
    ctx1.fillRect(this.char3.x, this.char3.y, this.char3.w, this.char3.h);
    ctx1.fillRect(550,height/5,150, 150);
    if(this.char3.controller != null) {


    //ctx1.fillStyle = "navy";
    ctx1.drawImage(this.characters[this.char3.character][this.char3.color].portrait,0, 0, 64, 64,600,height/4,150, 150);

    ctx1.drawImage(this.characters[this.char3.character][this.char3.color].image,0, 0, 64, 64,this.char3.x, this.char3.y, this.char3.w, this.char3.h );

    ctx1.fillStyle = "white";
      ctx1.font = "40px Arial";
      ctx1.fillText(this.characters[this.char3.character][this.char3.color].name, this.char3.x-(this.characters[this.char3.character][this.char3.color].name.length), this.char3.y + 250);
    }



    else {
      ctx1.fillStyle = "black";
      ctx1.font = "20px Arial";
      ctx1.fillText("Press Attack", this.char3.x + 15, this.char3.y + 70);
      ctx1.fillText("to Join", this.char3.x + 15, this.char3.y + 90);
    }

    /*if (this.char3.color == 0) {
      ctx1.drawImage(this.characters[this.char3.character].image,0, 0, 64, 64,this.char3.x, this.char3.y, this.char3.w, this.char3.h );
    }
    else if (this.char3.color == 1) {
      ctx1.drawImage(this.characters[this.char3.character].v2Sprite,0, 0, 64, 64,this.char3.x, this.char3.y, this.char3.w, this.char3.h );
    }*/



//This is for char4
//---------------------------------------------------------------------------------------------------------------
    ctx1.fillStyle = "gray"; // change color
    if(this.char4.controller != null) ctx1.fillStyle = "navy";
    if(this.char4.confirmed == true) ctx1.fillStyle = "green";
    ctx1.fillRect(this.char4.x, this.char4.y, this.char4.w, this.char4.h);
    ctx1.fillRect(750,height/5,150,150);
    if(this.char4.controller != null) {

    ctx1.drawImage(this.characters[this.char4.character][this.char4.color].portrait,0, 0, 64, 64,800,height/4,150,150);
    //ctx1.fillStyle = "navy";

    ctx1.drawImage(this.characters[this.char4.character][this.char4.color].image,0, 0, 64, 64,this.char4.x, this.char4.y, this.char4.w, this.char4.h );

    ctx1.fillStyle = "white";
      ctx1.font = "40px Arial";
      ctx1.fillText(this.characters[this.char4.character][this.char4.color].name, this.char4.x-(this.characters[this.char4.character][this.char4.color].name.length), this.char4.y + 250);
    }

    else {
      ctx1.fillStyle = "black";
      ctx1.font = "20px Arial";
      ctx1.fillText("Press Attack", this.char4.x + 15, this.char4.y + 70);
      ctx1.fillText("to Join", this.char4.x + 15, this.char4.y + 90);
    }

    /*if (this.char4.color == 0) {
      ctx1.drawImage(this.characters[this.char4.character].image,0, 0, 64, 64,this.char4.x, this.char4.y, this.char4.w, this.char4.h );
    }
    else if (this.char4.color == 1) {
      ctx1.drawImage(this.characters[this.char4.character].v2Sprite,0, 0, 64, 64,this.char4.x, this.char4.y, this.char4.w, this.char4.h );
    }*/


//-End of character select and color select
    ctx1.fillStyle = "white";
    ctx1.font = "40px Arial";
    ctx1.fillText("Session Code", width*0.8, height*0.05);
    ctx1.fillText(sessionCode, width*0.8, height*0.1);
  }
  if(this.stageselect != null){
    this.stageselect.Draw();
  }
}
  this.characters = [[LCsprite,LCsprite2],[QSsprite,QSsprite2],[GZsprite,GZsprite2],[SHsprite,SHsprite2]];

  this.Start = function(){
    this.active = true;
  }

  }
