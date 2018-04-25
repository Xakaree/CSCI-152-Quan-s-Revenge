/* 
        describe('name of group', function(){
            it function goes here
        });

        it('', function(){
        test case goes here
        });
 */
 
 describe('Button.js', function(){
        it('Should return an object', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        assert.isObject(button);
        });
        
        it('X position of button should be @ 100', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        assert.equal(button.xPos, 100 );
        });
        
        it('Y position of button should be @ 100', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        assert.equal(button.yPos, 100 );
        });
        
        it('imageact should be set to PLYRACT', function(){
        //var PLYRACT = document.getElementById("PLYRACT");
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        console.log(PLYRACT);
        assert.isNotNull(button.iact, PLYRACT);
        });
        
        it('imageact should be set to PLYRNULL', function(){
        //var PLYRACT = document.getElementById("PLYRACT");
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        console.log(PLYRACT);
        assert.isNotNull(button.inull, PLYRNULL);
        });
        
        it('Button should initially be unselected', function(){
        var PLYRACT = document.getElementById("PLYRACT");
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        assert.equal(button.selected, false);
        });
        
        it('Should have a selection function', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        assert.isFunction(button.Select);
        });
        
        it('Should return true when selected', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        button.Select();
        assert.isTrue(button.selected);
        });
        
        it('Should return false when unselected', function(){
        var button = new Button(100,100,ctx1,PLYRACT ,PLYRNULL);
        button.Select();
        button.Unselect();
        assert.isFalse(button.selected);
        });
        
        
        
});