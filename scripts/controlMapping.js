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
    }//end active
  }// end draw

  this.Update = function(){
    if(this.active){

    }
  }//end upadte

} // end controlMapping
