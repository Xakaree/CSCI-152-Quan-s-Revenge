function Button(x, y, cont,text = "N/A",image = null) {
this.xPos = x;
this.yPos = y;
this.context = cont;
this.text = text;
this.image = image; // will be used later
this.selected = false;

this.Draw = function(){

  if(this.selected)
  {
    this.context.fillStyle = "green";
  }
  else
  {
    this.context.fillStyle = "grey";
  }

  this.context.fillRect(this.xPos,this.yPos,250,100);
  this.context.font = "30px Arial";
  this.context.fillStyle = "White";
  this.context.fillText(this.text, this.xPos + 30, this.yPos+65);

}

this.Update = function(){
  if(this.selected){

  }
}

this.Select = function(){ this.selected = true;}
this.Unselect = function(){ this.selected = false;}
this.isSelected = function(){ return this.selected}

}
