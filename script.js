// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var now = new Date();
var datetime = now.toLocaleString();
var currentTime = dayjs(datetime).format('h:mm A');
var currentDate = dayjs(datetime).format('	dddd, MMMM D');
document.getElementById("currentDay").innerHTML = currentDate;
 var id = " ";
var scheduledTiem = " ";
var scheduledData = " "; 
div_id = " ";
var scheduled = {
                  time: " ",
                  data: " ",
                  id: 1
                }


// Starting function
 timechecker();

//  Click event strarting point
$(".btn").click(function(){
  id = this.id;
  scheduledTiem = document.getElementsByTagName("div")[id].id;
  scheduledData = "txt-hour-"+ id; 

  schedule(scheduledTiem, scheduledData);

  
});



$("#id").on ("click", function () {

});


function schedule(newId, dataID){
  scheduled.time =document.getElementById(newId).innerText;
  scheduled.data = document.getElementById(dataID).value;
  localStorage.setItem( scheduled.time, scheduled.data);
  console.log("Schuled time from Schedule :" + scheduled.time);
  div_id = id+"hour-" + id;
  
  var resalt = timechecker();
  if(resalt==="future"){
    document.getElementById(div_id).classList.add("future");
  } else if(resalt==="present") {
    document.getElementById(div_id).classList.add("present");
    
  }else{
    document.getElementById(div_id).classList.add(past);
  }
  

}

function timechecker(){
var justInTime = dayjs().format('h:mm A');
console.log("just in time " + justInTime)
var diff  ;



if(justInTime <= scheduled.time){
  diff = "future";
} else {
  diff = "present";
}

return diff;
}