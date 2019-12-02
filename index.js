function myFunction() {
  var yearOb, monthOb, dateOb;
  var male, female;
  yearOb = parseInt(document.getElementById("year").value);
  monthOb = parseInt(document.getElementById("month").value);
  dateOb = parseInt(document.getElementById("date").value);
  male = document.getElementById("male").checked;
  female = document.getElementById("female").checked;

  var weekDays = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];

  var maleNames = [
    "Kwasi", 
    "Kwadwo", 
    "Kwabena", 
    "Kwaku", 
    "Yaw", 
    " Koffi", 
    "Kwame"
  ];

  var femaleNames = [
    "Akosua", 
    "Adwoa", 
    "Abenaa", 
    "Akua", 
    "Yaa", 
    "Afua", 
    "Ama"
  ];
  var dayIndex;
  var dayChosen;

  if (yearOb != "" && yearOb != null && yearOb > 0 && yearOb < 2020) {
    if (monthOb != "" && monthOb != null && monthOb > 0 && monthOb < 13) {
      if (dateOb != "" && dateOb != null && dateOb > 0 && dateOb < 32) {

        if (parseInt(yearOb) % 4 == 0 && parseInt(yearOb) % 100 == 0 && parseInt(yearOb) % 400 == 0) {
          if (parseInt(monthOb) == 2 && parseInt(dateOb) > 29) {

            alert("You have entered a wrong date");
            document.getElementById("date").style.border = "2px solid red";
            document.myForm.date.focus();
            return false;
          } else {
            getName();
          }
        }

        else {
          getName();
        }

      }
      else {
        alert("Please enter the date of birth: ");
        document.myForm.date();
        return false;
      }

    }
    else {
      alert("Please enter your month of birth");
      document.myForm.month();
      return false;
    }

  }
  else {
    alert("Please enter your year of birth");
    document.myForm.year();
    return false;
  }


  function getName() {
    function calculateDayIndex() {
      dayChosen = new Date(yearOb, monthOb - 1, dateOb);
      dayIndex = dayChosen.getDay();
      return dayIndex;
    }

    if (male) {
      alert("Your were born on a " + weekDays[calculateDayIndex()]);
      document.getElementById("check").style.color = "red";
      document.getElementById("display").innerHTML = "Your male Akan Name is " + maleNames[calculateDayIndex()];

    } else {
      alert("Your were born on a " + weekDays[calculateDayIndex()]);
      document.getElementById("check").style.color = "red";
      document.getElementById("display").innerHTML = "Your female Akan Name is " + femaleNames[calculateDayIndex()];

    }

  }

}
