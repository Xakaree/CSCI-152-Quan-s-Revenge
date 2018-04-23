/* 
        describe('', function(){
        
        });

        it('', function(){

        });
 */

describe('Audio.js', function(){
        
    describe('Sound()', function(){
        
        it('Should return an object', function(){
            var snd = new sound("audioFiles/jump_3.wav", false, 1);
            assert.isObject(snd);
        });
        
        it('Sound object should not loop', function(){
            var snd = new sound("audioFiles/jump_3.wav", false, 1);
            assert.equal(snd.sound.loop, false);
        });
        
        it('Sound object should loop', function(){
            var snd = new sound("audioFiles/jump_3.wav", true, 1);
            assert.equal(snd.sound.loop, true );
        });
        
        it('volume should be set to 0.5', function(){
            var snd = new sound("audioFiles/jump_3.wav", false, 0.5);
            assert.equal(snd.sound.volume, 0.5);
        });
        
        it('Should be able to change volume', function(){
            var snd = new sound("audioFiles/jump_3.wav", false, 1);
            snd.changeVolume(0.5);
            assert.equal(snd.sound.volume, 0.5);
        }); 
    
    });
        
});