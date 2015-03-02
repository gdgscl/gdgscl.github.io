var gdgscl = function(){
'use strict'

var startTime = function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    if (m<10) m = "0" + m;
    if (s<10) s = "0" + s;
    $('.clock').each(function(){
        $(this).find('.hours').html(h);
        $(this).find('.minutes').html(m);
        $(this).find('.seconds').html(s);
    });
    var t = setTimeout(function(){startTime()},500);
}

$(document).ready(function() {
	startTime();
	var nextEvent = $('#udalosti .next-event a').text();
    $('#vitejte h1').text(nextEvent);
});

};
gdgscl();