function bubble_sort(arr){
    for(i = 0; i < arr.length-1; i++){
        for(j=0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble_sort([5,3,1,2,6,7]))