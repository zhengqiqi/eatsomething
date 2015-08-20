var headHtml = 
'<div id="header">'+
    '<div id="header-top">'+
        '<div class="header-top-div onlogin hide">'+
            '<a href="javascript:;"><div class="header-top-btn header-top-btn-left">注册</div></a>'+
            '<a href="javascript:;"><div class="header-top-btn header-top-btn-right">登陆</div></a>'+
        '</div>'+
        '<div class="header-top-div logined">'+
            '<div><a href="javascript:;" class="header-top-btn header-top-btn-left header-top-name">用户名</a></div>'+
            '<div><a href="javascript:;" class="header-top-btn header-top-btn-right">退出</a></div>'+
            '<div class="header-top-name-hide hide">'+
                '<ul>'+
                    '<li><a href="javascript:;" class="header-top-hide-each">我要发布</a></li>'+
                    '<li><a href="./published.html" class="header-top-hide-each">我的信息</a></li>'+
                    '<li><a href="./set.html" class="header-top-hide-each">个人设置</a></li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="headline">'+
        '<div class="headline_big"><a href="./index.html" class="headline_big_a">做吃的</a></div>'+
        '<div class="headline_small">下厨不是件容易的事，每道菜都有它的脾气。</div>'+
    '</div>'+
    '<div class="control">'+
        '<div class="search">'+
            '<form action="#" method="post">'+
                '<input type="text" name="search" class="search-text" value="糖醋排骨"/>'+
                '<input type="submit" class="submit search-btn" value="搜索"/>'+
            '</form>'+
        '</div>'+
    '</div>'+
'</div>';

$('html body').prepend(headHtml);

$('#header .search-text').focus(function(){
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

$('#header-top .header-top-btn').mouseover(function(){
    $(this).addClass('header-top-btn-hover')
}).mouseleave(function(){
    $(this).removeClass('header-top-btn-hover')
})

$('#header-top .header-top-name').mouseover(function(){
    $(this).parent().siblings('.header-top-name-hide').removeClass('hide');
})

$('#header-top .logined').mouseleave(function(){
    $(this).children('.header-top-name-hide').addClass('hide')
})