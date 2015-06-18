var headHtml = '<div id="header">'+
    '<div class="headline">'+
        '<div class="headline_big"><a href="#">御膳房</a></div>'+
        '<div class="headline_small"><p>下厨不是件容易的事，每道菜都有它的脾气。</p></div>'+
    '</div>'+
    '<div class="control">'+
        '<span class="search">'+
            '<form action="#" method="post">'+
                '<input type="text" name="search" class="text" value="糖醋排骨"/>'+
                '<input type="image" src="images/index_submit.png" class="submit search-btn"/>'+
            '</form>'+
        '</span>'+
        '<span class="login">登录</span>'+
    '</div>'+
'</div>';

$('html body').prepend(headHtml);

$('html body input.text').focus(function(){
    $('.text').val('');
    $('.text').addClass('text_focus');
})
$('html body input.text').blur(function(){
    if (this.value==""){
    $('.text').val('糖醋排骨');
    $('.text').addClass('text');
    }
})
