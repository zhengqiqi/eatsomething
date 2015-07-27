$('#substance .dish_detail_del').click(function(){
    var r = confirm("真的要删我吗？")
    if(r == true){
        location.reload();
    }
})

$('#menu-div .menu-published').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-chick')
})

$('#substance a.dish_detail_btn').mouseover(function(){
    $(this).addClass('dish_detail_btn_hover');
}).mouseleave(function(){
    $(this).removeClass('dish_detail_btn_hover');
});

