function Menu(){
  this.active = false;
  this.menuOption = 0;
  this.scene = null;
  this.options = null;
  this.cSelect = null;

  this.Start = function(){
    this.active = true;
  }
  this.Draw = function() {
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);

    if(this.menuOption == 0){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(100,100,250,100);

    if(this.menuOption == 1){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(120,210,250,100);

    if(this.menuOption == 2){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(140,320,250,100);

    if(this.menuOption == 3){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(100,430,250,100);

    if(this.options != null){
      this.options.Draw();
    }
    if(this.cSelect != null){
      this.cSelect.Draw();
    }
  }

  this.Update = function(){
    if (this.active){
        if (input.keyPress(38) && this.menuOption > 0){
              this.menuOption -= 1;
        }
        else if (input.keyPress(40) && this.menuOption < 3){
              this.menuOption +=1;
        }


      if(this.menuOption == 1 && input.keyPress(32))
      {

        this.cSelect = new CSelect();
        this.active = false;
        this.cSelect.Start();
      }

      else if (this.menuOption == 3 && input.keyPress(32)){
          this.options = new Options();
          this.options.Start();
          this.active = false;
      }

      if(this.options != null){
        this.options.Update();
      }
      if(this.cSelect != null){
        this.cSelect.update();
      }
    }// end active loop
  }//end update
}//end menu
