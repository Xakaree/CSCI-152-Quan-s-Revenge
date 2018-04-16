function Menu(){
  this.active = false;
  this.menuOption = 0;
  this.scene = null;
  this.options = null;
  this.cSelect = null;
  this.map = {};

  this.Mapping = function(){
    var PLYRACT = document.getElementById("PLYRACT");
    var PLYRNULL = document.getElementById("PLYRNULL");
    var OPTACT = document.getElementById("OPTACT");
    var OPTNULL = document.getElementById("OPTNULL");
      this.map = {
        0 : new Button(100,100,ctx1,PLYRACT ,PLYRNULL),
        1 : new Button(120,210,ctx1, OPTACT , OPTNULL) // options
    };
    this.map[0].Select(); //  first option should be automatically selected
  }
  this.Start = function(){
    this.active = true;
    this.Mapping();
  }

  this.Draw = function() {
    
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);

    for(let key in this.map){ // call draw on all components
      this.map[key].Draw();
    }

    if(this.options != null){
      this.options.Draw();
    }
    if(this.cSelect != null){
      this.cSelect.Draw();
    }

    if(this.active) {
      ctx1.fillStyle = "grey";
      ctx1.font = "40px Arial";
      ctx1.fillText("Session Code", width*0.8, height*0.05);
      ctx1.fillText(sessionCode, width*0.8, height*0.1);
    }
    
  }

  this.Update = function(){
    this.map[this.menuOption].Unselect(); // Unselect last selected

    if (this.active){
        if (input.keyPress(pcontrols[0].up) && this.menuOption > 0){
              this.menuOption -= 1;
        }
        else if (input.keyPress(pcontrols[0].down) && this.menuOption < 1){
              this.menuOption +=1;
        }

    this.map[this.menuOption].Select();// select current


      if(this.menuOption == 0 && input.keyPress(pcontrols[0].attack))
      {
        input.resetKeys();
        this.cSelect = new CSelect();
        this.active = false;
        this.cSelect.Start();
      }
      else if (this.menuOption == 1 && input.keyPress(pcontrols[0].attack)){
        input.resetKeys();
        this.options = new Options();
        this.active = false;
        this.options.Start();
      }


    }// end active loop
    if(this.options != null){
      this.options.Update();
    }
    if(this.cSelect != null){
      this.cSelect.Update();
    }

  }//end update
}//end menu
