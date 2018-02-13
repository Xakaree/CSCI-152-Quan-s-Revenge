function Menu(){
  this.active = false;
  this.option = 0;
  this.scene = null;

  this.Start = function(){
    this.active = true;
  }
  this.Draw = function() {
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);

    if(this.option == 0){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(100,100,250,100);

    if(this.option == 1){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(120,210,250,100);

    if(this.option == 2){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(140,320,250,100);

    if(this.option == 3){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(100,430,250,100);

  }

  this.Update = function(){
    if (this.active){
        if (input[38] && this.option > 0){
              this.option -= 1;
        }
        else if (input[40] && this.option < 3){
              this.option +=1;
        }
    }// end active loop
  }//end update
}//end menu
