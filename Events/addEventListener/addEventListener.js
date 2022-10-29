/*
 ADD EVENT LISTENER
    Syntax :
        element.addEventListener(event, handler, [options]);
        event   : event name
        handler : handler function
        options :
                    once   : if true the listener automatically removed
                             after triggering
                    capture: the phase where to handle the event
                    passive: if true, then the handler will not call 
                                preventDefault()

 REMOVE EVENT LISTENER
    Syntax :
        element.removeEventListener(event, handler, [options]);
        handler : to be the same that you have put in addEventListener


Note : Object Reference Concept used as we are giving the reference of the 
    handler in add and remove event listener functions  

*/

const form=document.getElementsByTagName('form')[0];
const handler=()=>console.log('mousemove')
form.addEventListener('mousemove',handler)

setTimeout(()=>{
    console.log('removing eventlistner');
    form.removeEventListener('mousemove',handler);
},5000)