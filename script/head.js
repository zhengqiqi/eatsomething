define(function(require, exports, module) {

var $ = require('jquery');
/*var headHtml = 
'<div id="header">'+
    '<div id="head-top-2">'+
        '<a href="./index.html"><div class="head-top-title-2 title-color">做吃的</div></a>'+
        '<div class="head-top-title2-2 title-color">下厨不是件容易的事，每道菜都有它的脾气。</div>'+
        '<div class="head-top-search-2">'+
            '<form action="#" method="post">'+
                '<input type="text" name="search" class="head-top-search-text-2" value="糖醋排骨"/>'+
                '<input type="submit" class="submit head-top-search-btn-2" value="搜索"/>'+
            '</form>'+
        '</div>'+
        '<div class="head-top-link-2 nologin hide">'+
                '<div class="head-top-link-each-2">'+
                    '<a href="./index.html"><div class="head-top-link-each-p-2 title-color">首页</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">分类大全</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-break-2">|</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">注册</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">登陆</div></a>'+
                '</div>'+
        '</div>'+
        '<div class="head-top-link-2 logined">'+
                '<div class="head-top-link-each-2">'+
                    '<a href="./index.html"><div class="head-top-link-each-p-2 title-color">首页</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">分类大全</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-break-2">|</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="./cooker-published.html"><div class="head-top-link-each-p-2 title-color">用户名</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">我要发布</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="./published.html"><div class="head-top-link-each-p-2 title-color">关于我的</div></a>'+
                '</div>'+
                '<div class="head-top-link-each-2">'+
                    '<a href="javascript:;"><div class="head-top-link-each-p-2 title-color">退出</div></a>'+
                '</div>'+
        '</div>'+
    '</div>'+
'</div>';*/
var headHtml = 
    '<div id="header">'+
        '<div class="header-row">'+
            '<a href="./index.html" class="logo">做吃的</a>'+
            '<div class="search">'+
                '<form action="#" method="post">'+
                    '<input type="text" placeholder="糖醋排骨" />'+
                    '<button>搜索</button>'+
                '</form>'+
            '</div>'+
            '<div class="conbtn">'+
                '<ul class="control">'+
                    '<a href="./index.html"><li>首页</li></a>'+
                    '<a href="./menu.html"><li>分类大全</li></a>'+
                '</ul>'+
                '<div class="vertical">|</div>'+
                '<ul class="control nologin2 hide">'+
                    '<a href="./index.html"><li>注册</li></a>'+
                    '<a href="./index.html"><li>登陆</li></a>'+
                '</ul>'+
                '<div class="control logined2">'+
                    '<div class="touser">'+
                        '<a href="./cooker-collection.html" class="user">用户名</a>'+
                        '<div class="touser-menu hide">'+
                            '<ul>'+
                                '<a href="./collection.html"><li>我的收藏</li></a>'+
                                '<a href="./basket-food.html"><li>我的菜篮子</li></a>'+
                                '<a href="./set.html"><li>设置我的信息</li></a>'+
                                '<a href="#"><li>退出</li></a>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<a href="./index.html"><div class="topublish">我要发布</div></a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

var footerHtml = 
    '<div id="footer">'+
        '<div class="footer-first">'+
            '<div class="footer-first-each"><a href="javascript:;">关于我们</a></div>'+
            '<div class="footer-first-each"><a href="javascript:;">意见反馈</a></div>'+
            '<div class="footer-first-each"><a href="javascript:;">服务条款</a></div>'+
        '</div>'+
        '<div class="footer-secend">'+
            '<div class="footer-secend-title">友情链接：</div>'+
            '<div class="footer-secend-each"><a href="http://www.xiachufang.com/">下厨房</a></div>'+
            '<div class="footer-secend-each"><a href="http://www.meishij.net/">美食杰</a></div>'+
            '<div class="footer-secend-each"><a href="http://www.meishichina.com/">美食天下</a></div>'+
            '<div class="footer-secend-each"><a href="http://www.douguo.com/">豆果美食</a></div>'+
        '</div>'+
    '</div>';

$('html body').prepend(headHtml);

$('html body').append(footerHtml);

$(function(){
    var windowWidth = $(window).width();
    $('#header').css({"width":windowWidth})
})

$('#header .touser').hover(function(){
    var $this = $(this);
    $this.find('.touser-menu').removeClass('hide');
    $this.find('.user').addClass('touser-hover');
}).mouseleave(function(){
    var $this = $(this);
    $this.find('.touser-menu').addClass('hide');
    $this.find('.user').removeClass('touser-hover');
})

$(function(){
    var headTop = $('#header');
    var topHeight = headTop.offset().top;      //获取头部对于页面顶部的距离
    var headWidth = headTop.width();
    $(window).scroll(function(){
        $this = $(this);
        var topScro = $this.scrollTop();      //获取滚动条距顶部的距离
//        var windowWidth = $this.width();
        if(topScro >= topHeight){
            $('#header').css({"position":"fixed", "top":0,});
            $('#content').css({"top": 52});
//            if(windowWidth >= headWidth){
//                $('#header').css({"position":"fixed", "top":0, "left":(windowWidth-headWidth)/2});
//            }else if (windowWidth < headWidth){
//                $('#header').css({"position":"fixed", "top":0,});
//            };
        }else if(topScro < topHeight){
            $('#header').css({"position":"static"});
        }
    })
})

})