define(function(require, exports, module){

var $ = require('jquery');
$('#substance .icon-heart').prepend(function(){
    $(this).addClass('icon-heart-on')
});

$('#menu-div .menu-basket').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-click')
})

$('#substance .comment-div').mouseover(function(){
    $(this).addClass('comment-div-hover');
}).mouseleave(function(){
    $(this).removeClass('comment-div-hover');
});

})