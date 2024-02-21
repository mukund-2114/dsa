function selection_sort(arr) {
    var n = arr.length;
    var min;
    for(var i = 0; i < n; i++) {
        min = i;
        for(var j = i+1; j < n; j++) {
            if(arr[j]< arr[min]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selection_sort([64, 25, 12, 22, 11]));