function Menu(background){
  this.active = false;
  this.menuOption = 0;
  this.options = null;
  this.cSelect = null;
  this.map = {};
  this.selectSnd = new sound("audioFiles/sfx/charSelect.mp3", false, 1);
  this.nav = new sound("audioFiles/sfx/changeColor.mp3", false, 1);

  this.background = background;

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
    if(this.active) {
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      this.background.Draw();
      for(let key in this.map){ // call draw on all components
        this.map[key].Draw();
      }
    }

    if(this.options != null){
      this.options.Draw();
    }
    if(this.cSelect != null){
      this.cSelect.Draw();
    }


    if(this.active) {
      ctx1.fillStyle = "red";
      ctx1.font = "40px Arial";
      ctx1.fillText("Session Code", width*0.8, height*0.05);
      ctx1.fillText(sessionCode, width*0.8, height*0.1);
    }

  }

  this.Update = function(){
    this.map[this.menuOption].Unselect(); // Unselect last selected
    this.background.Update();
    if (this.active){
        if (input.getUp() && this.menuOption > 0){
              this.nav.load();
              this.nav.play();
              this.menuOption -= 1;
        }
        else if (input.getDown() && this.menuOption < 1){
              this.nav.load();
              this.nav.play();
              this.menuOption +=1;
        }

    this.map[this.menuOption].Select();// select current


      if(this.menuOption == 0 && input.getAttack())
      {
        this.selectSnd.play();
        input.resetKeys();
        this.cSelect = new CSelect();
        this.active = false;
        this.cSelect.Start();
      }
      else if (this.menuOption == 1 && input.getAttack()){
        this.selectSnd.play();
        input.resetKeys();
        this.options = new Options(this.background);
        this.background.Drive();
        this.background.xPos += 5;
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
