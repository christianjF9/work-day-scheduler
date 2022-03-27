var hour = moment().hour();
hour = 10;

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

var index = 0;
$("li").each(function(){
    SetTimeColor(index,$(this));
index++;
});
    //createTimeSlot();