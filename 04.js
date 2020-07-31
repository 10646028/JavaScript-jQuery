$('div').css('background','red')
$('div').css('position','relative')
$('div').css('width', '100px',)

/*$('button.1').click(function(){
    $('div.1').animate({left:'150px'})
}); 

$('button.2').click(function(){
    $('div.2').animate({
        left: '300px',
        opacity: '0.5',
        height: '200px',
        width: '200px'
    })
})*/

/*$('button.1').click(function(){
    $('div.1').animate({left:'+=100px'})
});

$("button.2").click(function(){
    $("div.2").animate({
        height:'toggle'
    });
});*/

$(document).ready(function(){
    $('button.1').click(function(){
        $('div.1').animate({height:'300px', width:'300px'}, 5000);
    })
    $('.stop').click(function(){
        $('div.1').stop();
    })
})