describe('totalPhoneBill' , function(){
    it('Tests the totalPhoneBill function' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
});
