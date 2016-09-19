/**
 * Created by suman on 9/14/2016.
 */
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();
    $(".video-strip").css("background-position", "center -" + wScroll + "px");

});

$(function () {

    setInterval(function () {
            $('.logo').addClass('animated tada');
    }, 300);

});

$(function() {
    
    $('#warningModal').modal({

    });
});

$(function () {
    
    smoothScroll(1000);
    
});

function smoothScroll(duration) {

    $('a[href^="#"]').on("click", function (event) {

        var target = $($(this).attr("href"));

        if(target.length){
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top
            }, duration);
        }

    });
    
}