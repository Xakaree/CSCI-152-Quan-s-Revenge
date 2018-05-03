function controlMapping(current,background){
  this.active = false;
  this.requestingKey = false;
  this.currentPlayer = current;
  this.back = null;
  this.controls = {
  "up" : false,
  "down": false,
  "left": false,
  "right": false,
  "attack": false,
  "jump": false
  };
  this.lastOption = "";
  this.background = background;
  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      this.background.Draw();
      ctx1.font = " 40px Arial"
      ctx1.fillStyle = "red";
      ctx1.fillText("Remap Player " + (this.currentPlayer + 1)+" Controls", 150, 100);

      if(this.controls["up"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,290,150,50);//up
      ctx1.font = "30px Arial";
      var key = this.keyPressed(pcontrols[this.currentPlayer].up);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,365, 270);

      if(this.controls["down"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(290,410,150,50);//down
      var key = this.keyPressed(pcontrols[this.currentPlayer].down);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,340, 480);

      if(this.controls["left"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(205,350,150,50);//left
      var key = this.keyPressed(pcontrols[this.currentPlayer].left);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,205, 430);

      if(this.controls["right"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(375,350,150,50);//right
      var key = this.keyPressed(pcontrols[this.currentPlayer].right);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,450, 430);

      if(this.controls["jump"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(610,290,250,75); //jump
      var key = this.keyPressed(pcontrols[this.currentPlayer].jump);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,685,280);

      if(this.controls["attack"]){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(610,385,250,75); //attack
      var key = this.keyPressed(pcontrols[this.currentPlayer].attack);
      ctx1.fillStyle = "red";
      ctx1.fillText(key,685, 480);

      if(this.requestingKey) {
        //test message
        ctx1.font = "30px Arial";
        ctx1.fillText("Press New Key", width/2 - 100, 200);
      }
    }//end active
    if(this.back != null){
      this.back.Draw();
    }
  }// end draw

  this.Update = function(){
    if(this.active){
      this.background.Update();
      if(this.requestingKey) { //waiting for key pess
          var k = input.getKeyPress(); //returns first keyPress == true it finds
          if(k != null) {
            this.setControl(this.currentPlayer, k); //When you implement multiple players replace 0 with variable for player number
            this.requestingKey = false;
          }
      }
      else { //Normal menu stuff here
        if(input.keyPress(pcontrols[this.currentPlayer].jump)){
          this.controls[this.lastOption] = false;
          this.controls["jump"] = true;
          this.lastOption = "jump";
          this.requestKey();
        }
        else if (input.keyPress(pcontrols[this.currentPlayer].right)){
          this.controls[this.lastOption] = false;
          this.controls["right"] = true;
          this.lastOption = "right";
          this.requestKey();
        }
        else if(input.keyPress(pcontrols[this.currentPlayer].down)){
            this.controls[this.lastOption] =  false;
            this.controls["down"] = true;
            this.lastOption = "down";
            this.requestKey();
          }
        else if(input.keyPress(pcontrols[this.currentPlayer].left)){ //use pcontrols instead of numbers (this should be done on other menus too)
          this.controls[this.lastOption] = false;
          this.controls["left"] = true;
          this.lastOption = "left";
          this.requestKey(); //call this after setting correct cmOption
        }
        else if(input.keyPress(pcontrols[this.currentPlayer].up)){
          this.controls[this.lastOption] = false;
          this.controls["up"] = true;
          this.lastOption = "up";
          this.requestKey();
        }
        else if(input.keyPress(pcontrols[this.currentPlayer].attack)){
          this.controls[this.lastOption] = false;
          this.controls["attack"] = true;
          this.lastOption = "attack";
          this.requestKey();
        }
        else if(input.keyPress(66))
        {
            this.back = new Options(this.background);
            this.active = false;
            this.back.Start();
        }
      }
    }//end active
    if(this.back != null){
      this.back.Update();
    }
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
    console.log("Player " + playerNum);
    console.log(pcontrols[playerNum]);
  }

  this.keyPressed = function(key){
      if(key == 32)
          return "space"
      else if (key == 37)
          return "left";
      else if (key == 38)
          return "up";
      else if (key == 39)
          return "right";
      else if (key == 40)
          return "down";
      else if (key == null)
          return "null";
      else
          return String.fromCharCode(key);
  }
  } // end controlMapping
