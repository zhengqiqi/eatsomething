var $commentInput = $('#pic_comment .comment_rel_input');
$commentInput.focus(function(){
    if ($commentInput.val() == "说点什么呢？"){
        $commentInput.addClass('text_focus').val('');
    }
}).blur(function(){
    if ($commentInput.val() ==""){
        $commentInput.val('说点什么呢？').removeClass('text_focus');
    }
})

$('#pic_comment .comment_rel_btn').mouseover(function(){
    $(this).addClass('back-change-btn');
}).mouseleave(function(){
    $(this).removeClass('back-change-btn');
})

$('#pic_comment .comment_ans').mouseover(function(){
    $(this).addClass('back-change-ans');
}).mouseleave(function(){
    $(this).removeClass('back-change-ans');
})

$('#pic_comment a.comment_ans').click(function(){
    $commentInput.val("回复@"+$(this).siblings('.comment_auther').text()+":")
    .addClass('text_focus')
    .focus(function() {
    })
})
