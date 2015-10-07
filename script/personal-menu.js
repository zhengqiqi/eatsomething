define(function(require, exports, module){

var $ = require('jquery');
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
          '<a href="./comment-in.html">'+
            '<li class="menu-li">'+
              '<div>评论</div>'+
            '</li>'+
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
        '<div class="menu-each menu-basket">'+
          '<a href="./basket-food.html">'+
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

$('#substance .comment-div').mouseover(function(){
    $(this).addClass('comment-div-hover');
}).mouseleave(function(){
    $(this).removeClass('comment-div-hover');
})

})