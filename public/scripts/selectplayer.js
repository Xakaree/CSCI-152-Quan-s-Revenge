function SelectPlayer(background){
this.controlMapping = null;
this.active = false;
this.option = 0;
this.background = background;

this.map = {}

this.Mapping = function (){
  var P1ACT = document.getElementById("P1ACT");
  var P1NULL = document.getElementById("P1NULL");
  var P2ACT = document.getElementById("P2ACT");
  var P2NULL = document.getElementById("P2NULL");
  var P3ACT = document.getElementById("P3ACT");
  var P3NULL = document.getElementById("P3NULL");
  var P4ACT = document.getElementById("P4ACT");
  var P4NULL = document.getElementById("P4NULL");
  this.map = {
    0: new Button(50,500,ctx1, P1ACT, P1NULL),
    1: new Button(350,500,ctx1,P2ACT, P2NULL),
    2: new Button(650,500,ctx1,P3ACT, P3NULL),
    3: new Button(950,500,ctx1,P4ACT, P4NULL)
  }

  this.map[0].Select();
}

this.Start = function(){
  this.active = true;
  this.Mapping();
}

this.Draw = function (){
  if(this.active){
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);

    this.background.Draw();
    ctx1.font = "50px Arial";
    ctx1.fillStyle = "red"
    ctx1.fillText("Which player's controls would you like to remap?",100, 300);

      for(let key in this.map){
        this.map[key].Draw();
      }
  } // end active

  if(this.controlMapping != null){
    this.controlMapping.Draw();
  }
} //end update

this.Update = function(){

  if(this.active){
    this.map[this.option].Unselect();

    this.background.Update();
    if (input.keyPress(pcontrols[0].left) && this.option > 0){
          this.option -= 1;
    }
    else if (input.keyPress(pcontrols[0].right) && this.option < 3){
          this.option += 1;
    }

    this.map[this.option].Select();

    if(input.keyPress(pcontrols[0].attack)){
      input.resetKeys();
      this.controlMapping = new controlMapping(this.option,this.background);
      this.controlMapping.Start();
      this.active = false;
    }
  }

  if(this.controlMapping != null){
    this.controlMapping.Update();
  }
}// end update
} // end selectplayer
