describe('transportFee' , function(){
    it('should return correctly with the correct pay for the specified shift' , function(){
        assert.equal(transportFee('morning'),'R20');
        assert.equal(transportFee('afternoon'),'R10');
        assert.equal(transportFee('evening'),'free');
    });

});
