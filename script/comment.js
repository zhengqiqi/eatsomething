define(function(require, exports, module){
var $ = require('jquery');

$('#menu-div .menu-comment').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-click')
})

$('#com .comment-re').click(function(){
    var $com=$(this).parentsUntil('#com').siblings('.com-re');
    $com.removeClass('hide');
    $com.find('.com_re_input').removeClass('hide');
    $com.find('.com_re_btn').removeClass('hide');
})

$('#com .com_re_input').focus(function(){
    $(this).addClass('text_focus');
}).blur(function(){
    $(this).removeClass('text_focus');
})

$('#com .comment-re').click(function(){
    $sub =$(this).parentsUntil('#com')
    $sub.siblings('.com-re').find('.com_re_input').val("回复@"+$sub.find('.comment-auther').text()+":")
    .addClass('text_focus')
    $sub.siblings('.com-re').find('.com_re_input').focus()
})

})