var cityList = [];
var battleList = [];
var menuList = [];
var spaceList = [];



function setSoundtrackVolume(val, list){
    var newVal = val/500;
    for (var i = 0; i < list.length; i++){
        list[i].changeVolume(newVal);
    }

}

function pauseSoundtrack( list){
    var i = 0;
    if( i < list.length) {
    list[i].stop();
    }

}


function playSoundtrack(i, list){
    if( i < list.length) {
    list[i].play();
    list[i].getSoundElem().onended = function() {
        i++;
        playSoundtrack(i, list);
    }
    }

}
 
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
    
    this.duration = function(){
        return this.sound.duration;
    
    }
    
    
    
}

// stage/background music
var bg = new sound("audioFiles/bg.m4a", false, 1);
var bg_2 = new sound("audioFiles/bg_2.mp3", false, 1);
var bg_3 = new sound("audioFiles/bg_3.mp3", false , 1);


var cityStart = new sound("audioFiles/bm1/START2.mp3", false , 1);
var citySong = new sound("audioFiles/bm1/SONG.wav", false , 1);
var cityEnd = new sound("audioFiles/bm1/END2.mp3", false , 1);

var spaceStart = new sound("audioFiles/bm2/beginSpace2.mp3", false , 1);
var spaceSong = new sound("audioFiles/bm2/continueSpace.wav", false , 1);
var spaceEnd = new sound("audioFiles/bm2/endSpace2.mp3", false , 1);




//menu music 
//var menu_1 = new sound("audioFiles/menu_1.mp3", false, 1);
var menu_2 = new sound("audioFiles/menu_2.mp3", false, 1);
var menu_3 = new sound("audioFiles/menu_3.mp3", false, 1);
var menu_4 = new sound("audioFiles/sfx/hero.mp3", false, 1);
var menu_5 = new sound("audioFiles/sfx/power.mp3", false, 1);
var menu_6 = new sound("audioFiles/sfx/optionMenu.mp3", false, 1);
// menu soundtrack list
//menuList.push(menu_1);
menuList.push(menu_4);
menuList.push(menu_2);
menuList.push(menu_5);
menuList.push(menu_6);
menuList.push(menu_3);

// in-game soundtrack list
battleList.push(bg);
battleList.push(bg_2);
battleList.push(bg_3);

cityList.push(cityStart);
cityList.push(citySong);
cityList.push(cityEnd);
cityList.push(bg);

spaceList.push(spaceStart);
spaceList.push(spaceSong);
spaceList.push(spaceEnd);
spaceList.push(bg);




// combat sounds 
var punch = new sound("audioFiles/punch_1.wav", false, 1);
var laser_1 = new sound("audioFiles/laser_shoot_1.wav", false, 1);
var laser_2 = new sound("audioFiles/laser_shoot_2.wav", false, 1);
var shotgunShoot = new sound("audioFiles/shotgun_shoot.m4a", false, 1);
var shotgunReload = new sound("audioFiles/shotgun_reload.m4a", false, 1);


// player sounds
var jump = new sound("audioFiles/jump_3.wav", false, 1);
var powerup_1 = new sound("audioFiles/powerup_1.wav", false, 1);
var powerup_2 = new sound("audioFiles/powerup_2.wav", false, 1);



function printDurations(list) {

    for(var i = 0; i < list.length; i++){
        console.log(list[i].duration());
    }

}

