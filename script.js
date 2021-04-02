//Day Planner Homework
//Setup HTML
//Get bootstrap cdn links (css and JS cdn link from docs)
//Layout the HTML
    //add a jumbotron that displays current day and date (e.g. Wed, Mar 31st)
//Create rows for hours of the day (9am-5pm)
    //hours div / text input / save button(bootstrap icons cdn)
//Start JavaScript
    //Create a click event on the save buttons
    //using event.target, save content of textarea.val() to local storage
    //also grab unique identifier for placing the hour input value into localStorage

// on pageload, pull all data from local storage and use unique label/indentifier to determine where to put the value

    //for determing css bacgrkoundcolor: "
    //use moment to get the current time (specifically the hour)
    //then iterage over all hour elements
    //using an id/data attribute, determine what hour the current timeblock represents
    //if the current element time is less than moment time, it's grey
var taskArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var taskList = $(".textarea")
console.log(taskArray)
var saveBtn = $(".saveBtn")
var currentTime = parseInt(moment().format("H"));
console.log(currentTime)
//var saveTask = function(event) {
    //event.target.

//saveBtn.on("click", )

function assignTimePast() {
    if (parseInt($("#9").attr("id")) < currentTime) {
        $("textarea#9").attr("class", "past col-10")
    }
    
    if (parseInt($("#10").attr("id")) < currentTime) {
        $("textarea#10").attr("class", "past col-10")
    }
    
    if (parseInt($("#11").attr("id")) < currentTime) {
        $("textarea#11").attr("class", "past col-10")
    }
    
    if (parseInt($("#12").attr("id")) < currentTime) {
        $("textarea#12").attr("class", "past col-10")
    }
    
    if (parseInt($("#13").attr("id")) < currentTime) {
        $("textarea#13").attr("class", "past col-10")
    }
    
    if (parseInt($("#14").attr("id")) < currentTime) {
        $("textarea#14").attr("class", "past col-10")
    }
    
    if (parseInt($("#15").attr("id")) < currentTime) {
        $("textarea#15").attr("class", "past col-10")
    }
    
    if (parseInt($("#16").attr("id")) < currentTime) {
        $("textarea#16").attr("class", "past col-10")
    }
    
    if (parseInt($("#17").attr("id")) < currentTime) {
        $("textarea#17").attr("class", "past col-10")
    }
}
function assignTimePresent() {
    if (parseInt($("#9").attr("id")) == currentTime) {
        $("textarea#9").attr("class", "present col-10")
    }
    
    if (parseInt($("#10").attr("id")) == currentTime) {
        $("textarea#10").attr("class", "present col-10")
    }
    
    if (parseInt($("#11").attr("id")) == currentTime) {
        $("textarea#11").attr("class", "present col-10")
    }
    
    if (parseInt($("#12").attr("id")) == currentTime) {
        $("textarea#12").attr("class", "present col-10")
    }
    
    if (parseInt($("#13").attr("id")) == currentTime) {
        $("textarea#13").attr("class", "present col-10")
    }
    
    if (parseInt($("#14").attr("id")) == currentTime) {
        $("textarea#14").attr("class", "present col-10")
    }
    
    if (parseInt($("#15").attr("id")) == currentTime) {
        $("textarea#15").attr("class", "present col-10")
    }
    
    if (parseInt($("#16").attr("id")) == currentTime) {
        $("textarea#16").attr("class", "present col-10")
    }
    
    if (parseInt($("#17").attr("id")) == currentTime) {
        $("textarea#17").attr("class", "present col-10")
    }
}
function assignTimeFuture() {
    if (parseInt($("#9").attr("id")) > currentTime) {
        $("textarea#9").attr("class", "future col-10")
    }
    
    if (parseInt($("#10").attr("id")) > currentTime) {
        $("textarea#10").attr("class", "future col-10")
    }
    
    if (parseInt($("#11").attr("id")) > currentTime) {
        $("textarea#11").attr("class", "future col-10")
    }
    
    if (parseInt($("#12").attr("id")) > currentTime) {
        $("textarea#12").attr("class", "future col-10")
    }
    
    if (parseInt($("#13").attr("id")) > currentTime) {
        $("textarea#13").attr("class", "future col-10")
    }
    
    if (parseInt($("#14").attr("id")) > currentTime) {
        $("textarea#14").attr("class", "future col-10")
    }
    
    if (parseInt($("#15").attr("id")) > currentTime) {
        $("textarea#15").attr("class", "future col-10")
    }
    
    if (parseInt($("#16").attr("id")) > currentTime) {
        $("textarea#16").attr("class", "future col-10")
    }
    
    if (parseInt($("#17").attr("id")) > currentTime) {
        $("textarea#17").attr("class", "future col-10")
    }
}
assignTimePast();
assignTimePresent();
assignTimeFuture();
console.log($("textarea#0"))
console.log(parseInt($("#9").attr("id")))
