var main = function(){


    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = $('.active-slide').next();
        if (nextSlide.length ==0){
            nextSlide = $('.slide').first();
            }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        var currentDot = $('.active-dot');
        var nextDot = $('.active-dot').next();
        if (nextDot.length == 0){
            nextDot = $('.dot').first();
            }
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        });

    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-slide');
        var prevSlide = $('.active-slide').prev();
        if (prevSlide.length == 0){
            prevSlide = $('.slide').last();
            }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        var currentDot = $('.active-dot');
        var prevDot = $('.active-dot').prev();
        if (prevDot.length == 0){
            prevDot = $('.dot').last();
            }
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
    };


$(document).ready(main);