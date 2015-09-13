$('#centent .centent-left-menu-p').click(function(){
    var $this = $(this)
        $menuLiul = $this.parent().parent().siblings('.centent-left-menu-li-ul')
        $menuPoint = $this.siblings('.centent-left-menu-point')
    if($menuLiul.hasClass('hide')){
        $menuLiul.removeClass('hide');
        $menuPoint.addClass('centent-left-menu-point-on');
        $this.addClass('centent-left-menu-p-on')
    }else{
        $menuLiul.addClass('hide');
        $menuPoint.removeClass('centent-left-menu-point-on');
        $this.removeClass('centent-left-menu-p-on')
    }
})
