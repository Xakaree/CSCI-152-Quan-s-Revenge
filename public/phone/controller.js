    var canvas;
    var ctx;

    function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(canvas);
        }
        else {
            //cancelFullScreen.call(doc);
        }
    }

    
    var inp = {
        0: false,
        1: false,
        2: false,
        3: false,
        5: false,
        4: false
    }

    var oldinp = oldinp = Object.assign({}, inp);


    function checkInput(ts) {
        oldinp = Object.assign({}, inp);

        for(let i in inp) {
            inp[i] = false;
        }

        for(let i = 0; i < ts.length; i++) {
            if(ts[i].pageX > width*0.2 && ts[i].pageX < width*0.2+90 && ts[i].pageY > height*0.2 && ts[i].pageY < height*0.2+90) {
                inp[0] = true;
            }
            if(ts[i].pageX > width*0.2 && ts[i].pageX < width*0.2+90 && ts[i].pageY > height*0.6 && ts[i].pageY < height*0.6+90) {
                inp[2] = true;
            }
            if(ts[i].pageX > width*0.08 && ts[i].pageX < width*0.08+90 && ts[i].pageY > height*0.4 && ts[i].pageY < height*0.4+90) {
                inp[3] = true;
            }
            if(ts[i].pageX > width*0.33 && ts[i].pageX < width*0.33+90 && ts[i].pageY > height*0.4 && ts[i].pageY < height*0.4+90) {
                inp[1] = true;
            }
            if(ts[i].pageX > width*0.6 && ts[i].pageX < width*0.6+90 && ts[i].pageY > height*0.4 && ts[i].pageY < height*0.4+90) {
                inp[4] = true;
            }
            if(ts[i].pageX > width*0.75 && ts[i].pageX < width*0.75+90 && ts[i].pageY > height*0.4 && ts[i].pageY < height*0.4+90) {
                inp[5] = true;
            }
        }
    }

    interval = 1/60;

    function send() {
        /*if(inp.left != oldinp.left) {
        if(inp.left) socket.emit("tdown", 3);
        else socket.emit("tup", 3);
        }
            
        if(inp.right != oldinp.right) {
        if(inp.right) socket.emit("tdown", 1);
        else socket.emit("tup", 1);
        }
            
        if(inp.up != oldinp.up) {
        if(inp.up) socket.emit("tdown", 0);
        else socket.emit("tup", 0);
        }
            
        if(inp.down != oldinp.down) {
        if(inp.down) socket.emit("tdown", 2);
        else socket.emit("tup", 2);
        }
            
        if(inp.jump != oldinp.jump) {
        if(inp.jump) socket.emit("tdown", 5);
        else socket.emit("tup", 5);
        }
            
        if(inp.attack != oldinp.attack) {
        if(inp.attack) socket.emit("tdown", 4);
        else socket.emit("tup", 4);
        }

        oldinp = Object.assign({}, inp);*/ 
        
        if(oldinp != inp) socket.emit('input', inp);
        requestAnimationFrame(send); //loops while allowing rest of browser to run
        
    }

    

    var width;
    //var DPR = window.devicePixelRatio;
    var height;
    //width = Math.round(DPR * width);
    //height = Math.round(DPR * height);

    //canvas.width = width;
    //canvas.height = height;


    //canvas.requestFullscreen();

    function start() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.addEventListener("click", function() {
            toggleFullScreen();
            e.preventDefault();
        }, false);
    
        canvas.addEventListener("touchmove", function(e) {
            e.preventDefault();
            var ts = e.touches;
            checkInput(ts);
            //send();
        }, false);
    
        canvas.addEventListener("touchstart", function(e) {
            var ts = e.touches;
            checkInput(ts);
            //send();
    
        }, false);
        canvas.addEventListener("touchend", function(e) {
            var ts = e.touches;
            checkInput(ts);
            //send();
    
        }, false);

        width = screen.width;
        //var DPR = window.devicePixelRatio;
        height =  screen.height;
        //width = Math.round(DPR * width);
        if(width < height) {
            var t = width;
            width = height;
            height = t;
        }

        main();
    }

    function main() {

        ctx.fillStyle = "grey";
        ctx.fillRect(0,0,width,height);

        ctx.fillStyle ="black";
        ctx.fillRect(width*0.2, height*0.2, 90,90); //up
        ctx.fillRect(width*0.2, height*0.6, 90,90); //down
        ctx.fillRect(width*0.08, height*0.4, 90,90); //left
        ctx.fillRect(width*0.33, height*0.4, 90,90); //right

        ctx.fillStyle = "red";
        ctx.fillRect(width*0.6, height*0.4, 90,90); //attack
        ctx.fillStyle ="white";
        ctx.font = "40px Arial";
        ctx.fillText("atk", width*0.6 + 15, height*0.4 + 55);

        ctx.fillStyle = "blue";
        ctx.fillRect(width*0.75, height*0.4, 90,90); //jump
        ctx.fillStyle ="white";
        ctx.font = "30px Arial";
        ctx.fillText("jump", width*0.75 + 10, height*0.4 + 55);

        //ctx.fillText(width.toString(), 10,10);
        //ctx.fillText(height.toString(), 10,20);

        requestAnimationFrame(send);
    }

    //main();
    