function mergeSort(array){
    let length = array.length;
    mergeSort_Split(array, 0, length - 1);
}

function mergeSort_Split(array, start, end){
    if(start >= end) return;
    let middle = (start + end) / 2;
    mergeSort_Split(array, start, middle);
    mergeSort_Split(array, middle + 1, end);
    merge(array,middle);
}

function merge(array, middle){
    // let array1 = array.slice(0, middle + 1);
    // let array2 = array.slice(middle + 1);
    let resArray = [];
    let index1 = 0, index2 = middle + 1;
    while(index1 <= middle && index2 <array.length){
        if(array[index1] <= array[index2]){
            resArray.push(array[index++]);
    
        }else{
            resArray.push(array[index2++]);           
       }
    };

    




}