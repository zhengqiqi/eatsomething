$('#substance .icon-five').prepend(function(){
    $(this).addClass('icon-five-on');
})

$('#menu-div .menu-collection').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-click')
})

$('#substance a.dish-detail-cancel').mouseover(function(){
    $(this).addClass('dish-detail-cancel-hover');
}).mouseleave(function(){
    $(this).removeClass('dish-detail-cancel-hover');
});

$('#substance .comment-div').mouseover(function(){
    $(this).find('.dish-detail-cancel').removeClass('hide');
}).mouseleave(function(){
    $(this).find('.dish-detail-cancel').addClass('hide');
})