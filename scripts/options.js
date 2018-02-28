function Options() {
  this.active = false;
  this.option = 0;
  this.menu = null;

  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      // controls
      if(this.option == 0)
        {ctx1.fillStyle = "green";}
      else
        {ctx1.fillStyle = "grey";}
    ctx1.fillRect(100,100,250,100);

    } // end active
  } // end draw

  this.Update = function(){
    if(this.active){

    } // end active
  } // end update
} // end Options
