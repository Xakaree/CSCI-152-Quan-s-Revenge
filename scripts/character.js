function CSelect(){
  this.active = false;
  this.scene = null;
  this.selection = []; // array used for the player's character selections
  this.versions = 2; // current available versions of characters

  this.char1 = {
    x: width/15.85,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 0,
    color: 0
  }
  this.char2 = {
    x: width/3.185,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 1,
    color: 0
  }
  this.char3 = {
    x: width/1.877,
    y: height/2,
    w: 160,
    h: 192.5,
    character:2,
    color:0
  }
  this.char4 = {
    x: width/1.28,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 3,
    color: 0
  }

  this.Update = function(){
    if (this.active){

    if (input.keyPress(38))
    {
          this.char1.color = (this.char1.color + 1)% this.versions;
    }
      else if (input.keyPress(40))
    {
          this.char1.color = (this.char1.color -1)% this.versions;
          if (this.char1.color < 0){
            this.char1.color = this.versions-1;
          }
    }

    if (input.keyPress(37)) {
      this.char1.color = 0;
      this.char1.character = (this.char1.character-1)% this.characters.length;
    if (this.char1.character < 0){
      this.char1.character = this.characters.length-1;
    }
    }
    else if (input.keyPress(39)) {
          this.char1.color = 0;
          this.char1.character = (this.char1.character+1)% this.characters.length;
    }

    if(input.keyPress(32)){
      this.active = false;
      this.scene = scene;
      this.scene.Start();
    }
  }
  if(this.scene != null){
    this.scene.Update();
  }
}
  this.Draw = function(){
    if (this.active){
      ctx1.clearRect(0,0,width,height);

    ctx1.fillStyle = "navy";   // color of character background
// This is for char1

    ctx1.fillRect(this.char1.x, this.char1.y, this.char1.w, this.char1.h);

    ctx1.fillRect(150,height/5,150,150);

    if (this.char1.color == 0) {
      ctx1.drawImage(this.characters[this.char1.character].v1Sprite,0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );
    }
   else if(this.char1.color == 1){
    ctx1.drawImage(this.characters[this.char1.character].v2Sprite,0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );
  }

//

//This is for char2
//------------------------------------------------------------------------------------------
    ctx1.fillRect(this.char2.x, this.char2.y, this.char2.w, this.char2.h);
    //ctx1.fillStyle = "red";
    ctx1.fillRect(350,height/5,150,150);

    if (this.char2.color == 0) {
      ctx1.drawImage(this.characters[this.char2.character].v1Sprite,0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );
    }
    else if(this.char2.color == 1){
    ctx1.drawImage(this.characters[this.char2.character].v2Sprite,0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );
  }

// This is for char 3
//--------------------------------------------------------------------------------------------------
    ctx1.fillRect(this.char3.x, this.char3.y, this.char3.w, this.char3.h);
    //ctx1.fillStyle = "green";
    ctx1.fillRect(550,height/5,150, 150);

    if (this.char3.color == 0) {
      ctx1.drawImage(this.characters[this.char3.character].v1Sprite,0, 0, 64, 64,this.char3.x, this.char3.y, this.char3.w, this.char3.h );
    }
    else if (this.char3.color == 1) {
      ctx1.drawImage(this.characters[this.char3.character].v2Sprite,0, 0, 64, 64,this.char3.x, this.char3.y, this.char3.w, this.char3.h );
    }



//This is for char4
//---------------------------------------------------------------------------------------------------------------

    ctx1.fillRect(this.char4.x, this.char4.y, this.char4.w, this.char4.h);
    //ctx1.fillStyle = "blue";
    ctx1.fillRect(750,height/5,150,150);

    if (this.char4.color == 0) {
      ctx1.drawImage(this.characters[this.char4.character].v1Sprite,0, 0, 64, 64,this.char4.x, this.char4.y, this.char4.w, this.char4.h );
    }
    else if (this.char4.color == 1) {
      ctx1.drawImage(this.characters[this.char4.character].v2Sprite,0, 0, 64, 64,this.char4.x, this.char4.y, this.char4.w, this.char4.h );
    }


//-End of character select and color select
  }
  if(this.scene != null){
    this.scene.Draw();
  }
}
  this.characters = [LCsprite,QSsprite,GZsprite,SHsprite];

  this.Start = function(){
    this.active = true;
  }

}
