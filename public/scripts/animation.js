//Scrapcode
//New

function animation(sprite,controls){
  //Animation Variables
  var srcX=0; //To track frame
  var srcY= null;	//To track animation
  var frameLimit = 4; //To keep row looping
  var counter=0;
  var aniSpd = 6; //Speed Cap on animation
  var loop = true;
  this.image = sprite.image;

  this.play = function(aniY, lp){
    if(srcY == aniY) return;
    srcY = aniY;
    srcX = 0;
    frameLimit = sprite.frameLimits[srcY];
    loop = lp;
  }

  this.Update = function(){
    counter++;
		if(counter == aniSpd){
      srcX++;
      if(!loop && srcX == frameLimit){
        srcX = frameLimit -1;
      }
      if(loop && srcX == frameLimit){
        srcX = 0;
      }
			counter = 0;
    }
  }
  this.Draw = function(x,y,width,height){
    ctx1.drawImage(this.image,srcX*sprite.width,srcY*sprite.height,sprite.width,sprite.height,x*scale,y*scale,width*scale,height*scale)
  }
}
