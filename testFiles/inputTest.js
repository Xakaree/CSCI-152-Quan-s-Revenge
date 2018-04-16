
describe('Input.js', function(){


    describe('InputHandler()', function(){
    
    
        it('Should return an object', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler);
        });
        

        it('Should have update keys property', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler.updateKeys, 'Passed');
        });
        
        
        it('Should have key down property', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler.keyDown, 'Passed');
        });
        
        it('Should have key press property', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler.keyPress, 'Passed');
        });

        it('Should have reset key property', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler.resetKeys, 'Passed');
        });

        it('Should have get key press property', function(){
            var handler = new InputHandler();
            assert.isNotNull(handler.getKeyPress, 'Passed');
        });
        
        it('Should have Update function', function(){
            var handler = new InputHandler();
            assert.isFunction(handler.Update, 'Passed');
        });
        
        it('key down should return false', function(){
            var handler = new InputHandler();
            assert.isNotTrue(handler.keyDown(null), 'Passed');
        });
        
        it('key pressed should return false', function(){
            var handler = new InputHandler();
            assert.isNotTrue(handler.keyPress(null), 'Passed');
        });
        
        
        it('getKeyPress should return null ', function(){
            var handler =  new InputHandler();
            assert.isNull(handler.getKeyPress(), 'Passed');
        });
        
    
        it('Should return false for do key down', function(){
            var key;
            var input = new Array(91);
            for (var i = 0; i < input.length; i++) {
                input[i] = {
                key: false,
                keyPress: false,
                keyDown: false
                };
            }
            
            assert.isNotTrue(input[32].key ,'Passed');
                    
        });

    });

});

