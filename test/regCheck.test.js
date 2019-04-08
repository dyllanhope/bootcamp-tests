describe('regCheck' , function(){
    it('Should return false if an invalid registration number is entered' , function(){
        assert.equal(regCheck("CY1234","CY"),false);
        assert.equal(regCheck("45112CY","CY"),true);
    });

});
