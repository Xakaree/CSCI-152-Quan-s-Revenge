function Parallax(camera, image1, image2, image3, imgGradient, bgObjects = null){

    this.camera = camera;
    let background =  new Image(canvas.width,canvas.height);
    let midground = new Image(canvas.width,canvas.height);
    let foreground = new Image(canvas.width,canvas.height);
    this.backgroundObjects = bgObjects;
    let ydir =  -250.0;
    let xdir = -250.0;
    background.src = image1;  // 3rd
    midground.src = image2; // 2nd
    foreground.src = image3; //fastest

    this.imgGradient = imgGradient;

this.Update = function()
{
  if(this.backgroundObjects != null)
  {
    for(let i =0; i < this.backgroundObjects.length; i++)
    {
      this.backgroundObjects[i].Update();
    }
  }
}
    this.Draw = function()
    {
        ctx1.clearRect(0,0,canvas.width,canvas.height);
        ctx0.clearRect(0,0,canvas.width,canvas.height);

        ctx1.fillStyle = "#00163a";
        ctx1.fillRect(-200 * scale,-200 * scale,width + 200,height + 200);

        //ctx1.save();
        //ctx1.setTransform(1,0,0,1,-this.camera.x,-this.camera.y);

        //ctx1.translate(-this.camera.x, -this.camera.y);

        this.imgGradient.Draw();
        ctx1.drawImage(background, (xdir*3) + (-this.camera.x*0.25), (ydir*3) + (-this.camera.y*0.25),(canvas.width +1500) *scale,(canvas.height + 1500)*scale);


        if(this.backgroundObjects != null)
        {
          for(let i =0; i < this.backgroundObjects.length; i++)
          {
            this.backgroundObjects[i].Draw();
          }
        }
        ctx1.drawImage(midground, ((xdir*2) + (-this.camera.x*0.20)) *scale,((ydir*2) + (-this.camera.y*0.20))*scale,(canvas.width + 750) *scale,(canvas.height +750)*scale);
        ctx1.drawImage(foreground, (xdir*scale) + 25, (ydir*scale) + 50,(canvas.width + 450) *scale,(canvas.height + 550)*scale);
        //ctx1.restore();

    }
}
