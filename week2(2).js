console.log('LOOPING PERTAMA')
var index1 = 0;
while(index1 < 20){
    index1 += 2   
    console.log(index1 + ' - i love coding') 
}

console.log('LOOPING KEDUA')
var index2 = 22;
while(index2 > 2){
    index2 -= 2
    console.log(index2 + ' - i love coding')
}


var count = 1;
for(count; count<=20; count++){
    if(count <= 20){
        console.log(count + ' - i love coding')
    }
}

var count2 = 20;
for(var i = count2; i>=1; count2--){
    if(count2 >=1){
        console.log(count2 + ' - i will become fullstack developer')
    }
}

var counter = 1;
for(counter; counter<=100; counter++){
    if(counter % 2 == 0){
        console.log(counter + ' GENAP')
    }else if(counter % 2 != 0){
        console.log(counter + ' GANJIL')
    }
}

for (var counter = 1; counter <= 100; counter +=2){
    console.log(`counter sekarang = ${counter}`)
    if(counter % 3 == 0){
        console.log(`${counter} Kelipatan 3`)
    }else{
        console.log('')
    }
}

for (var counter = 1; counter <= 100; counter +=5){
    console.log(`counter sekarang = ${counter}`)
    if(counter % 6 == 0){
        console.log(`${counter} Kelipatan 6`)
    }else{
        console.log('')
    }
}

for (var counter = 1; counter <= 100; counter +=9){
    console.log(`counter sekarang = ${counter}`)
    if(counter % 10 == 0){
        console.log(`${counter} Kelipatan 10`)
    }else{
        console.log('')
    }
}

