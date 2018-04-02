function startScreen(){
		this.active = true;
		this.menu = null;


		this.Draw = function (){
			if (this.active){
				ctx1.clearRect(0,0,width,height); //clears canvas
				ctx1.fillStyle = "white"; // background color
				ctx1.fillRect(0,0,width,height);
				ctx1.fillStyle = "grey";

				ctx1.font ="60px Arial";
				ctx1.fillText("QUAN'S REVENGE", 350,200);
				ctx1.font = "40px Arial";
				ctx1.fillText("Press Space to Continue", 400, 500);
			} //end active

			if(this.menu != null){
				this.menu.Draw();
			}
		}//end draw

	this.Update = function(){
			if (this.active){
			 if (input.keyPress(32)){ //start game
						input.resetKeys(); //  needed when
						this.menu =  new Menu();
						this.menu.Start();
						this.active = false;
					}
			} // end active

			if(this.menu != null){
				this.menu.Update();
			}
		} // end update

} // end startScreen
