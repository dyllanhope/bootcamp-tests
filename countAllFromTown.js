function countAllFromTown (regNo,loc){
  console.log(regNo);
  	var list = regNo.split(',');
  //console.log(list);
  	var locList = [];
  	for (var i=0; i<list.length ;i++){
      	if (list[i].startsWith(loc) || list[i].startsWith(" "+loc)){
            	locList.push(list[i]);
            }
    }
  //console.log(locList);
 return locList.length;
} 
