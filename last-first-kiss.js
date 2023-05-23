let arr = [2,5,8,4,5]

function first (arr){
    return arr[0]
}
function last (arr){
    return arr[arr.length-1]
}
function kiss (arr){
    return arr = [last(arr),first(arr)]
}
console.log(kiss(arr))
