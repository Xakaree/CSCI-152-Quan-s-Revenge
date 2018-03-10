function VolumeOptions(){
  this.active = false;
  this.musicslider = new Slider(150,100,ctx1);
  this.sfxslider = new Slider(150, 200,ctx1);
  this.menuslider = new Slider(150, 300,ctx1);
  this.somethingslider = new Slider(150,400,ctx1); // forgot what this slider was for
  this.lastSelected = this.somethingslider;
  this.toggle = 0;
  this.back = null;

  this.Start = function(){
    this.active = true;
    this.selectSlider();
  }

  this.Draw = function(){
    if(this.active){
    ctx1.clearRect(0,0,width,height);
    ctx1.fillStyle = "white";
    ctx1.fillRect(0,0,width,height); //paint background white

    //draw sliders on screen
    this.musicslider.Draw();
    this.sfxslider.Draw();
    this.menuslider.Draw();
    this.somethingslider.Draw();

    if(this.toggle == 4){
      ctx1.fillStyle = "green";
    }else {ctx1.fillStyle = "grey";}
    ctx1.fillRect(750,600,250,100);
  }//end active

  if(this.back != null){
    this.back.Draw();
  }
}//end draw

  this.Update = function(){
    if(this.active){
          this.musicslider.Update();
          this.sfxslider.Update();
          this.menuslider.Update();
          this.somethingslider.Update();

        ///switch between sliders
        if(input.keyPress(pcontrols[0].down) && this.toggle < 4){
          this.toggle += 1;
          this.selectSlider();
        }
        else if (input.keyPress(pcontrols[0].up)  && this.toggle > 0){
          this.toggle -=1;
          this.selectSlider();
        }

        if (this.toggle == 4 && input.keyPress(pcontrols[0].attack)) {
          this.lastSelected.unSelect();
          this.lastSelected = this.musicslider;
          input.resetKeys();
          this.back = new Options();
          this.back.Start();
          this.active = false;
          console.log("back start");
        }
    }// end active
    if(this.back != null){
      this.back.Update();
    }
  }//end update

  this.selectSlider = function(){
    if(this.toggle == 0){
      this.musicslider.Select();
      this.lastSelected.unSelect();
      this.lastSelected = this.musicslider;
      console.log("musicslider");
    }
    else if (this.toggle == 1){
      this.sfxslider.Select();
      this.lastSelected.unSelect();
      this.lastSelected = this.sfxslider;
      console.log("sfxslider");
    }
    else if (this.toggle == 2){
      this.menuslider.Select();
      this.lastSelected.unSelect();
      this.lastSelected = this.menuslider;
      console.log("menuslider");
    }
    else if (this.toggle == 3){
      this.somethingslider.Select();
      this.lastSelected.unSelect();
      this.lastSelected = this.somethingslider;
      console.log("somethingslider");
    }
    else {}
  }// end selectSlider

} // end VolumeOptions
