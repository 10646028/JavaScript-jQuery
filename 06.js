//基礎相加函式
function add(a, b=15){
    return a + b;
}

//主程式
console.log(add(10,20)); //30
console.log(add(10)); //25
console.log(add()); //NaN

// 某變數的內容是匿名函式
var f = function(a, b=15){
    return a + b;
}
console.log(f(10,20)); //30
console.log(f(5)); //20

//直接執行匿名函式
var m = function(a, b=15){
    return a + b;
}(10,20);
console.log(m); //30

//將函式傳給另一函式
function ad (a, b=15, adder){
    return adder(a,b);
}
function adder (a,b){
    return a + b;
}
console.log(ad(1,2,adder)); //3

//使用箭頭函式
function add2(a, b=15, adder2){
    return adder2(a,b);
}
console.log(add(10,20, (x,y) => {return x + y})); //30


//接收不定個數參數的函式
'use strict'; // 使用嚴格模式, 使用的變數一定要事前宣告
function add3(...values) {
    var total = 0;
    for(let val of values) {
        total += val;
    }
    return total;
}
//------------------------------
// 主程式
//------------------------------
console.log(add3(10, 15, 13));       //38
console.log(add3(10, 15, 13, 24));   //62