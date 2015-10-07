define(function(require, exports, module){

var $ = require('jquery');

(function() {

function checkName($input) {
    var val = $input.val(),
        $this = $input;
    if (val.length >0 && val.length < 21){
        $this.siblings('.errorMsg').remove();
        return true;
    }else{
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*昵称需在1-20字之间.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
        return false;
    }
}
$('#set-div .cooker-name').blur(function(){
    checkName($(this));
})

function checkSign($input) {
    var val = $input.val(),
        $this = $input;
    if (val.length >0 && val.length < 50){
        $this.siblings('.errorMsg').remove();
        return true;
    }else{
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*个性签名需在1-50字之间.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
        return false;
    }
}
$('#set-div .cooker-sign').blur(function(){
    checkSign($(this));
})

function checkPassword($input) {
    var val = $input.val(),
        $this = $input;
    if (val.length >0 && val.length < 15){
        $this.siblings('.errorMsg').remove();
        return true;
    }else{
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*密码需在1-15个字符之间.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
        return false;
    }
}
$('#set-div .cooker-password').blur(function(){
    checkPassword($(this));
})

/*
$('#set-div .cooker-name').blur(function(){
    var $this = $(this)
    if (this.value.length==""){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*昵称不能为空.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
    if (this.value.length > 20){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*昵称不能大于20个字.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
})

$('#set-div .cooker-sign').blur(function(){
    var $this = $(this)
    if (this.value==""){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*个性签名不能为空.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
    if (this.value.length > 50){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*个性签名不能大于50个字.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
})

$('#set-div .cooker-password').blur(function(){
    var $this = $(this)
    if (this.value==""){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*密码不能为空.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
    if (this.value.length > 15){
        $this.siblings('.errorMsg').remove();
        var errorMsg = '*密码不能大于15个字符.';
        $this.parent().append('<div class="errorMsg">'+errorMsg+'</div>');
    };
})


$('#set-div .submit-btn').click(function(){
    if (name){
        $('form').submit();
    }else{
        return false;
    }
});
*/

$('#set-div form').submit(function(){
    var isValid = true;
    isValid = checkName($('#set-div .cooker-name')) && isValid;
    isValid = checkSign($('#set-div .cooker-sign')) && isValid;
    isValid = checkPassword($('#set-div .cooker-password')) && isValid;
    return isValid;
});

})();

})