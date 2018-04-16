
function InputHandler() {
    var input = new Array(91);
    var einput = [];
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

    this.serverDown = function(id, e) {
        if(!einput[id]) {
            console.log("making new input");
            einput[id] = {
                0: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                },
                1: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                },
                2: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                },
                3: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                },
                4: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                },
                5: {
                    key: false,
                    keyPress: false,
                    keyDown: false
                }

            }
        }
        if(einput[id][e]) {
            einput[id][e].key = true;
        }
    }

    this.serverUp = function(id, e) {
        if(einput[id]) {
            if(einput[id][e]) {
                einput[id][e].key = false;
            }
        }
    }


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

        for(let k in einput) {
            for(let l in einput[k]) {
                if(einput[k][l].keyPress) {
                    einput[k][l].keyPress = false;
                }
                if(!einput[k][l].keyDown && einput[k][l].key) {
                    einput[k][l].keyPress = true;
                }
                einput[k][l].keyDown = einput[k][l].key;
            }
        }

    }

    this.keyDown = function(key) {
        if(key != 'null' && key != null) {
            if(key.constructor == Array) {
                return einput[key[0]][key[1]].keyDown;
            } 
            return input[key].keyDown;
        }
        else
          return false;
    }

    this.keyPress = function(key) {
        if(key != 'null' && key != null) {
            if(key.constructor == Array) {
                return einput[key[0]][key[1]].keyPress;
            } 
            return input[key].keyPress;
        }
        else
          return false;
    }

    this.resetKeys = function() {
        for(var i = 0; i < input.length; i++) {
            input[i].key = false;
            input[i].keyDown = false;
            input[i].keyPress = false;
        }
        for(let k in einput) {
            for(let l in einput[k]) {
                einput[k][l].key = false;
                einput[k][l].keyPress = false;
                einput[k][l].keyDown = false;
            }
        }
    }

    this.getKeyPress = function() {
        for(var i = 0; i < input.length; i++) {
            if(input[i].keyPress == true) return i;
        }
        for(let k in einput) {
            for(let l in einput[k]) {
                if(einput[k][l].key == true) {
                    return [k,l];
                }
            }
        }
        return null;
    }

    this.Update = function() {
        this.updateKeys();
    }
}

if(typeof io != 'undefined') {
    var socket = io();

    socket.emit('coderequest');

    socket.on('code', function(code) {
        console.log("code recieved");
        sessionCode = code;
    });

    socket.on('hosttdown', function(id, inp) {
        if(!econtrols[id]) {
            console.log("making new controller");
            econtrols[id] = new mobile(id);
        }
        input.serverDown(id, inp);
    });

    socket.on('hosttup', function(id, inp) {
        input.serverUp(id, inp);
    });
}

