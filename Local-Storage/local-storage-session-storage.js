/*
    Web storage objects localStorage and sessionStorage
     allow to save key/value pairs in the browser.

    The data in  this storage survives a page refresh (for sessionStorage) 
    and even a full  browser restart (for localStorage). 
*/

/* 
    COMPARISON WITH COOKIES

    Unlike cookies, web storage objects are not sent to server with each request.
    Because of that, we can store much more. Most modern browsers allow at 
    least 5 megabytes of data (or more) and have settings to configure that.

    Also unlike cookies, the server can’t manipulate storage objects via 
    HTTP headers. Everything’s done in JavaScript.

    The storage is bound to the origin (domain/protocol/port triplet). 
    That is, different protocols or subdomains infer different storage 
    objects, they can’t access data from each other.

*/

/*
    Both storage objects provide the same methods and properties:

    setItem(key, value) – store key/value pair.
    getItem(key) – get the value by key.
    removeItem(key) – remove the key with its value.
    clear() – delete everything.
    key(index) – get the key on a given position.
    length – the number of stored items.
*/