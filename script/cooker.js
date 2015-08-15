$('#head-menu .head-each-p').mouseover(function(){
    $(this).parents().siblings('.head-each-line').removeClass('hide');
}).mouseleave(function(){
    $(this).parents().siblings('.head-each-line').addClass('hide');
})