$('#substance .icon-heart').prepend(function(){
    $(this).addClass('icon-heart-on')
});

$('#menu-div .menu-praise').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-chick')
    $this.children('.point-div').addClass('point-div-chick')
})