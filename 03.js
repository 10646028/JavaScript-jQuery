$('div').css('background','red');
$('.context').css('display','none');

$(document).ready(function(){
    $(".title").click(function(){
        $(".context").slideDown("slow");
    });
});