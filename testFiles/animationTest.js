/*
    describe('', function(){});

    it('', function(){});
*/

    describe('Animation.js', function(){
        
        describe('#animation()', function(){
        
            it('Track frame should be at 0', function(){
            var anm = new animation(LCsprite,defaultcontrols);
            assert.isObject(anm);
            });
        
            it('Should have a play function', function(){
            var anm = new animation(LCsprite,defaultcontrols);
            assert.isFunction(anm.play);
            });
            
            it('Should have a update function', function(){
            var anm = new animation(LCsprite,defaultcontrols);
            assert.isFunction(anm.Update);
            });
            
            it('Should have a Draw function', function(){
            var anm = new animation(LCsprite,defaultcontrols);
            assert.isFunction(anm.Draw);
            });      
        });

    });