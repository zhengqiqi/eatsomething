var menuHtml = '<div class="menu">'+
      '<ul class="ul-class">'+
        '<div class="menu-each menu-published">'+
          '<a href="./published.html">'+
            '<li class="menu-li">'+
              '<div>我发布的菜</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each menu-comment">'+
            '<a href="#" class="menu-li">'+
              '<div>评论</div>'+
              '<ul class="hide hide-show">'+
                '<li class="menu-li">我收到的评论</li>'+
                '<li class="menu-li">我发布的评论</li>'+
              '</ul>'+
            '</a>'+
        '</div>'+
        '<div class="menu-each menu-collection">'+
          '<a href="./collection.html">'+
            '<li class="menu-li">'+
              '<div>收藏列表</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each menu-praise">'+
          '<a href="./praise.html">'+
            '<li class="menu-li">'+
              '<div>我赞过的菜</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each">'+
          '<a href="./basket.html">'+
            '<li class="menu-li">'+
              '<div>我的菜篮子</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
      '</ul>'+
    '</div>';

$('#menu-div').prepend(menuHtml);

$('#menu-div .menu-each').mouseover(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover');
}).mouseleave(function(){
    var $this = $(this);
    $this.removeClass('menu-each-hover');
});

$('#menu-div .menu-comment').mouseover(function(){
    var $this = $(this);
    $this.find('.hide-show').removeClass('hide');
}).mouseleave(function(){
    var $this = $(this);
    $this.find('.hide-show').addClass('hide');
});

