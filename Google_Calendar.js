/*
To hide my Google Calendar event names/links, but keep the times, so I can share the time slots with third parties for scheduling
1) go to mail.google.com with mini calendar on the right
2) right-click any of the calendar events to switch context to that iframe
3) execute this script in the JavaScript console
*/
var ids = [ "H5otic", "gOSbGe", "PnMPye" ];
var selector = ids.map(id => `@class='${id}'`).join(" or ");
$x(`//span[${selector}]`).forEach(e => e.style.visibility = "hidden");
