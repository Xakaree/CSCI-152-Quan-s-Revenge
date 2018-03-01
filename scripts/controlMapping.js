function controlMapping(){
  this.active = false;
  this.cmOption = 0;

  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      ctx1.fillStyle = "grey";
      ctx1.fillRect(290,290,150,50);//up
      ctx1.fillRect(290,410,150,50);//down
      ctx1.fillRect(205,350,150,50);//left
      ctx1.fillRect(375,350,150,50);//right

      ctx1.fillRect(560,290,250,75); //jump
      ctx1.fillRect(560,385,250,75); //attack

    }//end active
  }// end draw

  this.Update = function(){
    if(this.active){

    }
  }//end upadte

} // end controlMapping
