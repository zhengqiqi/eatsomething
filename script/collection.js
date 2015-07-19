$('#substance .icon-five').prepend(function(){
    $(this).addClass('icon-five-on');
})

$('#menu-div .menu-collection').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover')
    $this.children('.point-div').addClass('point-div-hover')
})