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