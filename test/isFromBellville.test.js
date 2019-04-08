describe('isFromBellville' , function(){
    it('Should return true if a valid registration number is entered (starts with CY)' , function(){
        assert.equal(isFromBellville("CY1234"),true);
        assert.equal(isFromBellville("CJ43215"), false);
    });

});
