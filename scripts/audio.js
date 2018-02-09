
function sound(src, loop, volume) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = volume;
    this.sound.loop = loop;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
    this.load = function(){
        this.sound.load();
    }
    this.changeVolume = function(val){
        this.sound.volume = val;
    }
}




var bg = new sound("audioFiles/bg.m4a", true, 0.5);
var punch = new sound("audioFiles/punch_1.wav", false, 1);
var jump = new sound("audioFiles/jump_3.wav", false, 1);
var shotgunShoot = new sound("audioFiles/shotgun_shoot.m4a", false, 1);
var shotgunReload = new sound("audioFiles/shotgun_reload.m4a", false, 1);
var powerup_1 = new sound("audioFiles/powerup_1.wav", false, 1);
var powerup_2 = new sound("audioFiles/powerup_2.wav", false, 1);
var laser_1 = new sound("audioFiles/laser_shoot_1.wav", false, 1);
var laser_2 = new sound("audioFiles/laser_shoot_2.wav", false, 1);

