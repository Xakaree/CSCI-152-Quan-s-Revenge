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

function Bubble (xpos,ypos)
{
  this.image = BUB;
  this.width = 20;
  this.height = 20;
  this.xPos = xpos;
  this.yPos = ypos;

  this.Draw = function()
  {
    ctx1.drawImage(this.image,0,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
  }

  this.Update = function ()
  {
      this.yPos -=  1;
      if(this.yPos < -100)
      {
        this.yPos = ypos;
      }
  }
}

function Sub()
{
  this.image = SUB;
  this.width = 200;
  this.height = 100;
  this.xPos = -200;
  this.yPos = 500;
  this.increment = 1;
  this.right = true;

  this.Draw = function()
  {
    if(this.right)
      ctx1.drawImage(this.image,0,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
    else
      ctx1.drawImage(this.image,0,100,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

  }

  this.Update = function ()
  {
      this.xPos +=  this.increment;
      if(this.xPos < -300 || this.xPos > 1280)
      {
        this.increment *=-1;
        this.right = !this.right;
      }
  }
}
