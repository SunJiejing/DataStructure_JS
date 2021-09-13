/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-28 23:09:51
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-31 16:23:54
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
        let flag = false;
        for(let index2 = 0; index2 < array.length - index1 - 1; index2 ++){
            if(array[index2] > array[index2 + 1]){
                temp = array[index2];
                array[index2] = array[index2 + 1];
                array[index2 + 1] = temp;
                flag = true;
            }
        }
        if(flag === false){
        break; // Means there's no items switch, which means sort finished.
        }
    }
    return array;
}

function insertionSort(array){
    if(!array || !array.length) return null;
    let unsortedItem;
    for(let index1 = 1; index1 < array.length; index1++){
        unsortedItem = array[index1];
        let index2 = index1 - 1
        for(; index2 >= 0; index2--){
            if(array[index2] > unsortedItem){
                array[index2 + 1] = array[index2];
            }else{
                break;
            }
        }
        array[index2 + 1] = unsortedItem;
    }
    return array;
}

function selectionSort(array){
    if(!array || !array.length) return null;
    let temp;
    for(let index = 0; index < length; index++){
        for(let unIndex = index + 1; unIndex < length; unIndex++){
            if(array[index] > array[unIndex]){
                temp = array[index];
                array[index] = array[unIndex];
                array[unIndex] = temp;
            }
        }
    }
    return array;
    
}

  //Test Part
 var array1 = [5,4,6,2,7,1];
   console.log(mySort(array1));
   console.log(bubbleSort(array1));
   console.log(insertionSort(array1));
   console.log(selectionSort(array1));
