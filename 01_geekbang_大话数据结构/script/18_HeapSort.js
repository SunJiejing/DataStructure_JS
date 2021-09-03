/*
 * @Descripttion: 
 */
// input: array
// output: ordered array
function heapSort(array) {
    if(!array || !array.length) return;
    let size = array.length;
    array = buildHeap(array, size);
    sort(array, size);
    array = array.splice(1);
    return array;  
}

// input array data starts from 0, but hear need to convert start from 1
function buildHeap(array, size) {
    array = [null].concat(array);
    for(let index = parseInt(size/2); index > 0; index-- ){
        heapify(array, size, index);
    }
    return array;
}

function heapify(array, size, index) {
    while(true){
        let position = index;
        if(2 * index <= size && array[2 * index] > array[index]) position = 2 * index;
        if(2 * index + 1 <= size && array[2 * index + 1] > array[position]) position = 2 * index + 1;
        if(position === index) break;
        [array[index], array[position]] = [array[position], array[index]];
        index = position;
    }
    
}

function sort(array, size) {
    let index = size;
    while(index > 1){
        [array[index], array[1]] = [array[1], array[index]];
        index--;
        heapify(array, index, 1);
    }

    
}




// Testing code
console.log(heapSort([4,14,23,15,1,2,5,16,22,11,10,4,5]));