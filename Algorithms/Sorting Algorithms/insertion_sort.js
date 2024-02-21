// selection_sort.js
// Selection sort algorithm

const insertionSort = (arr) => {
    for( i= 1;i<arr.length;i++) {
        var noToInsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]> noToInsert){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=noToInsert;
        
    }    
    return arr;
};
  
console.log(insertionSort([7,8,5,2,4,6,3]))