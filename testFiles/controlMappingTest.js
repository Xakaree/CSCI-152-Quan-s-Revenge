/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */
     describe('controlMapping.js', function(){

       describe('controlMapping ()', function(){


     it('controls initial state should be set to false', function(){
        controlCheck = new controlMapping();
        assert.equal(controlCheck.controls["up"], false, 'up should be false');
        assert.equal(controlCheck.controls["down"], false, 'down should be false');
        assert.equal(controlCheck.controls["left"], false, ' left up should be false');
        assert.equal(controlCheck.controls["right"], false, 'right should be false');
        assert.equal(controlCheck.controls["attack"], false, 'attack should be false');
        assert.equal(controlCheck.controls["jump"], false, ' jump should be false');
      });

      it('requesting key initial state should be set to false', function(){
        controlCheck = new controlMapping();
        assert.isFalse(controlCheck.requestingKey);
      });
      it('should have a draw function', function(){
        controlCheck = new controlMapping();
        assert.isFunction(controlCheck.Draw);
      });
      it('should have an update function', function(){
        controlCheck = new controlMapping();
        assert.isFunction(controlCheck.Update);
      });
      
  });
});
