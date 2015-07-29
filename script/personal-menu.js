var menuHtml = '<div class="menu">'+
      '<ul>'+
        '<div class="menu-each menu-published">'+
          '<a href="./published.html">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>我发布的菜</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each menu-comment">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>评论</div>'+
              '<div class="hide hide-show">'+
                '<a href="#"><div>-->我收到的评论</div></a>'+
                '<a href="#"><div>-->我发布的评论</div></a>'+
              '</div>'+
            '</li>'+
        '</div>'+
        '<div class="menu-each menu-collection">'+
          '<a href="./collection.html">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>收藏列表</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each menu-praise">'+
          '<a href="./praise.html">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>我赞过的菜</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each">'+
          '<a href="./basket.html">'+
            '<div class="point-div"></div>'+
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