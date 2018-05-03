function startScreen(){
		this.active = true;
		this.menu = null;
		this.background = new Background();
		this.snd = new sound("audioFiles/sfx/charSelect.mp3", false , 1);

		this.Draw = function (){
			if (this.active){
				ctx1.clearRect(0,0,width,height); //clears canvas
				ctx1.fillStyle = "white"; // background color
				ctx1.fillRect(0,0,width,height);
				this.background.Draw();
				ctx1.fillStyle = "red";
				ctx1.font ="60px Arial";
				ctx1.fillText("Bullet Battle", 450,200);
				ctx1.font = "40px Arial";
				ctx1.fillText("Press Space to Continue", 400, 500);
				ctx1.fillText("Session Code", width*0.8, height*0.05);
				ctx1.fillText(sessionCode, width*0.8, height*0.1);
			} //end active

			if(this.menu != null){
				this.menu.Draw();
			}
		}//end draw

	this.Update = function(){
			if (this.active){
				this.background.Update();
			 if (input.getAttack()){ //start game
			            this.snd.play();
						input.resetKeys(); //  needed when
						this.background.Drive();
						this.menu =  new Menu(this.background);
						this.menu.Start();
						this.active = false;
					}
			} // end active

			if(this.menu != null){
				this.menu.Update();
			}
		} // end update

} // end startScreen
