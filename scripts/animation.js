//Scrapcode
//New

function animation(sprite,controls){
  //Animation Variables
  var srcX=0; //To track frame
  var srcY=0;	//To track animation
  var frameLimit = 4; //To keep row looping
  var counter=0;
  var aniSpd = 6; //Speed Cap on animation
  var loop = true;
  var bseSprite = sprite.v1Sprite;
  var dmgSprite = sprite.v1dSprite;
  var curSprite = bseSprite;

  this.swapSprite = function(){
      if(curSprite == sprite.v1Sprite){ curSprite = sprite.v1v1dSprite;}
      else{ curSprite = sprite.v1Sprite;}
  }
  this.play = function(aniY, lp){
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
    ctx1.drawImage(curSprite,srcX*sprite.width,srcY*sprite.height,sprite.width,sprite.height,x,y,width,height)
  }
}
