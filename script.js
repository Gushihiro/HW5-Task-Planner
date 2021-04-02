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
var saveBtns = [$("#save1"), $("#save2"), $("#save3"), $("#save4"), $("#save5"), $("#save6"), $("#save7"), $("#save8"), $("#save9")]
var selectedHour = [
    $("textarea#9"), $("textarea#10"), $("textarea#11"), 
    $("textarea#12"), $("textarea#13"), $("textarea#14"), 
    $("textarea#15"), $("textarea#16"), $("textarea#17")
]
var storedHour = ['hour9', 'hour10', 'hour11', 'hour12', 'hour13', 'hour14', 'hour15', 'hour16', 'hour17']
console.log(saveBtns)
var currentTime = parseInt(moment().format("H"));
var currentDate = $("#currentDay")
    currentDate.append(moment().format("dddd, MMMM Do"))

for (let i = 0; i < selectedHour.length; i++) {
    var finalStore = localStorage.getItem(storedHour[i]);
        selectedHour[i].append(finalStore);   
}
console.log(storedHour)
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

var savedTasks = [
    function saveTask1() {
        localStorage.setItem("hour9", $("textarea#9").val())
    },
    function saveTask2() {
        localStorage.setItem("hour10", $("textarea#10").val())
    },
    function saveTask3() {
        localStorage.setItem("hour11", $("textarea#11").val())
    },
    function saveTask4() {
        localStorage.setItem("hour12", $("textarea#12").val())
    },
    function saveTask5() {
        localStorage.setItem("hour13", $("textarea#13").val())
    },
    function saveTask6() {
        localStorage.setItem("hour14", $("textarea#14").val())
    },
    function saveTask7() {
        localStorage.setItem("hour15", $("textarea#15").val())
    },
    function saveTask8() {
        localStorage.setItem("hour16", $("textarea#16").val())
    },
    function saveTask9() {
        localStorage.setItem("hour17", $("textarea#17").val())
    }
]
//saveBtn1.on("click", function() {
//   saveTask1();
//})
//saveBtn2.on("click", function() {
//    saveTask2();
//})
//saveBtn3.on("click", function() {
 //   saveTask3();
//})
//saveBtn4.on("click", function() {
//    saveTask4();
//})
//saveBtn5.on("click", function() {
//    saveTask5();
//})
//saveBtn6.on("click", function() {
 //   saveTask6();
//})
//saveBtn7.on("click", function() {
 //   saveTask7();
//})
//saveBtn8.on("click", function() {
//    saveTask8();
//})
//saveBtn9.on("click", function() {
 //   saveTask9();
//})

for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].on("click", function() {
        savedTasks[i]()
        console.log(saveBtns[i])
        console.log(savedTasks[i])
    })
    
}

assignTimePast();
assignTimePresent();
assignTimeFuture();


console.log(localStorage)
