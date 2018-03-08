function VolumeOptions(){
  this.active = false;
  this.toggleBar = 0;
  this.music = true;

  this.Start = function(){
    this.active = true;
  }

  this.Draw = function(){
    if(this.active){
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);

    //background bar
    ctx1.fillStyle = "grey";
    ctx1.fillRect(100,100,500,25);
    //toggle bar
    if(this.music){ctx1.fillStyle = "green";}
    else {ctx1.fillText="grey";}
    ctx1.fillRect(100+this.toggleBar,90,10,45); //  horizontal toggle
    ctx1.fillRect(100,100,this.toggleBar,25); // background bar

    ctx1.font = "30px comic sans";
    ctx1.fillStyle = "grey";
    ctx1.fillText(this.toggleBar/5,625,120);
  }
}

  this.Update = function(){
    if(this.active){
      if (this.music && input.keyDown(pcontrols[0].right) && this.toggleBar < 500)
      {this.toggleBar +=5;}
      else if (this.music && input.keyDown(pcontrols[0].left) && this.toggleBar > 0)
      {this.toggleBar -=5;}
    }// end active
  }//end update
} // end VolumeOptions
