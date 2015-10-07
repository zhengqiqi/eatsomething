define(function(require, exports, module){
var $ = require('jquery');
require('jquery.cycle.all');

// Slideshow 2
function sliderFunc(el){
    var $el = $(el);

    $el.find('.slideshow').cycle({
        fx: 'fade',
        speed:  900,
        timeout: 5000,
        pager: $el.find('.slideshow_paging'),
        prev: $el.find('.slideshow_prev'),
        next: $el.find('.slideshow_next'),
        before: function(currSlideElement, nextSlideElement) {
            var data = $(nextSlideElement).find('.data').html();
            $el.find('.slideshow_box').stop(true, true).animate({ bottom:'-110px'}, 400, function(){
                $el.find('.slideshow_box .data').html(data);
            });
            $el.find('.slideshow_box').delay(100).animate({ bottom:'0'}, 400);
        }
    });

    $el.mouseenter(function(){
        $el.find('.slideshow').cycle('pause');
        $el.find('.slideshow_prev').stop(true, true).animate({ left:'20px'}, 200);
        $el.find('.slideshow_next').stop(true, true).animate({ right:'20px'}, 200);
    }).mouseleave(function(){
        $el.find('.slideshow').cycle('resume');
        $el.find('.slideshow_prev').stop(true, true).animate({ left:'-40px'}, 200);
        $el.find('.slideshow_next').stop(true, true).animate({ right:'-40px'}, 200);
    });

}

    module.exports.sliderFunc = sliderFunc;

/*    $('#slideshow_2').cycle({
        fx: 'fade',     
        speed:  900, 
        timeout: 5000, 
        pager: '.ss2_wrapper .slideshow_paging', 
        prev: '.ss2_wrapper .slideshow_prev',
        next: '.ss2_wrapper .slideshow_next',
        before: function(currSlideElement, nextSlideElement) {
            var data = $('.data', $(nextSlideElement)).html();
            $('.ss2_wrapper .slideshow_box').stop(true, true).animate({ bottom:'-110px'}, 400, function(){
                $('.ss2_wrapper .slideshow_box .data').html(data);
            });
            $('.ss2_wrapper .slideshow_box').delay(100).animate({ bottom:'0'}, 400);
        }
    });

    $('.ss2_wrapper').mouseenter(function(){
        $('#slideshow_2').cycle('pause');
        $('.ss2_wrapper .slideshow_prev').stop(true, true).animate({ left:'20px'}, 200);
        $('.ss2_wrapper .slideshow_next').stop(true, true).animate({ right:'20px'}, 200);
    }).mouseleave(function(){
        $('#slideshow_2').cycle('resume');
        $('.ss2_wrapper .slideshow_prev').stop(true, true).animate({ left:'-40px'}, 200);
        $('.ss2_wrapper .slideshow_next').stop(true, true).animate({ right:'-40px'}, 200);
    });
*/

});