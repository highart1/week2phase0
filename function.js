function shoutOut(){
    return "\"halo function!\""
}
console.log(shoutOut())

function calculateMultiply(num1,num2){
    return num1 * num2
    
}

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian)

function processSentence(name, age, address, hobby){
    return 'Nama Saya ' + name + ', umur saya ' + age + ', alamat saya ' + address + ', dan saya punya hobby yaitu ' + hobby

}

var fullSentence = processSentence('Agus', 30, 'Jln. Malioboro, Yogjakarta', 'gaming');
console.log(fullSentence)
