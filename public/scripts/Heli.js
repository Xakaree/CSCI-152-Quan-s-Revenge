function Heli(){

  this.image = HELI;
  this.width = 200;
  this.height = 200;
  this.xPos = 200;
  this.yPos = -100;
  this.angle = 0;
  this.right  =  true;
  this.counter = 2;

  this.framestart = 0;
  this.timer = 0;

  this.Update = function()
  {
    //equation of a circle
    this.xPos += this.counter;
    if(this.xPos > 1200 || this.xPos < 200)
    {
      this.counter *= -1;
      this.right = !this.right;
    }
  }
  this.Draw = function()
  {
    if(this.right)
    {
    if(this.timer < 5)
    {
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);

      this.timer += 1;
    }
    else if(this.timer < 10)
    {
      this.framestart = 201;
      this.timer += 1;
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      if (this.timer > 10)
      {
        this.framestart = 401 ;
      }
    }
    else if (this.timer < 15)
    {
      this.framestart = 401;
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      this.timer += 1;
      if (this.timer > 15)
      {
        this.framestart = 601 ;
      }
    }
    else
    {
      this.framestart = 601;
      ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      this.timer += 1;
      if (this.timer > 20)
      {
        this.framestart = 0 ;
        this.timer = 0 ;
      }
    }
  }
  else
  {
    if(this.timer < 5)
    {
      ctx1.drawImage(this.image,this.framestart,201,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);

      this.timer += 1;
    }
    else if(this.timer < 10)
    {
      this.framestart = 201;
      this.timer += 1;
      ctx1.drawImage(this.image,this.framestart,201,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      if (this.timer > 10)
      {
        this.framestart = 401 ;
      }
    }
    else if (this.timer < 15)
    {
      this.framestart = 401;
      ctx1.drawImage(this.image,this.framestart,201,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      this.timer += 1;
      if (this.timer > 15)
      {
        this.framestart = 601 ;
      }
    }
    else
    {
      this.framestart = 601;
      ctx1.drawImage(this.image,this.framestart,201,this.width,this.height,this.xPos*scale,this.yPos*scale,100*scale,100*scale);
      this.timer += 1;
      if (this.timer > 20)
      {
        this.framestart = 0 ;
        this.timer = 0 ;
      }
    }

  }
  }
}
