/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-09 23:30:10
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-10 00:06:52
 */


 function countingSort(array){
     if(!array || !array.length) return null;
     let len = array.length;
     // Step1. Get the max num in array
     let max = array[0];
     array.forEach(element => {
         if(element > max){
             max = element;
         }
     });
     // Step2. Generate a counting array to statistic each items count, and init each item in array
     let countArray = new Array(max + 1);  // the items of 0~max;
     for(let index = 0; index < max + 1; index++){
         countArray[index] = 0;   // the init value must be 0, as it represents the count of each item
     }

     for(let index2 = 0; index2 < len; index2++){
         countArray[array[index2]]++;
     }

     //Step3. Calc the total counts before each item by counting array itself
     for(let i = 1; i < max + 1; i++){
         countArray[i] += countArray[i - 1];
     }

     //Step4. Generate the sorted array from last item of the input array
     let sortedArray = new Array(len);
     for(index = len - 1; index >= 0; index--){
         let location = countArray[array[index]] - 1;
         sortedArray[location] = array[index];
         countArray[array[index]]--;
     }

     // Step5. Move all items in sorted array to the input array and returen the input array
     for(index = 0; index < len; index++){
         array[index] = sortedArray[index];
     }

     return array;
     
 }

 //Testing code
 let array = [2,5,3,0,2,3,0,3];
 console.log(countingSort(array));