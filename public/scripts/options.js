function Options(background) {
  this.active = false;
  this.option = 0;
  this.controlMapping = null;
  this.VolumeOptions = null;
  this.back = null;
  this.specialMenu = null;
  this.map = {}
  this.background =background;
  this.selectSnd = new sound("audioFiles/sfx/charSelect.mp3", false, 1);
  this.nav = new sound("audioFiles/sfx/changeColor.mp3", false, 1);

  this.Mapping = function(){
      this.map = {
        0 : new Button(100,100,ctx1,CACT,CNULL),
        1 : new Button(120,210,ctx1,SACT, SNULL),
        2 : new Button(1000,600,ctx1,BACT,BNULL),
      };

      this.map[0].Select(); // first options should be selected
  }

  this.Start = function(){
    this.active = true;
    this.Mapping();
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      this.background.Draw();

      for(let key in this.map){ // call draw on all components
        this.map[key].Draw();
      }

    } // end active

    if(this.controlMapping != null){
      this.controlMapping.Draw();
    }
    if(this.back != null){
      this.back.Draw();
    }
    if(this.VolumeOptions != null){
      this.VolumeOptions.Draw();
    }
    if(this.specialMenu != null){
      this.specialMenu.Draw();
    }
  } // end draw

  this.Update = function(){
    this.map[this.option].Unselect();
    this.background.Update();
    if(this.active){
          if (input.getUp() && this.option > 0){
                this.nav.load();
                this.nav.play();
                this.option -= 1;
          }
          else if (input.getDown() && this.option < 2){
                this.nav.load();
                this.nav.play();
                this.option += 1;
          }

    this.map[this.option].Select();

  //process command
     if(input.getAttack() && this.option == 0){
       this.selectSnd.play();
       input.resetKeys();
       this.controlMapping = new SelectPlayer(this.background);
       this.background.Drive();
       this.controlMapping.Start();
       this.active = false;
     }
     else if(input.getAttack() && this.option == 1){
       this.selectSnd.play();
       input.resetKeys();
       this.VolumeOptions = new VolumeOptions(this.background);
       this.background.Drive();
       this.VolumeOptions.Start();
       this.active = false;
     }

    else if (this.option == 2 && input.getAttack()) {
        this.selectSnd.play();
       input.resetKeys();
       this.back = new Menu(this.background);
       this.back.Start();
       this.active = false;
     }

     }//end active

     if(this.controlMapping != null){
       this.controlMapping.Update();
     }
     if(this.VolumeOptions != null){
       this.VolumeOptions.Update();
     }
     if(this.back != null){
       this.back.Update();
     }
     if(this.specialMenu!= null){
       this.specialMenu.Update();
     }

  } // end update
} // end Options
