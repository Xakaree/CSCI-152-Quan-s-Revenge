function Menu(){
  this.active = false;
  this.menuOption = 0;
  this.scene = null;
  this.options = null;

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
    ctx1.font = "30px Comic Sans";
    ctx1.fillStyle = "white";
    //ctx1.fillText("Player Select",130,165);


    if(this.menuOption == 1){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(120,210,250,100);
    ctx1.font = "30px Comic Sans";
    ctx1.fillStyle = "white";
    //ctx1.fillText("Options",170 ,275);

    if(this.options != null){
      this.options.Draw();
    }
  }

  this.Update = function(){
    if (this.active){
        if (input.keyPress(38) && this.menuOption > 0){
              this.menuOption -= 1;
        }
        else if (input.keyPress(40) && this.menuOption < 1){
              this.menuOption +=1;
        }

      if(this.menuOption == 0 && input.keyPress(32))
      {
        //character select
      }
      else if (this.menuOption == 1 && input.keyPress(32)){
        input.resetKeys();
        this.options = new Options();
        this.active = false;
        this.options.Start();
      }


    }// end active loop
    if(this.options != null){
      this.options.Update();
    }
  }//end update
}//end menu
