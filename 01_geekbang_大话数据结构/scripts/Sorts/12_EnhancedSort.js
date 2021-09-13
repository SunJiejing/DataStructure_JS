/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-01 23:20:49
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-02 23:36:39
 */
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
    return array;
}

function merge(array, middle){
    // let array1 = array.slice(0, middle + 1);
    // let array2 = array.slice(middle + 1);
    let resArray = [];
    let index1 = 0, index2 = middle + 1;
    while(index1 <= middle && index2 <array.length){
        if(array[index1] <= array[index2]){
            resArray.push(array[index1++]);
    
        }else{
            resArray.push(array[index2++]);           
       }
    };
    let start = index1, end = middle;
    if(index2 < array.length){
        start = index2, end = array.length;  // end should be array.length or array.length-1 ?
    }

    while(start <= end){
        resArray.push(array[start++]);
    }

    for(let index = 0; index < resArray.length; index++){
        array[index] = resArray[index];
    }
    resArray = null;
    return array;
}




// Test code
var array = [4,7,2,3,5,2,14,13,23,10,9];
console.log(mergeSort(array));