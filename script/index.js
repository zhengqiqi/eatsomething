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
}).focus(function(){
    $(this).siblings('.login-top-input-p').addClass('hide');
})
$('#index-right-nologin .login-top-input-password .login-top-input').blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.siblings().removeClass('hide');
    }
}).focus(function(){
    $(this).siblings('.login-top-input-p').addClass('hide');
})
$('#index-right-nologin .login-top-input-repassword .login-top-input').blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.siblings().removeClass('hide');
    }
}).focus(function(){
    $(this).siblings('.login-top-input-p').addClass('hide');
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

/*登陆输入框校验*/
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
$('#login-div .login-top-input-address .login-top-input').blur(function(){
    checkEmpty($(this));
})

/*判断邮箱格式*/
function checkEmail($input){
    var val = $input.val(),
        $this = $input;
    if (val.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
        $this.siblings('.login-top-input-tip').remove();
        return true;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*邮箱格式错误.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }
}
$('#login-div .login-top-input-address .login-top-input').blur(function(){
    checkEmail($(this));
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
$('#login-div .login-top-input-password .login-top-input').blur(function(){
    checkPasswordMax($(this));
})

$('#login-div form').submit(function(){
    var isValid = true;
    isValid = checkEmpty($('#login-div .login-top-input-address .login-top-input')) && isValid;
    isValid = checkEmail($('#login-div .login-top-input-address .login-top-input')) && isValid;
    isValid = checkPasswordMax($('#login-div .login-top-input-password .login-top-input')) && isValid;
    return isValid;
});

/*注册输入框校验*/
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
$('#register-div .login-top-input-address .login-top-input').blur(function(){
    checkEmpty($(this));
})

/*判断邮箱格式*/
function checkEmail($input){
    var val = $input.val(),
        $this = $input;
    if (val.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
        $this.siblings('.login-top-input-tip').remove();
        return true;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*邮箱格式错误.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }
}
$('#register-div .login-top-input-address .login-top-input').blur(function(){
    checkEmail($(this));
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
$('#register-div .login-top-input-password .login-top-input, .login-top-input-repassword .login-top-input').blur(function(){
    checkPasswordMax($(this));
})

/*判断两次密码是否一致*/
function checkPasswordEqualPass($input) {
    var val1 = $input.val(),
        val2 = $input.parent('.login-top-input-password').siblings('.login-top-input-repassword').children('.login-top-input').val(),
        $this = $input;
    if (val1 != val2){
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*两次输入的密码不一致.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        $this.parent('.login-top-input-password').siblings('.login-top-input-repassword').children('.login-top-input-tip').remove();
        return true;
    }
}
$('#register-div .login-top-input-password .login-top-input').blur(function(){
    checkPasswordEqualPass($(this));
})

function checkPasswordEqualRepass($input) {
    var val1 = $input.val(),
        val2 = $input.parent('.login-top-input-repassword').siblings('.login-top-input-password').children('.login-top-input').val(),
        $this = $input;
    if (val1 != val2){
        $this.siblings('.login-top-input-tip').remove();
        var errorMsg = '*两次输入的密码不一致.';
        $this.after('<div class="login-top-input-tip">'+errorMsg+'</div>');
        return false;
    }else{
        $this.siblings('.login-top-input-tip').remove();
        $this.parent('.login-top-input-repassword').siblings('.login-top-input-password').children('.login-top-input-tip').remove();
        return true;
    }
}
$('#register-div .login-top-input-repassword .login-top-input').blur(function(){
    checkPasswordEqualRepass($(this));
})

$('#register-div form').submit(function(){
    var isValid = true;
    isValid = checkEmpty($('#register-div .login-top-input-address .login-top-input')) && isValid;
    isValid = checkEmail($('#register-div .login-top-input-address .login-top-input')) && isValid;
    isValid = checkPasswordMax($('#register-div .login-top-input-password .login-top-input')) && isValid;
    isValid = checkPasswordMax($('#register-div .login-top-input-repassword .login-top-input')) && isValid;
    isValid = checkPasswordEqualPass($('#register-div .login-top-input-password .login-top-input')) && isValid;
    isValid = checkPasswordEqualRepass($('#register-div .login-top-input-repassword .login-top-input')) && isValid;
    return isValid;
});


$('#index-right-logined .logined-detail-each').mouseover(function(){
    $(this).children('.logined-detail-each-num').addClass('logined-detail-each-num-hover')
}).mouseleave(function(){
    $(this).children('.logined-detail-each-num').removeClass('logined-detail-each-num-hover')
})