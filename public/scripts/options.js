function Options() {
  this.active = false;
  this.option = 0;
  this.controlMapping = null;
  this.VolumeOptions = null;
  this.back = null;
  this.specialMenu = null;
  this.map = {}

  this.Mapping = function(){
      this.map = {
        0 : new Button(100,100,ctx1,CACT,CNULL),
        1 : new Button(120,210,ctx1,SACT, SNULL),
        3 : new Button(1000,600,ctx1,BACT,BNULL),
        2 : new Button(100,320,ctx1, OPTACT, OPTNULL)
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
    if(this.active){
          if (input.getUp() && this.option > 0){
                this.option -= 1;
          }
          else if (input.getDown() && this.option < 3){
                this.option += 1;
          }

    this.map[this.option].Select();

  //process command
     if(input.getAttack() && this.option == 0){
       input.resetKeys();
       this.controlMapping = new SelectPlayer();
       this.controlMapping.Start();
       this.active = false;
     }
     else if(input.getAttack() && this.option == 1){
       input.resetKeys();
       this.VolumeOptions = new VolumeOptions();
       this.VolumeOptions.Start();
       this.active = false;
     }
     else if(this.option == 2 && input.getAttack())
     {
       input.resetKeys();
       this.specialMenu =  new specialMenu();
       this.active = false;
       this.specialMenu.Start();
     }

     if (this.option == 3 && input.getAttack()) {
       input.resetKeys();
       this.back = new Menu();
       this.back.Start();
       this.active = false;
       console.log("back start");
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
