/*
 * @Descripttion: Implement a queue class by array, and should be a circular array
 */
var QueueByArray = function(data){
    this.tear = -1;
    this.front = -1; 
    this.maxSize = data;   
    this.array = new Array(this.maxSize);
}

QueueByArray.prototype.isEmpty = function(){
    if (this.tear === -1 && this.front === -1) return true;
    return false;
}

// Todo, for the circular array, should think clearly about the full situation
QueueByArray.prototype.isFull = function(){
    if((this.tear + 1)%this.maxSize === this.front) return true;
    return false;
}

QueueByArray.prototype.enQueue = function(data){
    if(this.isFull()) return "The Queue is full and cannot enqueue.";
    if(this.isEmpty()){
        this.front += 1;
        this.tear +=1;
    }else{
        this.tear = (this.tear + 1)%this.maxSize;
    }
    this.array[this.tear] = data;
}

QueueByArray.prototype.deQueue = function(){
    if(this.isEmpty()) return "The Queue is empty and no item can dequeue.";
    var result;
    if(this.front === this.tear){
        result = this.array[this.front];
        this.front = -1;
        this.tear = -1;
    }else{
        result = this.array[this.front];
        this.front = (this.front + 1)%this.maxSize;
    }
    return result;
}

// testing area
var queue = new QueueByArray(5);
queue.enQueue(2);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.deQueue();
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(3);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(5);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(7);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(9);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(11);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(13);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
queue.enQueue(15);
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.enQueue(17));
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
console.log(queue.deQueue());
console.log(queue.front, queue.tear, queue.isFull(), queue.isEmpty(), queue.array);
