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

var initWelcome = function(){
    startTime();
    var nextEvent = $('#udalosti .next-event a').text();
    $('#vitejte h1').text(nextEvent);
}

var addScrollEasing = function() {
    $('nav ul li a').not('[data-toggle]').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var target = this.hash;
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 800, function() {
                    return window.history.pushState(null, null, target);
                });
        });
    });
}

$(document).ready(function() {
    initWelcome();
    addScrollEasing();
    
});
    
};
gdgscl();
