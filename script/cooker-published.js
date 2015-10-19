define(function(require, exports, module){

var $ = require('jquery');
$('#substance .dish_detail_del').click(function(){
    var r = confirm("真的要删我吗？")
    if(r == true){
        location.reload();
    }
})

$('#menu-div .menu-published').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-click')
})

$('#substance a.dish_detail_btn').mouseover(function(){
    $(this).addClass('dish_detail_btn_hover');
}).mouseleave(function(){
    $(this).removeClass('dish_detail_btn_hover');
});

$('#substance .comment-div').mouseover(function(){
    $(this).addClass('comment-div-hover');
}).mouseleave(function(){
    $(this).removeClass('comment-div-hover');
});

})