var menuHtml = '<div class="menu">'+
      '<ul>'+
        '<div class="menu-each class="menu-published">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">我发布的菜</a>'+
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
        '<div class="menu-each">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">收藏列表</a>'+
          '</li>'+
        '</div>'+
        '<div class="menu-each">'+
          '<div class="point-div"></div>'+
          '<li class="menu-li">'+
            '<a href="#">我赞过的菜</a>'+
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
    $(this).addClass('menu-each-hover');
    $(this).children('.point-div').addClass('point-div-hover');
}).mouseleave(function(){
    $(this).removeClass('menu-each-hover');
    $(this).children('.point-div').removeClass('point-div-hover');
});

$('#menu-div .menu-li').mouseover(function(){
    $(this).children('ul').removeClass('hide');
}).mouseleave(function(){
    $(this).children('ul').addClass('hide');
});