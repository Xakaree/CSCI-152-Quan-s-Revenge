function VolumeOptions(background){
  this.active = false;
  this.toggle = 0;
  this.back = null;
  this.background = background;
  this.nav = new sound("audioFiles/sfx/changeColor.mp3", false , 1);
  this.select = new sound("audioFiles/sfx/charSelect.mp3", false , 1);

  this.map = {}
  this.Mapping = function(){
    this.map = {
    0:  new Slider(550,100,ctx1,battleList),
    1:  new Slider(550, 200,ctx1, battleList),
    2 : new Slider(550, 300,ctx1,menuList),
    3:  new Button(1000,600,ctx1,BACT, BNULL),
    }
    this.map[0].Select();
  }
  this.Start = function(){
    this.active = true;
    this.Mapping();
    }

  this.Draw = function(){
    if(this.active){
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height); //paint background white

    this.background.Draw();
    //draw sliders on screen
    for(let key in this.map)
    {
      this.map[key].Draw(); // draw all components
    }

    ctx1.fillStyle ="red";
    ctx1.fillText("Stage Music",200 ,125);
    ctx1.fillText("Sound Effects", 200, 225);
    ctx1.fillText("Menu Music", 200, 325);
  }//end active

  if(this.back != null){
    this.back.Draw();
  }
}//end draw

  this.Update = function(){
    if(this.active){
    this.background.Update();
      for(let key in this.map)
      {
        this.map[key].Update(); // update all componenets
      }

        ///switch between sliders
        if(input.getDown() && this.toggle < 3){
          this.nav.load();
          this.nav.play();
          this.map[this.toggle].Unselect();
          this.toggle += 1;
          this.map[this.toggle].Select();
        }
        else if (input.getUp()  && this.toggle > 0){
          this.nav.load();
          this.nav.play();
          this.map[this.toggle].Unselect();
          this.toggle -= 1;
          this.map[this.toggle].Select();
        }

        if (this.toggle == 3 && input.getAttack()) {
          this.select.play();
          input.resetKeys();
          this.back = new Options(this.background);
          this.back.Start();
          this.active = false;
          console.log("back start");
        }
    }// end active
    if(this.back != null){
      this.back.Update();
    }
  }//end update

} // end VolumeOptions
