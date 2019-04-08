describe('fromWhere' , function(){
    it('Should return the city that matches the registration code (eg.CY-Cape Town)' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('AY'), 'Some other place!');

    });

});
