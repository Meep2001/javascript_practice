/*
    We can pass object instead of the handle function in
    the addEventListener.
    The object's handleEvent(event) method will be called
    when the event triggers.
*/

class Handlers {
  handleEvent(event) {
    let handler = "on" + event.type[0].toUpperCase() + event.type.slice(1);
    this[handler](event);
  }
  onClick() {
    console.log("CLICK");
  }
  onMouseup() {
    console.log("MOUSE UP");
  }
  onMousedown() {
    console.log("MOUSE DOWN");
  }
}

const btn = document.getElementById("btn1");
const handlerObj = new Handlers();
btn.addEventListener("click", handlerObj);
btn.addEventListener("mouseup", handlerObj);
btn.addEventListener("mousedown", handlerObj);
