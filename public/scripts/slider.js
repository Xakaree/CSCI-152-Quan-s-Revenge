function Slider(x, y, cont, list){
  this.xpos = x;
  this.ypos = y;
  this.context = cont;
  this.toggleBar = 100;
  this.selected = false;

  this.Draw = function() {
    this.context.fillStyle = "grey";
    this.context.fillRect(this.xpos,this.ypos,500,25);
    //toggle bar
    if(this.selected){
      this.context.fillStyle = "red";
    }
    else {
      this.context.fillStyle ="grey";
    }

    this.context.fillRect(this.xpos+this.toggleBar,this.ypos-10,10,45); //  horizontal toggle
    this.context.fillRect(this.xpos,this.ypos,this.toggleBar,25); // background bar

    //need to ask joey about this !!!!!!!!!!!!!!!
     this.context.font = "30px Arial";
     this.context.fillStyle = "red";
     ctx1.fillText(this.toggleBar/5,this.xpos+550,this.ypos+20);
  }

  this.Update = function(){
    if(this.selected){
        if (input.getRight() && this.toggleBar < 500)
          {this.toggleBar +=5;
          var sliderSnd = new sound("audioFiles/sfx/sliderSnd.mp3", false , 1);
          sliderSnd.play();
          setSoundtrackVolume(this.toggleBar, list);}
        else if (input.getLeft() && this.toggleBar > 0)
          {this.toggleBar -=5;
          var sliderSnd = new sound("audioFiles/sfx/sliderSnd.mp3", false , 1);
          sliderSnd.play();
          setSoundtrackVolume(this.toggleBar, list);}
   } // end selected
 }// end update

  this.Select = function(){this.selected = true; }
  this.Unselect = function(){this.selected = false;}
  this.isSelected = function(){ return this.selected;}
}
