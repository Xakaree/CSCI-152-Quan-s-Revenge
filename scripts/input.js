
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
        if(key == null) return false;
        return input[key].keyDown;
    }

    this.keyPress = function(key) {
        if(key == null) return false;
        return input[key].keyPress;
    }

    this.Update = function() {
        this.updateKeys();
    }
}
