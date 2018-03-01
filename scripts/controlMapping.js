function controlMapping(){
  this.active = false;
  this.cmOption = 0;

  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      if(this.cmOption == 1){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,290,150,50);//up

      if(this.cmOption == 3){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,410,150,50);//down

      if(this.cmOption == 4){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(205,350,150,50);//left

      if(this.cmOption == 2){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(375,350,150,50);//right

      if(this.cmOption == 5){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(560,290,250,75); //jump

      if(this.cmOption == 6){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(560,385,250,75); //attack
    }//end active
  }// end draw

  this.Update = function(){
    if(this.active){
      if(input.keyPress(38) && this.cmOption == 1){
        this.cmOption = 5;
      }
      else if (input.keyPress(39)){
        this.cmOption = 2;
      }
      else if(input.keyPress(40)){
        this.cmOption = 3;
      }
      else if(input.keyPress(37)){
        this.cmOption = 4;
      }
      else if(input.keyPress(38)){
        this.cmOption = 1;
      }
      else if(input.keyPress(32)){
        this.cmOption = 6;
      }
    }//end active
  }//end upadte

} // end controlMapping
