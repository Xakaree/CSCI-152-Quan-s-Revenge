function Truck()
{
  this.image = TRK;
  this.width = 200;
  this.height = 100;
  this.xPos =  -250;
  this.yPos = 550
  this.framestart = 0;
  this.timer = 0;

  this.Update = function ()
  {
    if(this.xPos != 500)
      this.xPos +=1;

    if(this.xPos > 500 && this.xPos < 1280)
      this.xPos +=10;

    if(this.xPos >1280)
      this.xPos = -250
  }
  this.Draw = function ()
  {
    if(this.timer < 10)
    {
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

      this.timer += 1;
    }
    else if(this.timer < 20)
    {
      this.framestart = 201;
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
      this.timer += 1;
      if (this.timer > 20)
      {
        this.framestart = 401 ;
      }
    }
    else
    {
      this.framestart = 401;
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
      this.timer += 1;
      if (this.timer > 30)
      {
        this.framestart = 0 ;
        this.timer = 0;
      }
    }
  }
}
