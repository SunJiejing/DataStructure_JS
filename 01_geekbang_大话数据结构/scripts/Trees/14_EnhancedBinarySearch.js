/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-15 18:51:40
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-15 19:53:26
 */
//  part 1, find the first expected value in array with repeated elements

function firstBinarySearch(array, value){
    if(!array || !array.length) return -1;
    let min = 0, max = array.length - 1;
    while(min <= max){
    let mid = min + ((max - min) >> 1);
    if(array[mid] < value){
        min = mid + 1;
    }else if(array[mid] > value){
        max = mid - 1;
    }else{
        if(mid == 0 || array[mid - 1] != value) return mid;
        max = mid - 1;
    }
    }
    return -1;
}

// Find the last one item which equals one element in array
function lastBinarySearch(array, value){
    if(!array || !array.length) return -1;
    let low = 0, high = array.length - 1;
    while(low <= high){
        let mid = low + ((high - low) >> 1);
        if(value < array[mid]){
            high = mid - 1;
        }else if(value > array[mid]){
            low = mid + 1;
        }else{
            if( mid == array.length - 1 || array[mid + 1] != value){
                return mid;
            }
        }
    }
    return -1;
}

// Find the first item which not less than specific value in array
function notLessSearchbyBinary(array, value){
    if(!array || !array.length) return -1;
    let low = 0, high = array.length - 1;
    while(low <= high){
        let mid = low + ((high - low) >> 1);
        if(array[mid] >= value){
            if(mid == 0 || array[mid - 1] < value) return mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return -1;
}

// Find the last item which not greater than specific value in array
function lastNotGreaterSearch(array, value){
    if(! array || !array.length) return -1;
    let low = 0, high = array.length - 1;
    while(low <= high){
        let mid = low + ((high - low) >> 1);
        if(array[mid] <= value){
            if(mid == array.length - 1 || value < array[mid + 1]) return mid;
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}

// Testing code
var array = [1,3,4,5,6,8,8,8,17,18];
console.log(firstBinarySearch(array, 8));
console.log(lastBinarySearch(array, 8));
console.log(notLessSearchbyBinary(array, 7),
            notLessSearchbyBinary(array,8),
            notLessSearchbyBinary(array, 9));

console.log(lastNotGreaterSearch(array, 8), lastNotGreaterSearch(array, 19));
