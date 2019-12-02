function myFunction() {
  var yearbirth, monthbirth, datebirth;
  var male, female;
  yearbirth = parseInt(document.getElementById("year").value);
  monthbirth = parseInt(document.getElementById("month").value);
  datebirth = parseInt(document.getElementById("date").value);
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

  if (yearbirth != "" && yearbirth != null && yearbirth > 0 && yearbirth < 2020) {
    if (monthbirth != "" && monthbirth != null && monthbirth > 0 && monthbirth < 13) {
      if (datebirth != "" && datebirth != null && datebirth > 0 && datebirth < 32) {

        if (parseInt(yearbirth) % 4 == 0 && parseInt(yearbirth) % 100 == 0 && parseInt(yearbirth) % 400 == 0) {
          if (parseInt(monthbirth) == 2 && parseInt(datebirth) > 29) {

            alert("You have entered a wrong date");
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
      dayChosen = new Date(yearbirth, monthbirth - 1, datebirth);
      dayIndex = dayChosen.getDay();
      return dayIndex;
    }

    if (male) {
      alert("Your were born on a " + weekDays[calculateDayIndex()]+"  "+"Your male Akan Name is "+ maleNames[calculateDayIndex() ]);

    } else {
      alert("Your were born on a " + weekDays[calculateDayIndex()] + " " +"Your female Akan Name is " + femaleNames[calculateDayIndex()]);

    }

  }

}
