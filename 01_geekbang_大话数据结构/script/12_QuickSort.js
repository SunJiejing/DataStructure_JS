/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-04 23:37:47
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-05 00:04:01
 */

 function quickSort(array){
     if(!array || !array.length) return;
     let len = array.length;
     return quickSort_Split(array, 0, len - 1);
 }

 function quickSort_Split(array, start, end){
     if(start >= end) return;
     let pivot = partition(array, start, end);
     quickSort_Split(array, start, pivot - 1);
     quickSort_Split(array, pivot + 1, end);
     return array;
 }

 function partition(array, start, end){
    //  let pivot = array[end];
     let leftIndex = start, rightIndex = start;
     for(;rightIndex <= end - 1; rightIndex++){
         if(array[rightIndex] < array[end]){
             swap(array, rightIndex, leftIndex);
             leftIndex++;
         }
     }
     swap(array, leftIndex, end);
     return leftIndex;
 }

 function swap(array, index1, index2){
     [array[index1], array[index2]] = [array[index2], array[index1]];
 }


 // Test
 let array = [6,1,3,5,7,2,4,9,11,8]
 console.log(quickSort(array));