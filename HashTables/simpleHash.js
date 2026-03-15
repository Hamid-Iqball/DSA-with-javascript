function hash(key, arrayLen){

let total =0
for(let char of key){
    let val = char.charCodeAt(0)-96
    total +=val
}
return total%arrayLen


}

//Only workd with strings
function hash2(key, arrayLen){

    let total =0
    let weird_prime =13
    for(let i=0; i<Math.min(key.length,100); i++){
        let char = key[i]
        let value = char.charCodeAt(0)-96
        total = total *weird_prime+value
    }

    return total%arrayLen
}


// console.log(hash2("blue",13))
// console.log(hash2("red",13))
// console.log(hash2("green",13))
// console.log(hash2("black",13))
// console.log(hash2("white",13))
// console.log(hash2("yellow",13))
