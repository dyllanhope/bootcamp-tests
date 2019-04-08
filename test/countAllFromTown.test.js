describe('countAllFromTown' , function(){
    it('Should return the number of plates from an entered string with an entered location code(CL,CY,CJ etc.)' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'),1);
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CA'),0);
    });
});

