const elements = document.querySelectorAll("*");

for (let elem of elements) {
  elem.addEventListener(
    "click",
    () => {
      alert(`Capturing : ${elem.tagName}`);
    },
    true
  );
  elem.addEventListener("click", () => {
    alert(`Bubbling : ${elem.tagName}`);
  });
}

/*
    The standard DOM Events describes 3 phases of event propagation:

    1. Capturing phase – the event goes down to the element from the parent.
    2. Target phase – the event reached the target element.
    3. Bubbling phase – the event bubbles up from the element.

    To catch an event on the capturing phase, we need to 
    set the handler capture option to true:

    elem.addEventListener(..., {capture: true})

    // or, just "true" is an alias to {capture: true}
    elem.addEventListener(..., true)


    There are two possible values of the capture option:

        If it’s false (default), then the handler is set on the bubbling phase.
        If it’s true, then the handler is set on the capturing phase.

The event.stopPropagation() method and its sibling 
event.stopImmediatePropagation() can also be called on the capturing phase. 
Then not only the futher capturing is stopped, but the bubbling as well.

Note : In other words, normally the event goes first down (“capturing”) and then 
up (“bubbling”). But if event.stopPropagation() is called during the 
capturing phase, then the event travel stops, no bubbling will occur.

*/