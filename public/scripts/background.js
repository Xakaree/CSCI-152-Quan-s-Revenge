function Background()
{
    this.speed = -1;
    this.x = 0;
    this.y =0;
    this.car = new Truck();
    this.xsky = canvas.width;
    this.xsky2 = 2*canvas.width;
    this.xHwy  = 0;
    this.xHwy1 = canvas.width;
    this.xHwy2 = canvas.width*2;
    this.xMB = 0;
    this.xMB1 = canvas.width;
    this.xMB2 = canvas.width*2;

  this.Draw = function ()
  {
      ctx1.drawImage(SKY, this.x, this.y);
      // Draw another image at the top edge of the first image
      ctx1.drawImage(SKY, this.xsky, this.y);
      ctx1.drawImage(SKY, this.xsky2, this.y);


      ctx1.drawImage(MB, this.xMB, this.y);
      // Draw another image at the top edge of the first image
      ctx1.drawImage(MB, this.xMB1, this.y);
      ctx1.drawImage(MB, this.xMB2, this.y);

      ctx1.drawImage(HWY, this.xHwy, this.y);
      // Draw another image at the top edge of the first image
      ctx1.drawImage(HWY, this.xHwy1, this.y);
      ctx1.drawImage(HWY, this.xHwy2, this.y);
      // If the image scrolled off the screen, reset
      this.car.Draw();
  }
  this.Update = function ()
  {
    this.car.Update();
    this.x += this.speed;
    this.xsky +=this.speed;
    this.xsky2 +=this.speed;
    this.xHwy  += this.speed*5;
    this.xHwy1 += this.speed *5;
    this.xHwy2 += this.speed*5;
    this.xMB += this.speed*2;
    this.xMB1 += this.speed*2;
    this.xMB2 += this.speed*2;

    if (this.x <= -(canvas.width+500))
      this.x = this.xsky + canvas.width*2;

    if (this.xsky <= -(canvas.width+500))
        this.xsky = this.xsky2 + canvas.width*2;

    if (this.xsky2 <= -(canvas.width+500))
        this.xsky2 = this.x + canvas.width*2;


    if (this.xHwy <= -(canvas.width+500))
      this.xHwy = this.xHwy1 + canvas.width*2;

    if (this.xHwy1 <= -(canvas.width+500))
        this.xHwy1 = this.xHwy2 + canvas.width*2;

    if (this.xHwy2 <= -(canvas.width+500))
        this.xHwy2 = this.xHwy + canvas.width*2;



    if (this.xMB <= -(canvas.width+500))
      this.xMB = this.xMB1 + canvas.width*2;

    if (this.xMB1 <= -(canvas.width+500))
        this.xMB1 = this.xMB2 + canvas.width*2;

    if (this.xMB2 <= -(canvas.width+500))
        this.xMB2 = this.xMB + canvas.width*2;
    }

    this.Drive = function () {this.car.xPos +=1;}
}
