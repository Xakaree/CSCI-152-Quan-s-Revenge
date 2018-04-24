/* 
        describe('', function(){
        
        });

        it('', function(){

        });
 */


describe('Menu.js', function(){
        
    describe('Menu()', function(){
    
        it('Should return an object', function(){
        var menu = new Menu();
        assert.isObject(menu);
        });
        
        it('Menu object should initially be inactive', function(){
        var menu = new Menu();
        assert.isFalse(menu.active);
        });
        
        it('Menu object should be active after starting method invoked', function(){
        var menu = new Menu();
        menu.Start();
        assert.isTrue(menu.active);
        });
        
        it('Mapping should initially be empty', function(){
        var menu = new Menu();
        assert.isEmpty(menu.map);
        });
        
        it('After menu state starts, map should be populated with buttons', function(){
        var menu = new Menu();
        menu.Start();
        assert.instanceOf(menu.map[0], Button);
        assert.instanceOf(menu.map[1], Button);
        });
        
        it('Should initially have menu option 0 selected', function(){
        var menu = new Menu();
        assert.equal(menu.menuOption, 0);
        });
        
        it('Should have a draw function', function(){
        var menu = new Menu();
        assert.isFunction(menu.Draw);
        });
        
        it('After menu is started, options setting should be drawn', function(){
        var menu = new Menu();
        //menu.Start();
        //menu.Draw();
        assert.isNotNull(menu.options);
        });
        
        it('Should have a update function', function(){
        var menu = new Menu();
        assert.isFunction(menu.Update);
        });
        
        it('cSelect should not be null after it is selected', function(){
        var menu = new Menu();
        menu.Start();
        input.keyPress(pcontrols[0].attack);
        menu.Update();
        assert.isNotNull(menu.cSelect);
        });
        
        it('options should not be null after it is selected', function(){
        var menu = new Menu();
        menu.Start();
        menu.menuOption = 1;
        input.keyPress(pcontrols[0].attack);
        menu.Update();
        assert.isNotNull(menu.options);
        });
        
        it('map should have a length of 2', function(){
        var menu = new Menu();
        menu.Start();
        assert.equal(Object.keys(menu.map).length, 2);
        });
        

    });
        
});