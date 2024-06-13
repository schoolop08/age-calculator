function settext(id, error, color){
  //sets error in tag of id
  element = document.getElementById(id);
  element.innerHTML = error;
  element.style.color = color;
  element.style.fontWeight = 600;
}

function validateForm(){
  var returnval = true;

  var date = document.forms['myForm']["dinput"].value;
  var month = document.forms['myForm']["minput"].value;
  var year = document.forms['myForm']["yinput"].value;

  if (date == "" || date>=32 || date<=0){
      settext("derror", "date is not valid", "red");
      returnval = false;
  } else if (month == "" || month>=13 || month<=0){
    settext("merror", "month is not valid", "red");
    returnval = false;
  } else if (year == "" || year>=2025 || year<=0){
    settext("yerror", "year is not valid", "red");
    returnval = false;
  } else {
      calc(date, month, year);
      returnval = false;
      settext("yerror", "", "red");
      settext("merror", "", "red");
      settext("derror", "", "red");
  }

  return returnval;
}

function calc(dd, mm, yy){
    mm = mm - 1;
    var bdate = new Date(yy,mm,dd);
    var today = new Date();
    const newDate = new Date(today - bdate);

    console.log(bdate);
    console.log(today);

    var days =  newDate.getDate()-1;
    var months =  newDate.getMonth();
    var years =  newDate.getFullYear()-1970;

    settext("resd", days, "var(--Primary)");
    settext("resm", months, "var(--Primary)");
    settext("resy", years, "var(--Primary)");
}