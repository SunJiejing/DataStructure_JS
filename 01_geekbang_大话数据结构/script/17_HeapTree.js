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
        while(index/2 > 0 && this.array[index] > this.array[index]){
            [this.array[index], this.array[index/2]] = [this.array[index/2], this.array[index]];
            index = index / 2;
        }
    }
    
}

// Testing code
var heap = new Heap(16);
var array = [33,17,21,16,13, 15, 9, 5, 6, 7, 8, 1, 2];
array.forEach(element => {
    heap.insert(element);
});
let str = printHeapArray(heap);
console.log(str);
heap.insert(12);
let str2 = printHeapArray(heap);
console.log(str2);

function printHeapArray(heap) {
    let str;
    for (let index = 0; index < heap.array.length; index++) {
        str += heap.array[index] + " ,";
    }
    return str;
}

