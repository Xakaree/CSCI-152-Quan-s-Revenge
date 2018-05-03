function UFObgi(){
  this.image = UFO;
  this.width = 100;
  this.height = 80;
  this.xPos = 0;
  this.yPos = 0;
  this.angle = 0;
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
      }
      else
      {
        this.framestart = 101;
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 50)
        {
          this.framestart = 0 ;
          this.timer = 0;
        }
      }
  }
}

function Meteor()
{
  this.image = ASTRD;
  this.width = 50;
  this.height = 50;
  this.xPos = 1500;
  this.yPos = -500;
  this.framestart = 0;
  this.timer = 0;

    this.Draw = function()
    {
      if(this.timer < 15)
      {
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);

        this.timer += 1;
      }
      else if(this.timer < 30)
      {
        this.framestart = 51;
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 30)
        {
          this.framestart = 101 ;
        }
      }
      else if(this.timer <45)
      {
        this.framestart = 101;
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 60)
        {
          this.framestart = 151 ;
        }
      }
      else
      {
        this.framestart = 151;
        ctx1.drawImage(this.image,this.framestart,0,this.width,this.height,this.xPos,this.yPos,this.width,this.height);
        this.timer += 1;
        if (this.timer > 75)
        {
          this.framestart = 0;
          this.timer = 0;
        }
      }
    }

    this.Update = function()
    {
      this.xPos = this.xPos -2;
      this.yPos =this.yPos +1;

      if(this.xPos <-300)
      {
        this.xPos = 1500;
        this.yPos = -500;
      }
    }
}
