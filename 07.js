//eval() 裡的東西，會直接當成程式碼執行
var a="test";
eval("document.write(a)"); //text
//eval() 包括html標籤也可正常顯示
var b="<a href='#'>哈哈</a>";
eval("document.write(b)"); //顯示可點選的"哈哈"

//isNaN() 縮寫是not a number；辨識是否為數字，「不是」則回傳true；數字則回傳false
var c = isNaN("456");
var d = isNaN("哈");
document.write(c); //false
document.write(d); //true

//parseFloat() 回傳數字開始至非數字位置 
var e = parseFloat("111111dgwrghwew78945613");
var f = parseFloat("3.14159");
var g = parseFloat("7");
var h = parseFloat("fffffff");

document.write(e); //111111
document.write(f); //3.14159
document.write(g); //7
document.write(h); //NaN

//parseInt("字串", 進位模式) 轉換成10進位整數的資料形態並且回傳。
var i = parseInt("AA",16);
var j = parseInt("9",12);
document.write(i); //170
document.write(j); //09

//typeof() 檢查檢查變數的資料形態(number, string, boolean, object, function, undefined)
var k = typeof("123");
var l = typeof("A");
var m = typeof(123);
var n = typeof(false);
document.write(k); //string
document.write(l); //string
document.write(m); //number
document.write(n); //boolean
