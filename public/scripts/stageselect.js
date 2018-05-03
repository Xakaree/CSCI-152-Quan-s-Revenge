function StageSelect(characters)
{
     this.active = false;
     this.scene = null;
     this.selection = characters;
     this.numstages = 4;
     this.toggle = 0;
     this.animators = [];
     this.select = new sound("audioFiles/sfx/charSelect.mp3", false, 1);
     this.nav = new sound("audioFiles/sfx/changeColor.mp3", false, 1);

     this.Start = function()
     {
       this.active = true;
       for(let x =0;  x < this.selection.length;  x++)
       {
         this.animators[x] = new animation(characters[x][0]);
       }
     }

     this.Draw = function()
     {
       if(this.active)
       {
          ctx1.clearRect(0,0,width,height);
          ctx1.fillStyle = "white";
          ctx1.fillRect(0,0,canvas.width,canvas.height);

          ctx1.fillStyle = "black";
          ctx1.fillRect(0,0,canvas.width,canvas.height);

          ctx1.drawImage(MPSPC,200,100, 300,150);
          ctx1.drawImage(MPCTY,650,100,300,150);
          ctx1.drawImage(MPWTR,200,350, 300,150);
          ctx1.drawImage(MPSKY,650, 350, 300, 150);

          ctx1.font = "40px Arial";
          ctx1.fillStyle = "white";
          ctx1.fillText("Stage Select", 50, 75);

          if(this.toggle == 0){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "white";}

          ctx1.fillText("Space",280,290);

          if(this.toggle == 1){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "white";}

          ctx1.fillText("City",750, 290);

          if(this.toggle == 2){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "white";}

          ctx1.fillText("Seaworld",260, 545);

          if(this.toggle == 3){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "white";}

          ctx1.fillText("Mile High Club",675, 545);

          let x1 = 125;
          for(let x =0;  x < this.selection.length;  x++)
          {
            x1+=x1;
            this.animators[x].Draw(x1,750,64,64);
            ctx1.drawImage(PTSD,(x1-20)*scale,(750+64)*scale,90,16); 
          }
       }

///
       if(this.scene !=null)
       {
         this.scene.Draw();
       }
     }

     this.Update = function()
     {
       if(this.active)
       {
         for(let x = 0; x < this.selection.length; x++)
         {
           this.animators[x].play(0,true);
           this.animators[x].Update();
         }

         if(this.toggle > 0 && input.getLeft())
         {
          this.nav.load();
          this.nav.play();
          this.toggle-= 1;
         }
         else if(this.toggle < this.numstages-1 && input.getRight())
         {
          this.nav.load();
          this.nav.play();
           this.toggle +=1;
         }

         if(input.getAttack())
         {
           this.select.play();
           this.scene = scene;
           scene.currStage = this.toggle;
           this.scene.PassPlayers(this.selection);
           this.active = false;
           this.scene.Start();
         }
       } //end active

        if(this.scene != null)
        {
          this.scene.Update();
        }
     }
}
