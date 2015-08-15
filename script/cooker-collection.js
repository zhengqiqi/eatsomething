$('#substance .icon-five').prepend(function(){
    $(this).addClass('icon-five-on');
})

$('#substance .comment-div').mouseover(function(){
    $(this).addClass('comment-div-hover');
}).mouseleave(function(){
    $(this).removeClass('comment-div-hover');
});
