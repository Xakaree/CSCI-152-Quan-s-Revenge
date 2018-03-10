function Slider(x, y, cont){
  this.xpos = x;
  this.ypos = y;
  this.context = cont;
  this.toggleBar = 0;
  this.selected = false;

  this.Draw = function() {
    this.context.fillStyle = "grey";
    this.context.fillRect(this.xpos,this.ypos,500,25);
    //toggle bar
    if(this.selected){
      this.context.fillStyle = "green";
    }
    else {
      this.context.fillText="grey";
    }

    this.context.fillRect(this.xpos+this.toggleBar,this.ypos-10,10,45); //  horizontal toggle
    this.context.fillRect(this.xpos,this.ypos,this.toggleBar,25); // background bar

    //need to ask joey about this !!!!!!!!!!!!!!!
    //  this.context.font = "30px Arial";
    //  this.context.fillStyle = "grey";
    //this.context.fillText(this.toggleBar/5,625,this.ypos+20);
  }

  this.Update = function(){
    if(this.selected){
        if (input.keyDown(pcontrols[0].right) && this.toggleBar < 500)
          {this.toggleBar +=5;}
        else if (input.keyDown(pcontrols[0].left) && this.toggleBar > 0)
          {this.toggleBar -=5;}
   } // end selected
 }// end update

  this.Select = function(){this.selected = true; }
  this.unSelect = function(){this.selected = false;}
  this.isSelected = function(){ return this.selected;}
}
