function myDigitalClock() {
  var date = new Date();
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var zone = "AM";

  // Convert hours to 12-hour format and determine AM/PM
  if (hours >= 12) {
    zone = "PM";
    hours = hours % 12;
  }

  // Add leading zeros to minutes and seconds if necessary
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  // Display the time in the console or update a HTML element with the time
  console.log(hours + ":" + minutes + ":" + seconds + " " + zone);
}

// Function to add leading zero to single-digit numbers
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

myDigitalClock();

