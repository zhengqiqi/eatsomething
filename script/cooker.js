define(function(require, exports, module){

var $ = require('jquery');
$('#head-menu .head-each-p').mouseover(function(){
    $(this).parents().siblings('.head-each-line').removeClass('hide');
}).mouseleave(function(){
    $(this).parents().siblings('.head-each-line').addClass('hide');
})

})