function konversiMenit(menit) {
    var min = Math.floor(menit / 60);
    var sec = menit % 60;
    if (sec < 10){
        sec = "0" + sec
    }
    return min + ":" + sec;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00