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
var saveBtn1 = $("#save1")
var saveBtn2 = $("#save2")
var saveBtn3 = $("#save3")
var saveBtn4 = $("#save4")
var saveBtn5 = $("#save5")
var saveBtn6 = $("#save6")
var saveBtn7 = $("#save7")
var saveBtn8 = $("#save8")
var saveBtn9 = $("#save9")

var currentTime = parseInt(moment().format("H"));
var currentDate = $("#currentDay")
    currentDate.append(moment().format("dddd, MMMM Do"))

var savedTask1 = localStorage.getItem("hour9")
    $("textarea#9").append(savedTask1)
var savedTask2 = localStorage.getItem("hour10")
    $("textarea#10").append(savedTask2)
var savedTask3 = localStorage.getItem("hour11")
    $("textarea#11").append(savedTask3)
var savedTask4 = localStorage.getItem("hour12")
    $("textarea#12").append(savedTask4)
var savedTask5 = localStorage.getItem("hour13")
    $("textarea#13").append(savedTask5)
var savedTask6 = localStorage.getItem("hour14")
    $("textarea#14").append(savedTask6)
var savedTask7 = localStorage.getItem("hour15")
    $("textarea#15").append(savedTask7)
var savedTask8 = localStorage.getItem("hour16")
    $("textarea#16").append(savedTask8)
var savedTask9 = localStorage.getItem("hour17")
    $("textarea#17").append(savedTask9)
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

function saveTask1() {
    localStorage.setItem("hour9", $("textarea#9").val())
}
function saveTask2() {
    localStorage.setItem("hour10", $("textarea#10").val())
}
function saveTask3() {
    localStorage.setItem("hour11", $("textarea#11").val())
}
function saveTask4() {
    localStorage.setItem("hour12", $("textarea#12").val())
}
function saveTask5() {
    localStorage.setItem("hour13", $("textarea#13").val())
}
function saveTask6() {
    localStorage.setItem("hour14", $("textarea#14").val())
}
function saveTask7() {
    localStorage.setItem("hour15", $("textarea#15").val())
}
function saveTask8() {
    localStorage.setItem("hour16", $("textarea#16").val())
}
function saveTask9() {
    localStorage.setItem("hour17", $("textarea#17").val())
}

saveBtn1.on("click", function() {
   saveTask1();
})
saveBtn2.on("click", function() {
    saveTask2();
})
saveBtn3.on("click", function() {
    saveTask3();
})
saveBtn4.on("click", function() {
    saveTask4();
})
saveBtn5.on("click", function() {
    saveTask5();
})
saveBtn6.on("click", function() {
    saveTask6();
})
saveBtn7.on("click", function() {
    saveTask7();
})
saveBtn8.on("click", function() {
    saveTask8();
})
saveBtn9.on("click", function() {
    saveTask9();
})

assignTimePast();
assignTimePresent();
assignTimeFuture();


console.log(localStorage)
