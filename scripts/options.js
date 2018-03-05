function Options() {
  this.active = false;
  this.option = 0;

  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
      ctx1.clearRect(0,0,width,height);
      ctx1.fillStyle = "white";
      ctx1.fillRect(0,0,width,height);

      if(this.option == 0){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(100,100,250,100);

      if(this.option == 1){ctx1.fillStyle = "green";}
      else {ctx1.fillStyle = "grey";}
      ctx1.fillRect(120,210,250,100);

    } // end active
  } // end draw

  this.Update = function(){
    console.log('got here');
      console.log(input.keyPress(38));
          if (input.keyPress(38) && this.option > 0){
                this.option -= 1;
                console.log("arrow key up");
          }
          else if (input.keyPress(40) && this.option < 1){
                this.option += 1;
                console.log("arrow key down");
          }

  } // end update
} // end Options
