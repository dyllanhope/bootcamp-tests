function yearsAgo (year) {
  var d = new Date();
  var dif ;
  var currentYear = d.getFullYear();
  if (currentYear > year){
    return currentYear - year;
  } else{
    return "not possible";
  }
}
