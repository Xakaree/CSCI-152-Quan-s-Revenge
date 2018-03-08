function controlMapping(){
  this.active = false;
  this.requestingKey = false;
  this.controls = {
  "up" : false,
  "down": false,
  "left": false,
  "right": false,
  "attack": false,
  "jump": false
  };
  this.lastOption = "";

  this.Start = function(){
    this.active = true;
    console.log(pcontrols[0]);
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      if(this.controls["up"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,290,150,50);//up
      ctx1.font = "30px Arial";
      var key = String.fromCharCode(pcontrols[0].up);
      ctx1.fillText(key,375, 270);

      if(this.controls["down"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,410,150,50);//down

      if(this.controls["left"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(205,350,150,50);//left

      if(this.controls["right"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(375,350,150,50);//right

      if(this.controls["jump"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(560,290,250,75); //jump

      if(this.controls["attack"]){ctx1.fillStyle = "green";}
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
            this.setControl(0, k); //When you implement multiple players replace 0 with variable for player number
            this.requestingKey = false;
          }
      }
      else { //Normal menu stuff here
        if(input.keyPress(38) && this.controls["up"]){
          this.controls[this.lastOption] = false;
          this.controls["jump"] = true;
          this.lastOption = "jump";
        }
        else if (input.keyPress(39)){
          this.controls[this.lastOption] = false;
          this.controls["right"] = true;
          this.lastOption = "right";
          this.requestKey();
        }
        else if(input.keyPress(40)){
            this.controls[this.lastOption] =  false;
            this.controls["down"] = true;
            this.lastOption = "down";
            this.requestKey();
          }
        else if(input.keyPress(pcontrols[0].left)){ //use pcontrols instead of numbers (this should be done on other menus too)
          this.controls[this.lastOption] = false;
          this.controls["left"] = true;
          this.lastOption = "left";
          this.requestKey(); //call this after setting correct cmOption
        }
        else if(input.keyPress(38)){
          this.controls[this.lastOption] = false;
          this.controls["up"] = true;
          this.lastOption = "up";
          this.requestKey();
        }
        else if(input.keyPress(32)){
          this.controls[this.lastOption] = false;
          this.controls["attack"] = true;
          this.lastOption = "attack";
          this.requestKey();
        }
      }
    }//end active
  }//end upadte

  this.requestKey = function() { //Stops menu interaction and waits for key press
    input.resetKeys();
    this.requestingKey = true;
  }

  this.setControl = function(playerNum, key) { //called automatically in update
    if(this.controls["left"]) {
      pcontrols[playerNum].left = key;
    }
    else if (this.controls["right"]){
      pcontrols[playerNum].right = key;
    }
    else if (this.controls["up"]){
      pcontrols[playerNum].up = key;
    }
    else if(this.controls["down"]){
      pcontrols[playerNum].down = key;
    }
    else if(this.controls["attack"]){
      pcontrols[playerNum].attack = key;
    }
    else if(this.controls["jump"]){
      pcontrols[playerNum].jump = key;
    }
    //FILL IN REST OF OPTIONS
    storeLocalControls(); //save controls to browser storage for later use (see controls.js)
    console.log(pcontrols[0]);
  }

} // end controlMapping
