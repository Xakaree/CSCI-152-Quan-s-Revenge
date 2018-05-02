function Background()
{
    this.speed = -1;
    this.x = 0;
    this.y =0;
    this.car = new Car();
    this.xsky = canvas.width;
    this.xsky2 = 2*canvas.width;

  this.Draw = function ()
  {
      ctx1.drawImage(SKY, this.x, this.y);
      // Draw another image at the top edge of the first image
      ctx1.drawImage(SKY, this.xsky, this.y);
      ctx1.drawImage(SKY, this.xsky2, this.y);

      ctx1.drawImage(HWY, this.x, this.y);
      // Draw another image at the top edge of the first image
      ctx1.drawImage(HWY, this.xsky, this.y);
      ctx1.drawImage(HWY, this.xsky2, this.y);
      // If the image scrolled off the screen, reset
      this.car.Draw();
  }
  this.Update = function ()
  {
    this.car.Update();
    this.x += this.speed;
    this.xsky +=this.speed;
    this.xsky2 +=this.speed;

    if (this.x <= -(canvas.width+500))
      this.x = this.xsky + canvas.width*2;

    if (this.xsky <= -(canvas.width+500))
        this.xsky = this.xsky2 + canvas.width*2;

    if (this.xsky2 <= -(canvas.width+500))
        this.xsky2 = this.x + canvas.width*2;
    }
}
