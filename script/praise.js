$('#substance .icon-heart').prepend(function(){
    $(this).addClass('icon-heart-on')
});

$('#menu-div .menu-praise').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-click')
})

$('#substance .comment-div').mouseover(function(){
    $(this).addClass('comment-div-hover');
}).mouseleave(function(){
    $(this).removeClass('comment-div-hover');
})