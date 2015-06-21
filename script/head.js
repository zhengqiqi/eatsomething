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
                '<a href="#" class="login" id="username">username</a>'+
                '<ul>'+
                    '<li>'+
                        '<a href="#" class="login_hide">public</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide">collect</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide">cailan</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="#" class="login_hide">publiced</a>'+
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
})

$('#username').mouseover(function(){
    $('.login_hide').show();
})
$('#username').mouseleave(function(){
    $('.login_hide').hide();
})