
function InputHandler() {
    var input = new Array(91);
    for (var i = 0; i < input.length; i++) {
        input[i] = {
            key: false,
            keyPress: false,
            keyDown: false
        };
    }

    //event listeners for input
    document.addEventListener('keydown',doKeyDown,false);
    document.addEventListener('keyup',doKeyRelease,false);


    function doKeyDown(e) {
        var key = e.keyCode;
        if(key < input.length) input[key].key = true;
    }

    function doKeyRelease(e) {
        var key = e.keyCode;
        if(key < input.length) input[key].key = false;
    }

    this.updateKeys = function() {
        for(var i = 0; i < input.length; i++) {
            if(input[i].keyPress) {
                input[i].keyPress = false;
            }
            if(!input[i].keyDown && input[i].key) {
                input[i].keyPress = true;
            }
            input[i].keyDown = input[i].key;
        }

    }

    this.keyDown = function(key) {
<<<<<<< HEAD
        if(key != 'null' && key != null)
=======
        if(key != null)
>>>>>>> bdb95f017458d0275fe6722678981a90d3a9ec41
          return input[key].keyDown;
        else return false;
    }

    this.keyPress = function(key) {
<<<<<<< HEAD
        if(key != 'null' && key != null)
=======
        if(key != null)
>>>>>>> bdb95f017458d0275fe6722678981a90d3a9ec41
          return input[key].keyPress;
        else
          return false;
    }

    this.resetKeys = function() {
        for(var i = 0; i < input.length; i++) {
            input[i].key = false;
            input[i].keyDown = false;
            input[i].keyPress = false;
        }
    }

    this.getKeyPress = function() {
        for(var i = 0; i < input.length; i++) {
            if(input[i].keyPress == true) return i;
        }
        return null;
    }

    this.Update = function() {
        this.updateKeys();
    }
}
