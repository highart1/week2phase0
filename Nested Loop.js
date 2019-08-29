console.log('Soal 1');
var Loop1 = 5;
for (var i = 5; i > 0; i--){
    console.log('*')
}

console.log('soal 2');
var Loop2 = 5;
for (var i = 0; i < rows2; i++){
  var gabungBintang = "";
  for (var j = 0; j < rows2; j++){
    gabungBintang += '*';
  }
  console.log(gabungBintang);
}

console.log('soal 3');
var Loop3 = 5;
for (var i = 1; i <= rows3; i++){
  var gabungBintang = "";
  for (var j = 0; j < i; j++){
    gabungBintang += '*';
  }
  console.log(gabungBintang);
}