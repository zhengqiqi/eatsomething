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
              '<div>评论们</div>'+
              '<ul class="hide hide-show">'+
                '<a href="#"><li><div>我收到的评论</div></li></a>'+
                '<a href="#"><li><div>我发布的评论</div></li></a>'+
              '</ul>'+
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
          '<a href="#">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>我的菜篮子</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
        '<div class="menu-each">'+
          '<a href="#">'+
            '<div class="point-div"></div>'+
            '<li class="menu-li">'+
              '<div>我的信息我做主</div>'+
            '</li>'+
          '</a>'+
        '</div>'+
      '</ul>'+
    '</div>';

$('#menu-div').prepend(menuHtml);

$('#menu-div .menu-each').mouseover(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover');
    $this.find('.point-div').addClass('point-div-hover');
}).mouseleave(function(){
    var $this = $(this);
    $this.removeClass('menu-each-hover');
    $this.find('.point-div').removeClass('point-div-hover');
});

$('#menu-div .menu-comment').mouseover(function(){
    var $this = $(this);
    $this.find('ul').removeClass('hide');
}).mouseleave(function(){
    var $this = $(this);
    $this.find('ul').addClass('hide');
});