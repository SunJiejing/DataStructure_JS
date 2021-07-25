/*
 * @Descripttion:   用递归来做数组全排列。
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-24 20:23:42
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-25 13:26:54
 */

// version 1, wrong
 function arrayPermutation(inputArray){
     let OutterArray = [];
     // 判空
     if(!inputArray || !inputArray.length) return OutterArray;
     // 递归终止边界
     if(inputArray.length === 1){
         OutterArray = [inputArray];
     };

     var length = inputArray.length;
         var finnalItem = inputArray[length - 1];
         var lastInputArray = inputArray.slice(0, length - 1);
         console.log(lastInputArray);
         var lastOutter = arrayPermutation(lastInputArray);
         var tempArray;
     for(let finnalItemPointer = 0; finnalItemPointer < length; finnalItemPointer++){
        //  tempArray[finnalItemPointer] = finnalItemPointer;
         for(let lastOutterPnt = 0; lastOutterPnt < lastOutter.length; lastOutterPnt++){
            let lastOutterItem = lastOutter[lastOutterPnt];
            let array1 = lastOutterItem.slice(0, finnalItemPointer);
            let array2 = lastOutterItem.slice(finnalItemPointer + 1);
            tempArray.concat(array1, finnalItem, array2);
            OutterArray.push(tempArray);
         }
     }
     return OutterArray;
 }

 


// version2
function arrayPermutation2(inputArray){
    

}



 // Test
 var input = ["a1", "a2", "a3"];
 console.log(arrayPermutation(input));
 