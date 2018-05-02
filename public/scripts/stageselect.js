function StageSelect(characters)
{
     this.active = false;
     this.scene = null;
     this.selection = characters;
     this.numstages = 4;
     this.toggle = 0;

     this.Start = function()
     {
       this.active = true;
     }

     this.Draw = function()
     {
       if(this.active)
       {
          ctx1.clearRect(0,0,width,height);
          ctx1.fillStyle = "white";
          ctx1.fillRect(0,0,canvas.width,canvas.height);

          ctx1.drawImage(MPSPC,100,150, 300,150);
          ctx1.drawImage(MPCTY,500,150,300,150);
          ctx1.drawImage(MPWTR,100,400, 300,150);
          ctx1.drawImage(MPSKY,500, 400, 300,150 );

          ctx1.font = "40px Arial";
          ctx1.fillStyle = "grey";
          ctx1.fillText("Stage Select", 100, 100);

          if(this.toggle == 0){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "grey";}

          ctx1.fillText("Space",125,340);

          if(this.toggle == 1){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "grey";}

          ctx1.fillText("City",525, 340);

          if(this.toggle == 2){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "grey";}

          ctx1.fillText("Seaworld",125, 600);

          if(this.toggle == 3){ ctx1.fillStyle = "green";}
          else {ctx1.fillStyle = "grey";}

          ctx1.fillText("Mile High Club",525, 600);
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
         if(this.toggle > 0 && input.getLeft())
         {
          this.toggle-= 1;
         }
         else if(this.toggle < this.numstages-1 && input.getRight())
         {
           this.toggle +=1;
         }

         if(input.getAttack())
         {
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
