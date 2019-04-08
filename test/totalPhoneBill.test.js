describe('totalPhoneBill' , function(){
    it('Should return the correct total according to the entered string' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
        assert.equal(totalPhoneBill('call, sms'),'R3.40');
        assert.equal(totalPhoneBill('sms, sms'),'R1.30');
    });
});
