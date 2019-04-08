describe('countAllPaarl' , function(){
    it('Should return the number of Paarl registration plates in an entered list' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CK 345, CJ 123 456"), 2);
        assert.equal(countAllPaarl("CA 345 123, CK 345, CJ 123 456"), 1);
        assert.equal(countAllPaarl("CL 345 123, CK 345, CA 123 456"), 0);
    });

});

