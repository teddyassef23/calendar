// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var now = new Date();
var datetime = now.toLocaleString();
var currentTime = dayjs(datetime).format('h:mm A');
var currentDate = dayjs(datetime).format('	dddd, MMMM D');
var id = " ";
var btnId;
var scheduledTiem = " ";
var scheduledData = " ";
div_id = " ";
var scheduled = {
  time: " ",
  data: " ",
  id: 1
}

// Starting function
document.getElementById("currentDay").innerHTML = currentDate;



//  Click event strarting point
$(".btn").click(function () {
  id = this.id;
  btnId = id;
  scheduledTiem = document.getElementsByTagName("div")[id].id;
  scheduledData = "txt-hour-" + id;
  schedule(scheduledTiem, scheduledData);
});

function schedule(newId, dataID) {
  scheduled.time = document.getElementById(newId).innerText;
  scheduled.data = document.getElementById(dataID).value;
  localStorage.setItem(scheduled.time, scheduled.data);
  console.log("Schuled time from Schedule :" + scheduled.time);

  div_id = id + "hour-" + id;

  var resalt = timechecker();

  if (resalt === "future") {
    document.getElementById(div_id).classList.add("future");
  } else if (resalt === "present") {
    document.getElementById(div_id).classList.add("present");

  } else {
    document.getElementById(div_id).classList.add("past");
  }

  setTimeout(display);
  setTimeout(haid, 1000);

}


function display() {
  document.getElementById('schaduled').style.display='block';
}
function haid() {
  document.getElementById('schaduled').style.display='none';
}



function timechecker() {
  var justInTime = dayjs().format('h:mm A');
  let text = justInTime.toString();

  text = "1:00 PM";
  var diff;
  console.log("Text  in time " + text);
  if (text == scheduled.time) {
    diff = "present";
  } else if (text > scheduled.time) {
    diff = "past";
  } else {
    diff = "future";
  }
  return diff;
}

(function () {
  var scheduledTiemID = "hour-";
  var justInTime = new Date();
  let timeInText = justInTime.getHours();

  if (timeInText > 12) { timeInText = timeInText - 12; }
 
  timeInText += ":00";
  var classId = " ";
  
  for (let timeId = 2; timeId < 18; timeId++) {
    scheduledTiemID = scheduledTiemID + timeId;
    classId = timeId + scheduledTiemID;
    timeId += 1;
    console.log("this is timeId ID :" + timeInText);
   scheduledTiem = document.getElementById(scheduledTiemID);
  
  var resalt = timechecker();
  
  if (resalt === "future") {
    document.getElementById(classId).classList.add("future");
  } else if (resalt === "present") {
    document.getElementById(classId).classList.add("present");

  } else {
    document.getElementById(classId).classList.add("past");
  }
    scheduledTiemID = "hour-";
  }

  
})();
