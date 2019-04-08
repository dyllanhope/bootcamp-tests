describe('countRegNumber' , function(){
    it('Should return the total number of entered registration numbers' , function(){
        assert.equal(countRegNumber("CY1234, CA5674, CJ2468"),3);
        assert.equal(countRegNumber("CY1234, CA5674"),2);
        assert.equal(countRegNumber("CY1234"),1);
    });
});
