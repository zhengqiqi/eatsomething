var menuHtml = '<div class="menu">'+
      '<ul>'+
        '<div class="menu-each menu-published">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="./published.html">我发布的菜</a>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">评论们</a>'+
            '<ul class="hide hide-show">'+
              '<li><a href="#">我收到的评论</a></li>'+
              '<li><a href="#">我发布的评论</a></li>'+
            '</ul>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each menu-collection">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="./collection.html">收藏列表</a>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each menu-praise">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="./praise.html">我赞过的菜</a>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">我的菜篮子</a>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">我的信息我做主</a>'+
          '</li>'+
        '</div>'+
      '</ul>'+
    '</div>';

$('#menu-div').prepend(menuHtml);

$('#menu-div .menu-each').mouseover(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover');
    $this.children('.point-div').addClass('point-div-hover');
}).mouseleave(function(){
    var $this = $(this);
    $this.removeClass('menu-each-hover');
    $this.children('.point-div').removeClass('point-div-hover');
});

$('#menu-div .menu-li').mouseover(function(){
    var $this = $(this);
    $this.children('ul').removeClass('hide');
}).mouseleave(function(){
    var $this = $(this);
    $this.children('ul').addClass('hide');
});