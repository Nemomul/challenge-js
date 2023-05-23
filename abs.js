var num = -500

function isPositive (num){
    if (num <= -1)
        return false
    else 
        return true
}

function abs (num){
    if (isPositive(num))
        return num
    else
        ValueNum = num * -1
        return ValueNum 
}

console.log(isPositive(num))
console.log(abs(num))