$('#content .dish-1, #content .dish-2, #content .dish-3, #content .subject_con_sub').mouseover(function(){
    $(this).addClass('back-change-index');
}).mouseleave(function(){
    $(this).removeClass('back-change-index');
})

$(function(){
    var topHeight = $('.head-top-2').offsetTop();      //获取头部对于页面顶部的距离
    $(window).scroll(function(){
        var topScro = $(this).scrollTop();      //获取滚动条距顶部的距离
        if(topScro >= topHeight){
            $('.head-top-2').css({"position":"fixed","top":0});
        }else if(topScro < topHeight){
            $('.head-top-2').css({"position":"static"});
        }
    })
})