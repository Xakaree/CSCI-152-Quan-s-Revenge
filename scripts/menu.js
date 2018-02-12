function Menu(){
  this.active = false;
  this.option = null;
  this.scene = null;

  this.Start = function(){
    this.active = true;
  }
  this.Draw = function() {
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);
    ctx1.fillStyle = "grey";
    ctx1.fillRect(100,100,250,100);
    ctx1.fillRect(120,210,250,100);
    ctx1.fillRect(140,320,250,100);
    ctx1.fillRect(100,430,250,100);

  }

  this.Update = function(){}
}
