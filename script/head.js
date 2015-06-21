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
        '<select name="select' class="login">+
        '<option value="username">username</option>'+
        '<option value="public">to public</option>'+
        '<option value="collect">I collect</option>'+
        '<option value="cailan">my cailan</option>'+
        '<option value="publiced">I publiced</option>'+
        '</select>'+
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
