/*
 * @Descripttion: 
 */
class Heap{
    array;
    maxSize;
    count;
    constructor(capacity){
        this.array = new Array(capacity + 1);
        this.maxSize = capacity + 1;
        this.count = 0;
    }

    insert (value) {
        if(this.count == this.maxSize) return; // Means there is no more capacity to insert data;
        this.count++;
        this.array[this.count] = value;
        let index = this.count;
        let parentIndex = parseInt(index / 2);
        while(parentIndex > 0 && this.array[index] > this.array[parentIndex]){
            [this.array[index], this.array[parentIndex]] = [this.array[parentIndex], this.array[index]];
            index = parseInt(index / 2);
            parentIndex = parseInt(index / 2);
        }
    }

    // remove the max value in heap tree
    removeMax(){
       if(this.count === 0) return -1;  // Means there is no data to remove
       this.array[1] = this.array[this.count];
       this.count--;   // remove the last item
       this.heapify(this.array, this.count, 1);
    }

    heapify(array, maxSize, i){
        let position = i;
        while(true){
            if(2*i <= maxSize && array[i] < array[2*i]) position = 2*i;
            if(2*i + 1 <= maxSize && array[position] < array[2*i + 1]) position = 2*i + 1;
            if(position === i) break;
            [array[i], array[position]] = [array[position], array[i]];
            i = position;
        }
    }
    
}

// Testing code

function printHeapArray(heap) {
    let str = "";
    for (let index = 1; index < heap.maxSize + 1; index++) {
        if(heap.array[index]){
        str += heap.array[index] + ", ";
        }
    }
    str = str.split(0, str.length);
    return str;
}

var heap = new Heap(16);
var array = [33,17,21,16,13, 15, 9, 5, 6, 7, 8, 1, 2];
array.forEach(element => {
    heap.insert(element);
});
let str = printHeapArray(heap);
console.log(str);
heap.insert(22);
let str2 = printHeapArray(heap);
console.log(str2);

heap.removeMax();
let str3 = printHeapArray(heap);
console.log(str3);


