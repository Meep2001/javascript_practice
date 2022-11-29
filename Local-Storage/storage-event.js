/*
    ref:https://javascript.info/localstorage
    Storage event
    When the data gets updated in localStorage or sessionStorage, 
    storage event triggers, with properties:

    key – the key that was changed (null if .clear() is called).
    oldValue – the old value (null if the key is newly added).
    newValue – the new value (null if the key is removed).
    url – the url of the document where the update happened.
    storageArea – either localStorage or sessionStorage object where 
    the update happened.

    The important thing is: the event triggers on all 
    window objects where the storage is accessible, except the one
     that caused it.


    You have two windows with the same site in each. 
    So localStorage is shared between them.


*/

window.onstorage = event => { 
    if (event.key != 'now') return;
    alert(event.key + ':' + event.newValue + " at " + event.url);
  };
  
localStorage.setItem('now', Date.now());

/*
Please note that the event also contains: event.url – the url of the
 document where the data was updated.

Also, event.storageArea contains the storage object – the event is 
the same for both sessionStorage and localStorage, so event.storageArea
 references the one that was modified. We may even want to set something 
 back in it, to “respond” to a change.

That allows different windows from the same origin to exchange messages.

*/