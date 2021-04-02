var saveBtns = [
    $("#save1"), $("#save2"), $("#save3"), 
    $("#save4"), $("#save5"), $("#save6"), 
    $("#save7"), $("#save8"), $("#save9")
]
var selectedHour = [
    $("textarea#9"), $("textarea#10"), $("textarea#11"), 
    $("textarea#12"), $("textarea#13"), $("textarea#14"), 
    $("textarea#15"), $("textarea#16"), $("textarea#17")
]
var storedHour = [
    'hour9', 'hour10', 'hour11', 
    'hour12', 'hour13', 'hour14', 
    'hour15', 'hour16', 'hour17'
]

var currentTime = parseInt(moment().format("H"));
var currentDate = $("#currentDay")
currentDate.append(moment().format("dddd, MMMM Do"))

for (let i = 0; i < selectedHour.length; i++) {
    var finalStore = localStorage.getItem(storedHour[i]);
        selectedHour[i].append(finalStore);   
}

function assignTime() {
    for (let i = 0; i < selectedHour.length; i++) {
            console.log(selectedHour[i])
        if (parseInt(selectedHour[i].attr("id")) < currentTime) {
            selectedHour[i].attr("class", "past col-10")
        } 
        else if (parseInt(selectedHour[i].attr("id")) == currentTime) {
            selectedHour[i].attr("class", "present col-10")
        } else {
            selectedHour[i].attr("class", "future col-10")
        }
    }
}  

for (let i = 0; i < saveBtns.length; i++) {
    function saveTasks() {
        localStorage.setItem(storedHour[i], selectedHour[i].val())
    }
    
    saveBtns[i].on("click", function() {
        saveTasks();
        console.log(saveBtns[i])
        
    })
    
}

assignTime();

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