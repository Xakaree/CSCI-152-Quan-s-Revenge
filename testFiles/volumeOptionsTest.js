/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */
 describe('volumeoptions.js', function(){

   describe('volumeoptions' , function(){



 it('not intially active', function(){
     v = new VolumeOptions();
     assert.isFalse(v.active);
     //assert.isFalse(VolumeOptions.active);
 });

 it('should have a draw function', function(){
    v = new VolumeOptions();
   assert.isFunction(v.Draw);
 });
 it('should have an update function', function(){
    v = new VolumeOptions();
    assert.isFunction(v.Update);
 });
 it('active should be true once start function starts', function(){
    v = new VolumeOptions();
    v.Start();
   assert.isTrue(v.active);
 });

 it('VolumeOptions should be active', function(){
   assert.equal(VolumeOptions.active);
   });
 /*

 it('', function(){

 });
 it('', function(){

 });
 */
});
   });
