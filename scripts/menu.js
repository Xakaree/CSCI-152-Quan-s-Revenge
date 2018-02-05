function Menu(){
		this.active = true; 
		this.options = 0;
		this.scene = null; 
		this.Update = function(){
			if (this.active){
			if (input[37]){
				this.options = 0; 
			}
			else if (input[39]){
				this.options = 1; 
			}
			else if (input[32] && this.options == 0){
				this.scene =  new Scene();
				this.scene.Start();  
				this.active = false; 
				
			}
			else if (input[32] && this.options == 1){
				ctx1.clearRect(0,0,width,height); 
				this.active = false;
			}
			}
			if(this.scene != null){
				this.scene.Update(); 
			}
		}
		
		this.Draw = function (){
			if (this.active){
			ctx1.clearRect(0,0,width,height); 
			ctx1.fillStyle = "blue"; 
			ctx1.fillRect(0,0,width,height);
			console.log("we out here "); 
			ctx1.fillStyle = "grey";
			if(!this.options) 
			{
				ctx1.fillStyle = "purple";
				ctx1.fillRect(width/4-25,height/2+37.5,300,125);
			}
			else {
				ctx1.fillRect(width/4,height/2+150,250,50);
			}
			ctx1.fillStyle = "grey";
			if(this.options){
				ctx1.fillStyle = "purple";
				ctx1.fillRect(width*3/5-25,height/2+37.5,300,125);
			}
			else{
				ctx1.fillRect(width*3/5,height/2+150,250,50);
			}
			}
			if(this.scene != null){
				this.scene.Draw(); 
			}
			
		}
}