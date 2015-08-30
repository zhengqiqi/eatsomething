$('#content .dish-1, #content .dish-2, #content .dish-3, #content .subject_con_sub').mouseover(function(){
    $(this).addClass('back-change-index');
}).mouseleave(function(){
    $(this).removeClass('back-change-index');
})

/*输入框提示信息*/
$('#index-right-nologin .login-top-input-p').click(function(){
    var $this = $(this);
    $this.addClass('hide');
    $this.siblings().focus();
})
$('#index-right-nologin .login-top-input-address .login-top-input').blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.siblings().removeClass('hide');
    }
})
$('#index-right-nologin .login-top-input-password .login-top-input').blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.siblings().removeClass('hide');
    }
})
$('#index-right-nologin .login-top-input-repassword .login-top-input').blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.siblings().removeClass('hide');
    }
})

/*登陆/注册切换*/
$('#login-div .login-top-register').click(function(){
    $('#login-div').addClass('hide');
    $('#register-div').removeClass('hide');
})
$('#register-div .login-top-login').click(function(){
    $('#login-div').removeClass('hide');
    $('#register-div').addClass('hide');
})

/*输入框校验*/
/*输入框判空*/
function checkEmpty($input) {
    var val = $input.val(),
        $this = $input;
    if (val.length >0){
        $this.siblings('.login-top-input-tip').remove();
        return true;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*输入框不能为空.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }
}
$('#index-right-nologin .login-top-input-address .login-top-input').blur(function(){
    checkEmpty($(this));
})

/*判断密码1-15*/
function checkPasswordMax($input) {
    var val = $input.val(),
        $this = $input;
    if (val.length >0 && val.length < 16){
        $this.siblings('.login-top-input-tip').remove();
        return true;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*密码需在1-15个字符之间.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }
}
$('#index-right-nologin .login-top-input-password .login-top-input, .login-top-input-repassword .login-top-input').blur(function(){
    checkPasswordMax($(this));
})

$('#index-right-nologin form').submit(function(){
    var isValid = true;
    isValid = checkEmpty($('#index-right-nologin .login-top-input-address .login-top-input')) && isValid;
    isValid = checkPasswordMax($('#index-right-nologin .login-top-input-password .login-top-input')) && isValid;
    isValid = checkPasswordMax($('#index-right-nologin .login-top-input-repassword .login-top-input')) && isValid;
    return isValid;
});