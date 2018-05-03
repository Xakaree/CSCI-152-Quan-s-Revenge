/*
        describe('name of group', function(){

        });

        it('description of test case, function(){
        test case goes here
        });
 */

 describe('character.js', function(){

      describe('CSelect', function(){

        it('Should return an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect);
        });
        it('CSelect should be inactive', function(){
          var cSelect = new CSelect();
          assert.isFalse(cSelect.active);
        });
        it('should be active after it is set to active.', function(){
          var cSelect = new CSelect();
          cSelect.Start();
          assert.isTrue(cSelect.active);
        });
        it('CSelect stage select should be null', function(){
            var cSelect = new CSelect();
            assert.isNull(cSelect.stageselect);
        });
        it('selection should be an array', function(){
          var cSelect = new CSelect();
          assert.isArray(cSelect.selection);
        });
        it('char1 should be an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect.char1);
        });
        it('char2 should be an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect.char2);
        });
        it('char2 should be an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect.char2);
        });
        it('char3 should be an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect.char3);
        });
        it('char4 should be an object', function(){
          var cSelect = new CSelect();
          assert.isObject(cSelect.char4);
        });
        it('all player should not be confirmed', function(){
          var cSelect = new CSelect();
          assert.isFalse(cSelect.char1.confirmed);
          assert.isFalse(cSelect.char2.confirmed);
          assert.isFalse(cSelect.char3.confirmed);
          assert.isFalse(cSelect.char4.confirmed);
        });
        it('all players controllers should be set to null', function(){
          var cSelect = new CSelect();
          assert.isNull(cSelect.char1.controller);
          assert.isNull(cSelect.char2.controller);
          assert.isNull(cSelect.char3.controller);
          assert.isNull(cSelect.char4.controller);
        });
        it('the characters should be in an array', function(){
            var cSelect = new CSelect();
            assert.isArray(cSelect.characters);
        });
        /*
      it('after menu starts character screen should be populated',function(){
          var cSelect = new CSelect();
          cSelect.Start();
          cSelect.checkController = true;
          cSelect.checkInput();
          input.keyPress(char.controller.up);
          assert.equal(char.color, '1', '0');
        });

      it('confirms selected player if space is pressed', function(){
          var cSelect = new CSelect();
          cSelect.Start();
          cSelect.char1.controller = p1controls;
          console.log(input.keyPress(cSelect.char1.controller[32]));
          var key =input.keyPress(cSelect.char1.controller[32]);
          key = true;
          console.log(input.keyPress(cSelect.char1.controller[32]));
          cSelect.checkInput(cSelect.char1);
          console.log(cSelect.char1.confirmed);

          assert.isTrue(cSelect.char1.confirmed);
      });

      it('confirms players selection', function(){
          var cSelect = new CSelect();
          cSelect.char1.controller = cSelect.char1;
          cSelect.char1.confirmed = true;
          input.keyPress(p1controls.jump);
          cSelect.checkInput(char1);
          //input.keyPress(pcontrols[0].attack);
          assert.isTrue(cSelect.char1.confirmed);
      });
      it('make sure confirm input works properly', function(){
        var cSelect = new CSelect();
        cSelect.char1.controller = true;
        //input.keyPress(38); // up
        input(32).keyPress = true;
        assert.equal(cSelect.char1.color, 1, ' ')
      });
         */
      });
 });
