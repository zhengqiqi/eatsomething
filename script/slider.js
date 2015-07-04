// Slideshow 2

    $('#slideshow_2').cycle({
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