function Parallax(camera, image = null){

    this.camera = camera;
    let background =  new Image(canvas.width,canvas.height);
    let ydir =  -250.0;
    let xdir = -250.0;
    background.src = image;

    this.Draw = function()
    {
        ctx1.clearRect(0,0,canvas.width,canvas.height);
        ctx0.clearRect(0,0,canvas.width,canvas.height);

        ctx1.save();

        ctx1.translate(-this.camera.x, -this.camera.y);
        ctx1.drawImage(background, xdir, ydir,(canvas.width + 250) *scale,(canvas.height +250)*scale);

        ctx1.restore();

    }
}
