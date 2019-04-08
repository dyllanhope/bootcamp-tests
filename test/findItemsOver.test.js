describe('findItemsOver' , function(){
    it('Should return 2 items in an array with qty over 15' , function(){
        assert.deepEqual(findItemsOver([
	{name: 'apples', qty: 10},
	{name: 'pears', qty: 19},
	{name: 'bananas', qty: 17},
	{name: 'apples', qty: 3}
],15),[	
	{name: 'pears', qty: 19},
	{name: 'bananas', qty: 17}
]);
    });
});
