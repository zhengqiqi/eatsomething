$('#substance .dish_detail_del').click(function(){
    var r = confirm("真的要删我吗？")
    if(r == true){
        location.reload();
    }
})

$('#menu-div .menu-published').prepend(function(){
    var $this = $(this);
    $this.addClass('menu-each-hover')
    $this.children('.point-div').addClass('point-div-hover')
})