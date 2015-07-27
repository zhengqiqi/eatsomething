var headHtml = '<div id="header">'+
    '<div class="headline">'+
        '<div class="headline_big"><a href="#" class="headline_big_a">做吃的</a></div>'+
        '<div class="headline_small"><p>下厨不是件容易的事，每道菜都有它的脾气。</p></div>'+
    '</div>'+
    '<div class="control">'+
        '<span class="search">'+
            '<form action="#" method="post">'+
                '<input type="text" name="search" class="text" value="糖醋排骨"/>'+
                '<input type="image" src="images/index_submit.png" class="submit search-btn"/>'+
            '</form>'+
        '</span>'+
        '<div class="control-block"></div>'+
                '<div id="login_h" class="login">'+
                    '<span>'+
                        '<div>'+
                            '<a href="#" class="login">用户名</a>'+
                        '</div>'+
                        '<div id="login_hide" class="hide">'+
                            '<ul>'+
                                '<li>'+
                                    '<a href="#">我要发布</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="#">我的小菜篮</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="#">个人设置</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="#">退出</a>'+
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                '</span>'+
           '</div>'+
    '</div>'+
'</div>';

$('html body').prepend(headHtml);

$('#header input.text').focus(function(){
    if ($(this).val() == "糖醋排骨"){
        $(this).addClass('text_focus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('糖醋排骨').removeClass('text_focus');
    }
})

$('#login_h').mouseover(function(){
    $('#login_hide').removeClass('hide');
}).mouseleave(function(){
    $('#login_hide').addClass('hide');
})

