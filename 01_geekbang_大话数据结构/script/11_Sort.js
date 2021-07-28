/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-28 23:09:51
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-29 00:02:25
 */
function mySort(array){
    if( !array || !array.length ) return null;
    let temp;
    for(let index = 0; index < array.length - 1; index++){
      for(let index2 = index + 1; index2 < array.length; index2++){
          if(array[index] > array[index2]){
              temp = array[index];
              array[index] = array[index2];
              array[index2] = temp;
          }
      }
    }
    return array;
  }

function bubbleSort(array){
    if( !array || !array.length ) return null;
    var temp;
    for(let index1 = 0; index1 < array.length; index1++){
        for(let index2 = 0; index2 < array.length - index1 - 1; index2 ++){
            if(array[index2] > array[index2 + 1]){
                temp = array[index2];
                array[index2] = array[index2 + 1];
                array[index2 + 1] = temp;
            }
        }
    }
    return array;
}

  //Test Part
  var array1 = [5,4,6,2,7,1];
//   console.log(mySort(array1));
console.log(bubbleSort(array1));