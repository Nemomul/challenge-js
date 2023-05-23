function sign (x) {
    if (x > 0) {
        return 1
    } else if (x < 0) {
        return -1
    } else {
        return 0
    }
}

function samesign (x, y) {
    if (x >= 0 & y >= 0) {
        return true
    } else if (x < 0 & y < 0) {
        return true
    } else {
        return false
    }
}
console.log(sign(5))
console.log(sign(-5))
console.log(sign(0))
console.log(samesign(5,8))
console.log(samesign(-5,-8))
console.log(samesign(-5,8))