var $price = 2000
var $fee = 150
var $discount = 0.5
var $total = $price*$discount+$fee
$('h1').text($total)
// 變數total可動態改變，並寫入h1這個元素裡
$('h2').text($total+50+"和1234")
// 數字相加直接用"+"連接；文字相連用"""

$('button').click(function(){
    $('button').text("已經按了按鈕");
})
// 當button被按下，執行以下function：將button的文字改成「已經按了按鈕」

$('p').click(function(){
    $(this).hide();
})
// 當p被點擊時，便隱藏