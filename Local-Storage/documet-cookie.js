document.cookie="user=user1";
console.log(document.cookie);

/*
    There are few limitations:

The name=value pair, after encodeURIComponent, should not exceed 4KB. 
So we can’t store anything huge in a cookie.
The total number of cookies per domain is limited to around 20+,
 the exact limit depends on the browser.
*/

// Cookies have several option which can be listed after 
// key=value delimited by ;
document.cookie='user=user1; path=/; domain=site.com;expires=Tue, 19 Jan 2038 03:14:07 GMT'

/*
    PATH:
    The path must be absolute , ex.if the path is /admin the the cookie
    will be available only at /admin/something or /admin/something/something
    and not on /home or /home/....
*/

/*
    DOMAIN: 
    By default a cookie set on site.com not available on other.com
    Also if we want cookie to be shared by sub-domains as well (ex. forum.site.com)
    then we have to scpecify the domain parameter.
    eg domain=site.com not this cookie will be available in forum.site.com as well
 */

/*
    EXPIRES,MAX-AGE
    By default, if a cookie doesn’t have one of these options, it 
    disappears when the browser is closed. Such cookies are called
     “session cookies”

    To let cookies survive a browser close, we can set either the expires
     or max-age option.

    expires=Tue, 19 Jan 2038 03:14:07 GMT
    The cookie expiration date defines the time, when the browser will 
    automatically delete it.

    The date must be exactly in this format, in the GMT timezone.
    We can use date.toUTCString to get it. For instance, we can set 
    the cookie to expire in 1 day:

*/

// +1 day from now
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;

/*
    max-age=3600
    It’s an alternative to expires and specifies the cookie’s 
    expiration in seconds from the current moment.

    If set to zero or a negative value, the cookie is deleted
*/

/*
    SECURE:
    By default if a cookie is stored in http its still available
    at https and vice versa
    with secure a cookie set on https will not be available
    at http.
*/
document.cookie="user1=user;secure";

