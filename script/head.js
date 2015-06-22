var headHtml = '<div id="header">'+
    '<div class="headline">'+
        '<div class="headline_big"><a href="#" class="headline_big_a">御膳房</a></div>'+
        '<div class="headline_small"><p>下厨不是件容易的事，每道菜都有它的脾气。</p></div>'+
    '</div>'+
    '<div class="control">'+
        '<span class="search">'+
            '<form action="#" method="post">'+
                '<input type="text" name="search" class="text" value="糖醋排骨"/>'+
                '<input type="image" src="images/index_submit.png" class="submit search-btn"/>'+
            '</form>'+
        '</span>'+
        '<div class="login">'+
        '<ul>'+
            '<li>'+
                '<a href="#" class="login" id="username">用户名</a>'+
                '<ul class="login_hide">'+
                    '<li>'+
                        '<a href="#" class="login_hide_e">我要发布</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide_e">我收藏的</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide_e">我的小菜篮</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide_e">我发布的</a>'+
                    '</li>'+
                '</ul>'+
            '</li>'+
        '</ul>'+
       '</div>'+
    '</div>'+
'</div>';

$('html body').prepend(headHtml);

$('#header input.text').focus(function(){
    $(this).addClass('text_focus').val('');
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('糖醋排骨').removeClass('text_focus');
    }
})

$('#username').ready(function(){
    $('.login_hide').hide();
}).mouseover(function(){
    $('.login_hide').show();
})

$('.login_hide').mouseleave(function(){
    $('.login_hide').hide();
})

