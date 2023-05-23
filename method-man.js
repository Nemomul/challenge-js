var x = 'exemple de fou malade'

function words (x){
    return x.split(" ")
}
function sentence (x){
    return words(x).join(" ")
}
function yell (x){
    return x.toUpperCase()
}
function whisper (x){
    return yell(x).toLowerCase()
}
function capitalize (x){
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

console.log(words(x))
console.log(sentence(x))
console.log(yell(x))
console.log(whisper(x))
console.log(capitalize(x))