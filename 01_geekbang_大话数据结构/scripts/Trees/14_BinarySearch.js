/*
 * @Descripttion: array should be an ordered array
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-12 23:07:17
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-12 23:50:43
 */

 let baseBinarySearch = (array, value)=>{
     if(!array || !array.length) return -1;
     let left = 0, right = array.length - 1;
     let time = 0;
     while(left <= right){
         time++;
        let mid = left + ((right - left) >>1);
        if(value == array[mid]){
            console.log(time);
            return mid;
        }else if(value < array[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
     }
     console.log(time);
     return -1;
 }

// The second way by recursion

let binarySearch_recursion = (array, value) =>{
    if(!array || !array.length) return -1;
    let min = 0, max = array.length - 1;
    return (recursionBiSearch(array, min, max, value));
}

let recursionBiSearch = (array, min, max, value) =>{
    if(min >= max){
        return -1;
    }
    let mid = min + ((max - min) >> 1);
    if(array[mid] == value){
        return mid;
    }else if(array[mid] < value){
        return recursionBiSearch(array, mid + 1, max, value);
    }else{
        return recursionBiSearch(array, min, mid - 1, value);
    }
}



 // Testing code
 let array = [];
  for(let index = 0; index < 10000; index++){
      array.push(index + 1);
  }

  console.log(baseBinarySearch(array, 4509));
  console.log(binarySearch_recursion(array, 4509));
