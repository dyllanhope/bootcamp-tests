describe('isWeekday' , function(){
    it('Should return true if the entered day is a weekday(Mon-Fri)' , function(){
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Saturday'), false);
    });

});
