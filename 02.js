//===============隱藏與顯示===============
/*$('button.show').hide("slow");
$('p.hide').click(function(){
    $('p').hide();
    $('button.show').show();
})
$('button.show').click(function(){
    $('p').show();
    $('button.show').hide();
})*/

$('button.show').hide();
$('p.hide').click(function(){
    $('p.hide').toggle();
    $('button.show').toggle();
})
$('button.show').click(function(){
    $('p.hide').toggle();
    $('button.show').toggle();
})

//===============淡入與淡出===============
$('div').css('background-color','yellow');
//將div上色，較容易觀察變化
$('.title').click(function(){
    $('.context').fadeToggle();
})
//當div.title被點擊時，div.context觸發fadeToggle();