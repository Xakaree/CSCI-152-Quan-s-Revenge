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
        4: false,
        5: false
    }

    //var oldinp = Object.assign({}, inp);

    function copyinp() {
        for (let k in inp) {
            oldinp[k] = inp[k];
        }
    }

    function compinp() {
        for(let i = 0; i <= 5; i++) {
            if(oldinp[i] != inp[i]) {
                return false;
            }
        }
        return true;
    }

    function Button(code, x, y , w, h, color) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.code = code;
        this.color = color || "black";
    }

    Button.prototype.checkPush = function(x,y) {
        if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height) {
            return true;
        }
        else return false
    }

    Button.prototype.Draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    function checkInput(ts) {
        //oldinp = Object.assign({}, inp);

        for(let i in inp) {
            inp[i] = false;
        }

        for(let i = 0; i < ts.length; i++) {

            for(let j = 0; j < buttons.length; j++) {
                if(buttons[j].checkPush(ts[i].pageX, ts[i].pageY)) {
                    inp[buttons[j].code] = true;   
                }
            }
        }

        //send();
    }

    interval = 1/60;

    function send() {     
        //if(!compinp()) 
        socket.emit('input', inp);
        requestAnimationFrame(send);
        
    }

    

    var width;
    var height;
    var buttons = [];

    function start() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.addEventListener("click", function() {
            toggleFullScreen();
            e.preventDefault();
            var ts = e.touches;
            checkInput(ts);
        }, false);
    
        canvas.addEventListener("touchmove", function(e) {
            e.preventDefault();
            var ts = e.touches;
            checkInput(ts);
        }, false);
    
        canvas.addEventListener("touchstart", function(e) {
            var ts = e.touches;
            checkInput(ts);
    
        }, false);
        canvas.addEventListener("touchend", function(e) {
            var ts = e.touches;
            checkInput(ts);

    
        }, false);

        width = window.screen.width;
        height =  window.screen.height;
        if(width < height) {
            var t = width;
            width = height;
            height = t;
        }

        main();
    }

    function main() {

        ctx.fillStyle = "white";
        ctx.fillRect(0,0,width,height);

        var up = new Button(0, width*0.15, height*0.17, width*0.25, height*0.22, "black");
        var right = new Button(1, width*0.28, height*0.4, width*0.25, height*0.22, "grey");
        var down = new Button(2, width*0.15, height*0.63, width*0.25, height*0.22, "black");
        var left = new Button(3, width*0.02, height*0.4, width*0.25, height*0.22, "grey");
        var attack = new Button(4, width*0.55, height*0.1, width*0.2, height*0.8, "red");
        var jump = new Button(5, width*0.78, height*0.1, width*0.2, height*0.8, "blue");

        buttons.push(up, left, right, down, jump, attack);

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].Draw();
        }

        requestAnimationFrame(send);

    }

    //main();
    