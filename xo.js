function xo(str){
    var x =(str.split("x").length);
    var o =(str.split("o").length);

    if (x === o){
        return true
    }else{
        return false
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true