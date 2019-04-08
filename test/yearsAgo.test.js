describe('yearsAgo' , function(){
    it('Should return correctly with the difference between the current year and entered year' , function(){
        assert.equal(yearsAgo(2000), 19);
        assert.equal(yearsAgo(2017),2);
    });

});
