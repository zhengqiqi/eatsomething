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
    var $this = $(this);
    $this.find('.dish-detail-cancel').removeClass('hide');
    $this.addClass('comment-div-hover');
}).mouseleave(function(){
    var $this = $(this);
    $this.find('.dish-detail-cancel').addClass('hide');
    $this.removeClass('comment-div-hover');
})

