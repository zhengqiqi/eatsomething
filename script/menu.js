/*$('#menu').click(function(){
    window.open('menu-open.html',"height=500, width=700, toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no")
})*/
define(function(require, exports, module){

var $ = require('jquery');
$('#menu .menu-each-right-button').click(function(){
    $(this).parents('#menu').siblings('#menu-open').removeClass('hide');
})

})