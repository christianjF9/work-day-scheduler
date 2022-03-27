var hour = moment().hour();
var events = [];

var CreateTimeSlot = function(){
    var timeSlot = $("div");
    var timeSlotP = $("<p>");
    timeSlot.append(timeSlotP);
    $(".container").append(timeSlot);
    return timeSlot;
}


var SetTimeColor = function(index, element){
    index +=8;
    if(index<hour)
        element.addClass("past");
    else if(index>hour)
        element.addClass("future");
    else
        element.addClass("present");

}

var LoadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));
    if(!events)
        events = [];
  };

LoadEvents();
console.log(events);
$("li").each(function(){
    
    var li = $(this);
    var textArea = li.find("textarea");
    var index = li.index();
    SetTimeColor(index,textArea);
    textArea.text( events[index]);
    //console.log(li.find("p"));
index++;
});

  $(".save").on("click",function(){
        var button = $(this);
         var index = button.index()-2;
        // var text = $("textarea").slice(index).val();
        var text = button.siblings("textarea").val();
         console.log(button.parent().index());
         console.log(text);
         events
            [button.parent().index()] =text;
        localStorage.setItem("events", JSON.stringify(events));
        console.log(events);
  });

    //createTimeSlot();
