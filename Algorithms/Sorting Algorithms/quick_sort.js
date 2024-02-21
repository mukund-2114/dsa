const quickSort = (arr)=>{
    if(arr.length < 2){
        return arr;
    }
    var pivot= arr[arr.length-1]
    let left = []
    let right = []
    for(var i=0; i<arr.length-1; i++){
        if(arr[i]> pivot){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([5,3,62,41,8]))