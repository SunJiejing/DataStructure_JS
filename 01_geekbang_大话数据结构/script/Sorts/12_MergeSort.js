/*
* @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-03 22:32:14
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-03 23:31:34
 */

function mergeSort(array){
    if(!array || !array.length) return array;
    let len = array.length;
    return mergeSort_Split(array, 0, len - 1);
}

function mergeSort_Split(array, start, end){
    if(start >= end) return;
    let mid = parseInt((start + end) / 2);
    mergeSort_Split(array, start, mid);
    mergeSort_Split(array, mid + 1, end);
    return merge(array, start, mid, end);
}

function merge(array, start, mid, end){
    let tempArr = [];
    let index1 = start, index2 = mid + 1;
    while(index1 <= mid && index2 <=end ){
        if(array[index1] <= array[index2]){
            tempArr.push(array[index1++]);
        }else{
            tempArr.push(array[index2++]);
        }
    }
    // Firtly, assume that preivous array still left some items
    let leftStart = index1, leftEnd = mid;
    if(index2 <= end){
        leftStart = index2;
        leftEnd = end;
    }
    while(leftStart <= leftEnd){
        tempArr.push(array[leftStart++]);
    }
    // copy tempArr item's to array
    for(let tempIndex = 0; tempIndex <= end - start; tempIndex++){
        array[start + tempIndex] = tempArr[tempIndex];
    }

    

    return array;
}



// test code
let array = [4,6,2,1,4,5,7];
console.log(mergeSort(array));