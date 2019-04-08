function yearsAgo (year) {
  var d = new Date();
  var currentYear = d.getFullYear();
  return currentYear-year;
}
