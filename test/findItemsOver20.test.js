describe('findItemsOver20' , function(){
    it('Should return all items in the object that have a quantity over 20' , function(){
        assert.deepEqual(findItemsOver20([
    {"name":'apples',"qty":10},
    {"name":'pears',"qty":37},
    {"name":'bananas',"qty":27},
    {"name":'apples',"qty":3},
]), [
    {"name":'pears',"qty":37},
    {"name":'bananas',"qty":27},
]);
        assert.deepEqual(findItemsOver20([
    {"name":"apples","qty":10},
    {"name":"pears","qty":19},
    {"name":"bananas","qty":17},
    {"name":"apples","qty":3}
]), []);
        assert.deepEqual(findItemsOver20([
    {"name":"apples","qty":40},
    {"name":"pears","qty":20},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
]), [
    {"name":"apples","qty":40},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
]);
    });
});
