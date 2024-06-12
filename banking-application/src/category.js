var category = function category(key) {

  if (key == "EL" || key=="el" || key=="El" || key =="eL") {
    return "Education Loan";
  } else if (key == "HL" || key=="hl" || key=="Hl" || key =="hL") {
    return "Home Loan";
  } else if (key == "VL" || key=="vl" || key=="Vl" || key =="vL") {
    return "Vehicle Loan";
  } else if (key == "PL" || key=="pl" || key=="Pl" || key =="pL") {
    return "Personal Loan";
  }
};

module.exports = {
  category: category
};