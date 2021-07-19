/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-18 11:53:11
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-19 23:30:18
 */

class ArrayQueue{
    constructor(size){
        this.queue = new Array(size);
        this.head = 0;
        this.tail = 0;

    }

    enqueue(item){
        if(this.tail == this.queue.length) return false;
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }

    dequeue(){
        if(this.head == this.queue.length) return null;
        let item = this.queue[this.head];
        this.head++;
        return item;
    }

    
}