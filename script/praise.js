$('#substance .icon-heart').prepend(function(){
    $(this).addClass('icon-heart-on')
});

$('#menu-div .menu-praise').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover')
    $this.children('.point-div').addClass('point-div-hover')
})