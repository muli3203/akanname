function myFunction() {
  //create variable to store the data obtained from the inputs of the html
  var yearOb, monthOb, dateOb;
  var male, female;
  yearOb = parseInt(document.getElementById("year").value);
  monthOb = parseInt(document.getElementById("month").value);
  dateOb = parseInt(document.getElementById("date").value);
  male = document.getElementById("male").checked;
  female = document.getElementById("female").checked;

  //Variable that hold the calculation of the day of the week
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Koffi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var dayChosen;
  var dayIndex;


  //Function to derive the name of the given person from the particular details given
  function getName() {
      function calculateDayIndex() {
          dayChosen = new Date(yearOb, monthOb - 1, dateOb);
          dayIndex = dayChosen.getDay();
          return dayIndex;
      }

      //checking if the radio button is checked for male and display appropriate name
      if (male) {
          alert("Your were born on a " + weekDays[calculateDayIndex()]);
          document.getElementById("check").innerHTML = "Check Down here &#8595;";
          document.getElementById("check").style.color="red";
          document.getElementById("display").innerHTML = "Your male Akan Name is " + maleNames[calculateDayIndex()];
          document.getElementById("display").style.color = "#D2C0AE";
          document.getElementById("display").style.padding = "2%";
      }
      else {
          //display appropriate name if someone choses female
          alert("Your were born on a " + weekDays[calculateDayIndex()]);
          document.getElementById("check").innerHTML = "Check Down here &#8595;"; 
          document.getElementById("check").style.color="red";    
          document.getElementById("display").innerHTML = "Your female Akan Name is " + femaleNames[calculateDayIndex()];
          document.getElementById("display").style.color = "#D2C0AE";
          document.getElementById("display").style.padding = "2%";

      }

  }

  //Check if the year input field has been populated correctly
  if (yearOb != "" && yearOb != null && yearOb > 0 && yearOb < 2020) {
      //Check if the month input field has been populated or correctly populated
      if (monthOb != "" && monthOb != null && monthOb > 0 && monthOb < 13) {
          //Check if the date input field has correctly been populated
          if (dateOb != "" && dateOb != null && dateOb > 0 && dateOb < 32) {

              //Check if the year is a leap year
              if (parseInt(yearOb) % 4 == 0 && parseInt(yearOb) % 100 == 0 && parseInt(yearOb) % 400 == 0) {
                  //Check if the month chosen is february for a leap year and the leap year date is correct
                  if (parseInt(monthOb) == 2 && parseInt(dateOb) > 29) {

                      //Throw an error if the leap year date of birth is not correct
                      alert("You have entered a wrong date");
                      document.getElementById("date").style.border = "2px solid red";
                      document.myForm.date.focus();
                      return false;
                  }
                  else {
                      getName();
                  }
              }

              //The rest of the years that are not leap years are calculated below
              else {
                  getName();
              }


          }
          //Throw an error if the date input field has not been populated correctly
          else {
              alert("Please enter the date of birth: ");
              document.getElementById("date").style.border = "2px solid red";
              document.myForm.date.focus();
              return false;
          }

      }
      //Throw an error if the month input field has not been populated correctly
      else {
          alert("Please enter your month of birth");
          document.getElementById("month").style.border = "2px solid red";
          document.myForm.month.focus();
          return false;
      }

  }
  //Throw an error if the year field has not been populated correctly
  else {
      alert("Please enter your year of birth");
      document.getElementById("year").style.border = "2px solid red";
      document.myForm.year.focus();
      return false;
  }




}
