describe('countAllFromTown' , function(){
    it('Tests the countAllFromTown function' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
});

