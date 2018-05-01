/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
-----completed--------------------
 */

 describe('stageData.js', function(){

 describe('stageData', function(){

  it('items in stageData array should be an object', function(){

    assert.isObject(stageData[0]);
    assert.isObject(stageData[0]);

  });
  it('first stage data should not be null', function(){

    assert.isNotNull(stageData[0].background);
    assert.isNotNull(stageData[0].midground);
    assert.isNotNull(stageData[0].foreground);
    assert.isNotNull(stageData[0].objs);

  });
  it('second stage data should not be null', function(){

    assert.isNotNull(stageData[1].background);
    assert.isNotNull(stageData[1].midground);
    assert.isNotNull(stageData[1].foreground);
    assert.isNotNull(stageData[1].objs);

  });

  });

});
