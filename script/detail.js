$('#pic_comment .comment_rel_input').focus(function(){
    if ($(this).val() == "说点什么呢？"){
        $(this).addClass('text_focus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('说点什么呢？').removeClass('text_focus');
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

$('#1 a.comment_ans').click(function(){
    $('#pic_comment .comment_rel_input')
    .val("回复@"+$('#1 a.comment_auther').text()+":")
    .addClass('text_focus')
    .focus(function(){ $(this).val($('#pic_comment .comment_rel_input').val()); })
})
