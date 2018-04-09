function Parallax(camera, image1 = null, image2 = null, image3 = null){

    this.camera = camera;
    let background =  new Image(canvas.width,canvas.height);
    let midground = new Image(canvas.width,canvas.height);
    let foreground = new Image(canvas.width,canvas.height);
    let ydir =  -250.0;
    let xdir = -250.0;
    background.src = image1;  // 3rd
    midground.src = image2; // 2nd
    foreground.src = image3; //fastest

    this.Draw = function()
    {
        ctx1.clearRect(0,0,canvas.width,canvas.height);
        ctx0.clearRect(0,0,canvas.width,canvas.height);

        ctx1.save();

        ctx1.translate(-this.camera.x, -this.camera.y);
        ctx1.drawImage(background, (xdir*3) + (-this.camera.x*0.5), (ydir*3) + (-this.camera.y*0.5),(canvas.width +1500) *scale,(canvas.height + 1500)*scale);
        ctx1.drawImage(midground, (xdir*2) + (-this.camera.x*0.25), (ydir*2) + (-this.camera.y*0.25),(canvas.width + 750) *scale,(canvas.height +750)*scale);
        ctx1.drawImage(foreground, xdir*scale, ydir*scale,(canvas.width + 450) *scale,(canvas.height + 550)*scale);

        ctx1.restore();

    }
}
