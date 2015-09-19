$('#publish .publish-input-stuff-name').focus(function(){
    var $this = $(this)
    if ($this.val() == "食材"){
        $this.removeClass('text-unfocus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('食材').addClass('text-unfocus');
    }
})

$('#publish .publish-input-stuff-num').focus(function(){
    var $this = $(this)
    if ($this.val() == "数量"){
        $this.removeClass('text-unfocus').val('');
    }
}).blur(function(){
    var $this = $(this);
    if ($this.val() ==""){
        $this.val('数量').addClass('text-unfocus');
    }
})

var publishInputAdd=
'<div class="publish-input-div-add">'+
    '<input class="publish-input-stuff-name text-unfocus" type="text" name="stuff" value="食材" />'+
    '<input class="publish-input-stuff-num text-unfocus" type="text" name="number" value="数量" />'+
    '<input class="publish-input-stuff-btn-add" type="button" name="button-add" />'+
    '<input class="publish-input-stuff-btn-sub" type="button" name="button-sub" />'+
'</div>';

$('#publish .publish-input-stuff-btn-add').click(function(){
    var $this = $(this)
    $this.parent().parent().append(publishInputAdd);
})

$('#publish .publish-input-stuff-btn-sub').click(function(){
    var $this = $(this)
    $this.parent().remove()
})