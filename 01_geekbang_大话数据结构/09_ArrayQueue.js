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
// Update enqueue() by adding the element migration code snippets
    enqueue(item){
        if(this.tail === this.queue.length){
        if(this.head === 0){
            return false;
        }
        for(let i = this.head; i < this.tail; i++){
        this.queue[i - this.head] = this.queue[i];
        }
        this.tail -= this.head;
        this.head = 0;
        }
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }

    dequeue(){
        if(this.head === this.queue.length) return null;
        let item = this.queue[this.head];
        this.head++;
        return item;
    }

    
}
