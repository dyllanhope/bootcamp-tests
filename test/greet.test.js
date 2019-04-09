describe('Greet' , function(){
    it('Should return "Hello, Dyllan" when "Dyllan" was entered' , function(){
        assert.equal(greet("Dyllan"),"Hello, Dyllan");
    });
    it('Should return "Hello, Vuyo" when "Vuyo" was entered' , function(){
        assert.equal(greet("Vuyo"),"Hello, Vuyo");
    });
});
