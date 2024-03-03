const mergeSort = (arr) => {
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    const mergeArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            mergeArr.push(left.shift())
        }
        else{
            mergeArr.push(right.shift())
        }
    }
    return [...mergeArr, ...left, ...right]
}

console.log(mergeSort([5,3,1,6,2,8]))