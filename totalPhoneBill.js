function totalPhoneBill(data) {
 	var cellData = data.split(', ');
  	var smsCount = 0;
  	var callCount = 0;
  
  	for (var i=0;i<cellData.length;i++){
      	if(cellData[i] === "call"){
           callCount++;
        }else{
          smsCount++;
        }
    }
  var total = (smsCount*0.65) + (callCount*2.75);
  return 'R' + total.toFixed(2);
}
