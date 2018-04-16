function Button(x, y, cont,imageact, imagenull) {
this.xPos = x;
this.yPos = y;
this.context = cont;
this.inull = imagenull;
this.iact =  imageact;
this.image = null; // will be used later
this.selected = false;

this.Draw = function(){

  if(this.selected){this.image = this.iact;}
  else{this.image = this.inull;}

  this.context.drawImage(this.image, this.xPos,this.yPos,250,100);

}

this.Update = function(){
  if(this.selected){

  }
}

this.Select = function(){ this.selected = true;}
this.Unselect = function(){ this.selected = false;}
this.isSelected = function(){ return this.selected}

}
