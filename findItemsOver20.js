function findItemsOver20 (list) {
  	var over20 = [];
  	for (var i=0; i<list.length; i++){
      	if (list[i].qty > 20){
            	over20.push(list[i]);
            }
    }
  	return over20;
}
