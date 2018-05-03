function GradientForCity(){
  this.Draw =  function()
  {
    var my_gradient=ctx1.createLinearGradient(0,-300,0,720);
    my_gradient.addColorStop(0,"Black");
    my_gradient.addColorStop(0.15,"#191970");
    my_gradient.addColorStop(0.55,"#4B0082");
    my_gradient.addColorStop(1,"#ffffe0");
    ctx1.fillStyle=my_gradient;
    ctx1.fillRect(-250,-250,width+800,height+800);
  }
}

function GradientForSpace(){
this.timer = 0 ;
  this.Draw =  function()
  {
    var grd=ctx1.createLinearGradient(-300,0,0,720);
    grd.addColorStop(0,"Black");
    grd.addColorStop(0.10,"#191970");
    grd.addColorStop(0.45,"#4B0082");
    grd.addColorStop(0.55,"#191970");
    grd.addColorStop(0.9,"Black");

    // Fill with gradient
    ctx1.fillStyle=grd;
    ctx1.fillRect(-600,-500,width+1250,height+800);
  }
}

function GradientForSeaWorld(){
  this.Draw = function()
  {
    var grd=ctx1.createLinearGradient(0,0,0,720);
    grd.addColorStop(0,"#7FB3D5");
    grd.addColorStop(0.05,"#2E86C1");
    grd.addColorStop(0.25,"#2980B9")
    grd.addColorStop(0.45,"#154360");
    //grd.addColorStop(0.10,"#191970");
    grd.addColorStop(0.65,"Black");

    // Fill with gradient
    ctx1.fillStyle=grd;
    ctx1.fillRect(-600,-250,width+1250,height+800);
  }
}

function GradientForMileHigh(){
  this.Draw = function()
  {
    var grd=ctx1.createLinearGradient(0,-200,0,720);
    grd.addColorStop(0.75,"#7FB3D5");
    grd.addColorStop(0.5,"#2E86C1");
    grd.addColorStop(0.25,"#2980B9")
    grd.addColorStop(0.0,"#154360");
    //grd.addColorStop(0.10,"#191970");

    // Fill with gradient
    ctx1.fillStyle=grd;
    ctx1.fillRect(-600,-250,width+1250,height+800);

  }
}


var stageData = {
  0:{
   background :  "background/Space.png",
   midground  : "background/Planets.png",
   foreground  :"background/Moon.png",
   objs : [new UFObgi(), new Spaceship(), new Meteor()],
   gradient : new GradientForSpace()
  },
  1:{
    background : "background/Skyscrapers.png",
    midground  : "background/MoreBuildings.png",
    foreground  :"background/Buildings.png",
    objs : [new Heli()],
    gradient : new GradientForCity()
  },
  2:{
    background :"background/Rocks.png",
    midground  : "background/Reef.png",
    foreground  :"background/waterDome.png",
    objs : [new Squid(), new Sub(), new Bubble(200,800),  new Bubble(180,820),  new Bubble(220, 840), new Bubble(700,860),  new Bubble(780,880),  new Bubble(720, 900)],
    gradient : new GradientForSeaWorld()

  },
  3:{
    background : "background/Clouds.png",
    midground  : "background/Mountains.png",
    foreground  :"background/Ship.png",
    objs :[new Jet()],
    gradient : new GradientForMileHigh()
  }
};
