function Squid()
{
  this.image = SQD;
  this.width = 250;
  this.height = 50;
  this.xPos = -200;
  this.yPos = 250;
  this.framestart = 0;
  this.timer = 0;
  this.right  =  true;
  this.counter = 2;

  this.Draw = function()
  {
    if(this.right)
    {
        if(this.timer < 10)
        {
          ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

          this.timer += 1;
        }
        else if(this.timer < 20)
        {
          this.framestart = 251;
          ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
          this.timer += 1;
          if (this.timer > 20)
          {
            this.framestart = 501 ;
          }
        }
        else
        {
          this.framestart = 501;
          ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
          this.timer += 1;
          if (this.timer > 30)
          {
            this.framestart = 0 ;
            this.timer = 0;
          }
        }
      }
    else
    {
      if(this.timer < 10)
      {
        ctx1.drawImage(this.image,this.framestart,50,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

        this.timer += 1;
      }
      else if(this.timer < 20)
      {
        this.framestart = 251;
        ctx1.drawImage(this.image,this.framestart,50,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 20)
        {
          this.framestart = 501 ;
        }
      }
      else
      {
        this.framestart = 501;
        ctx1.drawImage(this.image,this.framestart,50,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 30)
        {
          this.framestart = 0 ;
          this.timer = 0;
        }
      }
    }
  }
  this.Update = function()
  {
    this.xPos += this.counter;
    if(this.xPos > 1200 || this.xPos < -200)
    {
      this.counter *= -1;
      this.right = !this.right;
    }
  }
}
