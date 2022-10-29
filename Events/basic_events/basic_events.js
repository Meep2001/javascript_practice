/*
    EVENTS : Signal that something has happened

    Mouse Events :
        click
        contentmenu - mouse right clicks
        mouseover/mousedown
        mousemove  - when the mouse is moved 
    
    Keyboard Events :
        keyup
        keydown

    Form Element Events :
        submit
        focus
    
    Document Events :
        DOMContentLoaded
    
    CSS events :
        transitioned
      
*/

const event_name = document.getElementById("event_name");
const event_element = document.getElementById("event_emmiter_element");

event_element.addEventListener("click", (e) => {
  event_name.innerHTML = "CLICK";
  console.log(e);
  console.log("Event Type",e.type)
});
event_element.addEventListener("mouseover", (e) => {
  event_name.innerHTML = "MOUSE OVER";
  console.log(e);
  console.log("Event Type",e.type)
});

event_element.addEventListener("mouseout", (e) => {
  event_name.innerHTML = "MOUSE OUT";
});
event_element.addEventListener("mousedown", (e) => {
  event_name.innerHTML = "MOUSE DOWN";
});
event_element.addEventListener("mouseup", (e) => {
  event_name.innerHTML = "MOUSE UP";
});
event_element.addEventListener("mousemove", (e) => {
  event_name.innerHTML = "MOUSE MOVE";
  console.log(e);
  console.log("Event Type",e.type)
});

//Not supported for divs -  no action here
event_element.addEventListener("keydown", (e) => {
  event_name.innerHTML = "KEY DOWN";
});
