describe('Greet' , function(){
    it('Should return "Hello, " and the entered name' , function(){
        assert.equal(greet("Dyllan"),"Hello, Dyllan");
        assert.equal(greet("Vuyo"),"Hello, Vuyo");
    });
});
