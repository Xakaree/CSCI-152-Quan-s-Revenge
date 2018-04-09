function startScreen(){
		this.active = true;
		this.startOptions = 0; // 0 is the left button,  1 is the right button
		this.menu = null;

		this.Update = function(){
			if (this.active){
					if (input.keyPress(pcontrols[0].left)){ //37 is left arrow
						this.startOptions = 0;
					}
					else if (input.keyPress(pcontrols[0].right)){ //39 is right arrow
						this.startOptions = 1;
					}
					else if (input.keyPress(pcontrols[0].attack) && this.startOptions == 0){ //start game
						input.resetKeys(); //  needed when
						this.menu =  new Menu();
						this.menu.Start();
						this.active = false;
					}
					else if (input.keyPress(pcontrols[0].attack) && this.startOptions == 1){ // quit
						ctx1.clearRect(0,0,width,height);
						this.active = false;
					}
			}
			if(this.menu != null){
				this.menu.Update();
			}
		} // end update

		this.Draw = function (){
			if (this.active){
				ctx1.clearRect(0,0,width,height); //clears canvas
				ctx1.fillStyle = "white"; // background color
				ctx1.fillRect(0,0,width,height);
				ctx1.fillStyle = "grey";

				if(!this.startOptions){ //left button selected
						ctx1.fillStyle = "blue";
						ctx1.fillRect(width/4-25,height/2+37.5,300,125);
						ctx1.fillStyle ="white";
						ctx1.font = "120px Comic Sans";
						ctx1.fillText("Play",width/4-25+35 , height/2+37.5 + 100);
				}
				else {
						ctx1.fillRect(width/4,height/2+150,250,50);  //default retangle
		  	}
			  ctx1.fillStyle = "grey";

				if(this.startOptions){ //right button selected
					ctx1.fillStyle = "red";
					ctx1.fillRect(width*3/5-25,height/2+37.5,300,125);
					ctx1.fillStyle ="white";
					ctx1.font = "120px Comic Sans";
					ctx1.fillText("Quit", width*3/5-25+35, height/2+37.5 + 100);
			  }
			 else{
					ctx1.fillRect(width*3/5,height/2+150,250,50); // default rectangle
			 }

			}
			if(this.menu != null){
				this.menu.Draw();
			}
		}
} // end draw
