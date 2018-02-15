
var soundTrackList = [];


/* 

function playTrackList(list){
    
    
    list.forEach(function(element) {
    element.getSoundElem().addEventListener('ended', function(){
        playNext(index, list);
    
    });
    element.play();
    });

}

 */


 
function fadeoutE(soundObj){
var vol = 1;
var fadeoutI = setInterval(function() {
    if (vol > 0) {
      vol -= .1;
      soundObj.changeVolume(vol);
    }
    else {
      clearInterval(fadeoutI);
    }
  }, 300, soundObj);
}



function fadeinE(soundObj){
var vol = 0;
var fadeinI = setInterval(function() {
    if (vol < 1 ) {
      vol += .1;
      soundObj.changeVolume(vol);
    }
    else {
      clearInterval(fadeinI);
    }
  }, 500, soundObj);
}



function sound(src, loop, volume) {
    //sound object properties 
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = volume;
    this.sound.loop = loop;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    //sound object methods 
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    

    this.load = function(){
        this.sound.load();
    }
    // change volume of audio must be from range 0(lowest) - 1(highest)
    this.changeVolume = function(val){
        this.sound.volume = val;
    }
    //ignore this
    this.getVolume = function(){
        return this.sound.volume;
    }
    
    this.getSoundElem = function(){
        return this.sound;
    }
    
    
    
}

// stage/background music

var bg = new sound("audioFiles/bg.m4a", true, 0.5);
var punch = new sound("audioFiles/punch_1.wav", false, 1);
var jump = new sound("audioFiles/jump_3.wav", false, 1);
var shotgunShoot = new sound("audioFiles/shotgun_shoot.m4a", false, 1);
var shotgunReload = new sound("audioFiles/shotgun_reload.m4a", false, 1);
var powerup_1 = new sound("audioFiles/powerup_1.wav", false, 1);
var powerup_2 = new sound("audioFiles/powerup_2.wav", false, 1);
var laser_1 = new sound("audioFiles/laser_shoot_1.wav", false, 1);
var laser_2 = new sound("audioFiles/laser_shoot_2.wav", false, 1);


soundTrackList.push(jump);
soundTrackList.push(laser_1);
soundTrackList.push(laser_2);

