var curSlide = 1;
var slideCount = 0;
var slideHeight = $(".slider").height();
var interval = $(".slider").attr("slide-interval");
var timerId;

timerId = setInterval(next, interval);

$(document).ready(function() {
    $(".slider .slide").each(function() {
        slideCount = slideCount + 1;
        var src = $(this).children(".slide-img").attr("img-src");
        $(this).children(".slide-img").css("background", "url(" + src + ") no-repeat center center");
        $(this).children(".slide-img").css("background-size", "cover");
        $(this).attr("id", "slide-" + slideCount.toString());
        $(this).children(".slide-text").css("padding-top", (slideHeight/2-$(this).children(".slide-text").height()/2).toString() + "px");
    });

    $(".slide-pre").css("padding-top", (slideHeight/2-50).toString() + "px");
    $(".slide-next").css("padding-top", (slideHeight/2-50).toString() + "px");

    $(".slide-pre").html("<span class=\"icon-chevron-left\"></span>&#160;");
    $(".slide-next").html("&#160;<span class=\"icon-chevron-right\"></span>");
});

function next() {
    $("#slide-" + curSlide.toString()).removeClass("active");
    if (curSlide < slideCount) {
        curSlide = curSlide + 1;
    }
    else {
        curSlide = 1;
    }
    $("#slide-" + curSlide.toString()).addClass("active");
}

function prev() {
    $("#slide-" + curSlide.toString()).removeClass("active");
    if (curSlide > 1) {
        curSlide = curSlide - 1;
    }
    else {
        curSlide = slideCount;
    }
    $("#slide-" + curSlide.toString()).addClass("active");
}

$(".slide-next").click(function() {
    next();
});   

$(".slide-pre").click(function() {
    prev();
});

$(".slider").hover(function() {
    clearInterval(timerId);
}, function() {
    timerId = setInterval(next, interval);
});

