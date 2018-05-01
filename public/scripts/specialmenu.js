function specialMenu()
{
  this.active =  false;


  this.Start = function()
  {
    this.active =true;
  }

  this.Draw = function()
  {
    if(this.active)
    {
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height);
  } 

  }

  this.Update = function()
  {

  }

}
