function controlMapping(){
  this.active = false;
  this.cmOption = 0;

  this.requestingKey = false;

  this.Start = function(){
    this.active = true;
    console.log(pcontrols[0]);
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

      if(this.requestingKey) {
        //test message
        ctx1.font = "30px Arial";
        ctx1.fillText("Press New Key", width/2 - 100, 200);
      }
    }//end active
  }// end draw

  this.Update = function(){
    if(this.active){
      if(this.requestingKey) { //waiting for key pess
          var k = input.getKeyPress() //returns first keyPress == true it finds
          if(k != null) {
            this.setControl(0, this.cmOption, k); //When you implement multiple players replace 0 with variable for player number
            this.requestingKey = false;
          }
      }
      else { //Normal menu stuff here
        if(input.keyPress(38) && this.cmOption == 1){
          this.cmOption = 5;
        }
        else if (input.keyPress(39)){
          this.cmOption = 2;
        }
        else if(input.keyPress(40)){
          this.cmOption = 3;
        }
        else if(input.keyPress(pcontrols[0].left)){ //use pcontrols instead of numbers (this should be done on other menus too)
          this.cmOption = 4;
          this.requestKey(); //call this after setting correct cmOption
        }
        else if(input.keyPress(38)){
          this.cmOption = 1;
        }
        else if(input.keyPress(32)){
          this.cmOption = 6;
        }
      }
    }//end active
  }//end upadte

  this.requestKey = function() { //Stops menu interaction and waits for key press
    input.resetKeys();
    this.requestingKey = true;
  }

  this.setControl = function(playerNum, cmOption, key) { //called automatically in update
    if(cmOption == 4) {
      pcontrols[playerNum].left = key;
    }
    //FILL IN REST OF OPTIONS


    storeLocalControls(); //save controls to browser storage for later use (see controls.js)
  }

} // end controlMapping
