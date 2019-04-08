describe('totalPhoneBill' , function(){
    it('Should return R7.45' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
});
