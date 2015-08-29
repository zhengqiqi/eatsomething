$('#content .dish-1, #content .dish-2, #content .dish-3, #content .subject_con_sub').mouseover(function(){
    $(this).addClass('back-change-index');
}).mouseleave(function(){
    $(this).removeClass('back-change-index');
})

$('#index-right-nologin .input-address').focus(function(){
    if ($(this).val() == "请输入您的邮箱地址"){
        $(this).addClass('text_focus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('请输入您的邮箱地址').removeClass('text_focus');
    }
})

$('#index-right-nologin .input-password').focus(function(){
    if ($(this).val() == "请输入您的密码"){
        $(this).addClass('text_focus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('请输入您的密码').removeClass('text_focus');
    }
})