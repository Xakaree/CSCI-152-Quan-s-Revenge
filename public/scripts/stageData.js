var stageData = {
  0:{
   background :  "background/Space.png",
   midground  : "background/Planets.png",
   foreground  :"background/Moon.png",
    objs : [new UFObgi(), new Spaceship()]
  },
  1:{
    background : "background/Skyscrapers.png",
    midground  : "background/MoreBuildings.png",
    foreground  :"background/Buildings.png",
    objs : [new Car(), new GradientForCity()]
  },
  2:{
    background :  "background/Rocks.png",
    midground  : "background/Reef.png",
    foreground  :"background/waterDome.png",
  },
  3:{
    background : "background/Clouds.png",
    midground  : "background/Mountains.png",
    foreground  :"background/Ship.png",
  }
};

function GradientForCity(){
  this.Update = function()
  {

  }

  this.Draw =  function()
  {
    var my_gradient=ctx1.createLinearGradient(0,0,0,720);
    my_gradient.addColorStop(0,"#191970");
    my_gradient.addColorStop(0.35,"#4B0082");
    my_gradient.addColorStop(1,"#ffffe0");
    ctx1.fillStyle=my_gradient;
    ctx1.fillRect(-250,-250,width+250,height+250);
  }
}
