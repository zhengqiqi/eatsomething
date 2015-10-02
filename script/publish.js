/*var publishInputAdd = 
'<div class="publish-input-div-add">'+
    '<input class="publish-input-stuff-name" type="text" name="stuff" placeholder="食材" />'+
    '<input class="publish-input-stuff-num" type="text" name="number" placeholder="数量" />'+
    '<input class="publish-input-stuff-btn-add" type="button" name="button-add" />'+
    '<input class="publish-input-stuff-btn-sub" type="button" name="button-sub" />'+
'</div>';

$('#publish .publish-input-content').delegate(".publish-input-stuff-btn-add","click",function(){
    var $this = $(this)
    $this.parent().after(publishInputAdd);
})

$('#publish .publish-input-content').delegate(".publish-input-stuff-btn-sub","click",function(){
    var $this = $(this)
    $this.parent().remove();children().append(publishInputAdd2)
})*/

var publishInputAdd2 = 
'<tr>'+
    '<td class="food">'+
        '<input type="text" name="food" placeholder="食材"/>'+
    '</td>'+
    '<td class="food">'+
        '<input type="text" name="num" placeholder="数量"/>'+
    '</td>'+
'</tr>';

/*$('#publish .publish-content').delegate("button", "click", function(){
    var $this = $(this)
    $this.siblings().addClass('test');
})*/

$("#publish .publish-content button").click(function(){
    var $this = $(this)
    $this.siblings('table').append(publishInputAdd2)
})

var publishStepAdd = 
'<div class="publish-content">'+
    '<p>2</p>'+
    '<textarea class="step" type="text" name="step" placeholder="步骤描述"></textarea>'+
    '<img src="#" class="step-pic" name="pic" />'+
    '<div class="control">'+
        '<button>top</button>'+
        '<button>up</button>'+
        '<button>down</button>'+
        '<button>bottom</button>'+
        '<button>edit</button>'+
        '<button>del</button>'+
    '</div>'+
'</div>';
$("#publish .publish-basic .step-add").click(function(){
    var $this = $(this)
    $this.before(publishStepAdd)
})





