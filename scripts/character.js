function CSelect(){
  this.active = false;

  this.char1 = {
    x: width/15.85,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 0
  }
  this.char2 = {
    x: width/3.185,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 0
  }
  this.char3 = {
    x: width/1.877,
    y: height/2,
    w: 160,
    h: 192.5,
    character:0
  }
  this.char4 = {
    x: width/1.28,
    y: height/2,
    w: 160,
    h: 192.5,
    character: 0
  }

  this.Update = function(){
    if (this.active){

    if (input.keyPress(38))
    {
      this.char1.character = (this.char1.character+1)% this.characters.length;
    }
      //same for dow0
      // one more time for char2

    else if (input.keyPress(40))
    {
      this.char1.character = (this.char1.character +1)% this.characters.length;
    }
  }
}
  this.Draw = function(){
    if (this.active){
      ctx1.clearRect(0,0,width,height);
      
    ctx1.fillStyle = "navy";
    ctx1.fillRect(this.char1.x, this.char1.y, this.char1.w, this.char1.h);
    ctx1.drawImage(this.characters[this.char1.character],0, 0, 64, 64,this.char1.x, this.char1.y, this.char1.w, this.char1.h );

    ctx1.fillRect(this.char2.x, this.char2.y, this.char2.w, this.char2.h);
    ctx1.drawImage(this.characters[this.char2.character],0, 0, 64, 64,this.char2.x, this.char2.y, this.char2.w, this.char2.h );
    ctx1.fillRect(this.char3.x, this.char3.y, this.char3.w, this.char3.h);

    ctx1.fillRect(this.char4.x, this.char4.y, this.char4.w, this.char4.h);

  }
}

  this.characters = [QS1,QS2,LC1, LC2,SH1,SH2,];

  this.Start = function(){
    this.active = true;
  }

}
