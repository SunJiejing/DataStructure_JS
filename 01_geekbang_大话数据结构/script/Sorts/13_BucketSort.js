/*
 * @Descripttion: 
 * Step1. Create buckets.
 *       a. Get the min & max value for array of waiting for sorted
 *       b. Divide the buckets by (max - min)/ bucketSize
 *       c. Split array items into each buckets.
 * Step2. Insert sorting for each bucket.
 * 
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-10 23:52:10
 */

 function bucketSort(array, bucketSize){
     if(!array || !array.length) return null;
    //  if(array.length === 1) return array;
     var bucketsArray = getBuckets(array, bucketSize);
     return sortBuckets(bucketsArray);
 }

 function getBuckets(array, bucketSize){
     // Step 1.a
     let maxVal = array[0];
     let minVal = array[0];
     array.forEach(element => {
         if(element > maxVal){
             maxVal = element;
         }else if(element < minVal){
             minVal = element;
         }       
     });

     // Step 1.b
     let bucketsCount = Math.floor((maxVal - minVal)/bucketSize) + 1;
     let bucketsArray = [];
     for(let index = 0; index < bucketsCount; index++){
         bucketsArray[index] = [];
     }

     // Step 1.c
     array.forEach(element => {
         let bucketIndex = Math.floor((element - minVal) / bucketSize);
         bucketsArray[bucketIndex].push(element);
     });
     return bucketsArray;
 }

 function sortBuckets(bucketsArray){
     let sortedArray = [];
     for(let index = 0; index < bucketsArray.length; index++){
         insertSort(bucketsArray[index]);
         setSortedArray(sortedArray, bucketsArray[index]);
     }
     return sortedArray;
 }

 function insertSort(array){
     if(!array || !array.length) return null;
     let pivotItem;
     for(let uIndex = 1; uIndex < array.length; uIndex++){
         pivotItem = array[uIndex];
         let sortedIndex = uIndex - 1;
         for(; sortedIndex >= 0; sortedIndex--){
             if(array[sortedIndex] > pivotItem){
                 array[sortedIndex + 1] = array[sortedIndex];
             }else{
                 break;
             }
         }
         array[sortedIndex + 1] = pivotItem;
     }
     return array;
 }

 function setSortedArray(resultArray, bucketArray){
     if(!bucketArray || !bucketArray.length) return resultArray;
     for(let index = 0; index < bucketArray.length; index++){
         resultArray.push(bucketArray[index]);
     }
     return resultArray;
 }
 
 
 // Testing code
 var array = [23,14,5,17,26,1,0,20,15,11,28,9,14,2,26,29,19,3,11,22];
 console.log(bucketSort(array, 10));
