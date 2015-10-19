define(function(require, exports, module){

var $ = require('jquery');
var $commentInput = $('#pic-comment .comment_rel_input');
$commentInput.focus(function(){
    if ($commentInput.val() == "说点什么呢？"){
        $commentInput.addClass('text_focus').val('');
    }
}).blur(function(){
    if ($commentInput.val() ==""){
        $commentInput.val('说点什么呢？').removeClass('text_focus');
    }
})

$('#pic-comment .comment_rel_btn').mouseover(function(){
    $(this).addClass('back-change-btn');
}).mouseleave(function(){
    $(this).removeClass('back-change-btn');
})

$('#pic-comment .comment_ans').mouseover(function(){
    $(this).addClass('back-change-ans');
}).mouseleave(function(){
    $(this).removeClass('back-change-ans');
})

$('#pic-comment a.comment_ans').click(function(){
    $commentInput.val("回复@"+$(this).siblings('.comment_auther').text()+":")
    .addClass('text_focus')
    .focus()
})

})