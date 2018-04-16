function Spaceship()
{
  this.image = VPOD;
  this.width = 90;
  this.height = 90;
  this.xPos = 0;
  this.yPos = 0;
  this.angle = 350;
  this.cx = 440;
  this.cy = 260;
  this.radius = 400;
  this.framestart = 0;
  this.timer = 0;

  this.Update = function()
  {
    //equation of a circle
    this.xPos = this.cx + (this.radius * Math.cos(this.angle))
    this.yPos = this.cy + (this.radius * Math.sin(this.angle))
    this.angle += .01;
  }

  this.Draw =  function()
  {
      if(this.timer < 25)
      {
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

        this.timer += 1;
        if(this.timer >= 25)
        {
          this.framestart = 91;
        }
      }
      else if( this.timer < 51)
      {
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

        this.timer += 1;
        if (this.timer > 50)
        {
          this.framestart = 182 ;
        }
      }
      else
      {
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

        this.timer +=1;
        if(this.timer > 75)
        {
          this.framestart = 0;
          this.timer =0;
        }
      }
  }
}
