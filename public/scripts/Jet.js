function Jet()
{
  this.image = JET;
  this.width = 250;
  this.height = 150;
  this.xPos = -200;
  this.yPos = -100;
  this.increment = 5;
  this.right = true;

  this.Draw = function()
  {
    if(this.right)
      ctx1.drawImage(this.image,0,0,this.width,this.height,this.xPos,this.yPos,150*scale,75*scale);
    else
      ctx1.drawImage(this.image,0,150,this.width,this.height,this.xPos,this.yPos,150*scale,75*scale);

  }

  this.Update = function ()
  {
      this.xPos +=  this.increment;
      if(this.xPos < -800 || this.xPos > 1800)
      {
        this.increment *=-1;
        this.right = !this.right;
      }
  }
}
