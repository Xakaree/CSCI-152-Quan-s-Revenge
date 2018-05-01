describe('stageselect.js', function(){
  describe('StageSelect',function(){
      it('StageSelect should be an object', function(){
        stageSelect = new StageSelect();
        assert.isObject(stageSelect)
      });
      it('Start should be a function', function(){
        stageSelect = new StageSelect();
        assert.isFunction(stageSelect.Start)
      });

      it('Draw should be a function', function(){
        stageSelect = new StageSelect();
        assert.isFunction(stageSelect.Draw)
      });

      it('Update should be a function', function(){
        stageSelect = new StageSelect();
        assert.isFunction(stageSelect.Update)
      });

      it('should be inactive if not yet called', function(){
        stageSelect = new StageSelect();
        assert.isFalse(stageSelect.active);
      });
      it('scene should be null at start', function(){
        stageSelect = new StageSelect();
        assert.isNull(stageSelect.scene);

      });
      it('should match number of stages', function(){
        stageSelect = new StageSelect();
        assert.equal(stageSelect.numstages, 2, 'currently two stages');

      });

      it('if left button is pressed on stage select it should not do anything',function(){
        stageSelect = new StageSelect();
        stageSelect.Start();
        //stageSelect.Draw();
        stageSelect.Update();
        input.keyPress(pcontrols[0].left);
        stageSelect.Update();
        assert.equal(stageSelect.toggle, 0, 'should not do anything');
          });
          /*
        it('if right button is pressed on stage select it should add one',function(){
          stageSelect = new StageSelect();
          stageSelect.Start();
        input.keyPress(pcontrols.right);
        stageSelect.Update();
          input.getRight();
          stageSelect.Update();
          assert.equal(stageSelect.toggle, 1, 'should add one to toggle');
        });

*/
  });
});
