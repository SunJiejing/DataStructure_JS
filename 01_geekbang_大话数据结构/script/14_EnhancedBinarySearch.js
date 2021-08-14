//  part 1, find the first expected value in array with repeated elements

function firstBinearSearch(array, value){
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



// Testing code
var array = [1,3,4,5,6,8,8,8,17,18];
console.log(firstBinearSearch(array, 8));
