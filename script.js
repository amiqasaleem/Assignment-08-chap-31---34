//Task 01:
//Write a program that displays current date and time in your browser.

var now = new Date();
document.write(now);

//Task 02:
/*Write a program that alerts the current month in words. For example December.*/

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow = new Date();
var currentMonth = rightNow.getMonth();
document.write("</br>Currrent Month: ", monthNames[currentMonth]);

//Task 03:
/*Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.*/

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now_01 = new Date();
alert("Today is ", dayNames[now_01.getDay()]);

//Task 04:
/*Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.*/

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now_02 = new Date();

if(days[now_02.getDay()] === "Saturday" || days[now_02.getDay()] === "Sunday") {
    alert("It's Fun day")
} else {
    alert("It's work day")
}
   
//Task 05:
/*Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.*/

var now_03 = new Date();

if(now_03.getDate() < 16) {
    document.write("First fifteen days of the month")
} else {
    document.write("Last days of the month")
}

//Task 06:
/*Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like to represent the Date object.*/

var date = new Date();
var milliSeconds = date.getTime();
var minutes = milliSeconds / (1000 * 60);

document.write("Current Date: ", date);
document.write("</br> Elapsed Milliseconds Since Jan. 1, 1970: ", milliSeconds);
document.write("</br> Elapsed Minutes Since Jan. 1, 1970: ", minutes.toFixed());

//Task 07:
/*Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.*/

var date_01 = new Date();
if (date_01.getHours() < 12) {
    document.write("It's AM")
} else {
    document.write("It's PM")
}

//Task 08:
/*Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.*/

var laterDate = new Date("December 31, 2020");
document.write("Later Date: ", laterDate);

//Task 09:
/*Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/

var now_$ = new Date();
var mill_now = now_$.getTime();
var ramadan_2015_date = new Date("June 18, 2015");
var mill_2015 = ramadan_2015_date.getTime();
var diff = mill_now - mill_2015;
var days_since_15 = diff / (1000 * 60 * 60 * 24);

document.write(Math.floor(days_since_15), " days have passed since 1st Ramadan, 2015");

//Task 10:
/*Write a program that displays in your browser the seconds that elapsed between the reference date and the
beginning of 2015.*/

var reference_date = new Date();
var mill_till_now = reference_date.getTime();
var past_date = new Date("January 1, 2015");
var mill_since_2015 = past_date.getTime();

var diff_2 = mill_till_now - mill_since_2015;
var secondss = diff_2 / (1000);

document.write("On reference date: ", reference_date)
document.write("</br>" , Math.floor(secondss), " seconds have passed since beginning of 2015");

//Task 11:
/*Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.*/

var todaysDate = new Date();
var hours = todaysDate.getHours();
document.write("Current Date: ", todaysDate);
todaysDate.setHours(hours - 1);
document.write("</br>1 Hour ago it was: ", todaysDate);

//Task 12:
/*Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?*/

var todaysDate_ = new Date();
todaysDate_.setFullYear(1924);
document.write("100 years back, it was ", todaysDate_);

//Task 13:
/*Write a program to ask the user about his age. Calculate and show his birth year in your browser.*/

var userAge = prompt("Enter your age:");
var now$ = new Date();
var currentYear = now$.getFullYear();
var birthYear = currentYear - userAge;

document.write("Your age is ", userAge);
document.write("</br>Your Birth Year is ", birthYear);

//Task 14:
/*Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:*/

var customerName = prompt("Enter your name");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow_2 = new Date();
var currentMonth_2 = rightNow_2.getMonth();
var numOfUnits = prompt("Enter your number of Units");
var chargesPerUnit = 16;
var paymentSurcharge = 350;
var netAmount = numOfUnits * chargesPerUnit;
var grossAmount = netAmount + paymentSurcharge;

document.write("<h1>" + "K-Electric Bill" + "</h1>");
document.write("Customer Name: ", customerName);
document.write("</br>Currrent Month: ", months[currentMonth_2]);
document.write("</br>Number of Units: ", numOfUnits);
document.write("</br>Charges per Unit: ", chargesPerUnit);
document.write("</br>Net Amount Payable(Within due date): ", netAmount);
document.write("</br>Late Payment Surges: ", paymentSurcharge);
document.write("</br>Gross amount Payable(After Due Date): ", grossAmount);

