/*
 * @Descripttion: Complish a circular queue base on an array
 * @Author: JessieSun
 * @Date: 2021-07-22 23:19:23
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-22 23:57:33
 */

 class CircularQueue{
     constructor(n){
         this.queue = new Array(n);
         this.size = n;
         this.head = 0; //头下标
         this.tail = 0; //尾下标
     }

     enqueue(data){
         // 队列满时，无法再入队，故需判断队列满的情况
         if((this.tail + 1)%this.size === this.head) return false;
         this.queue[this.tail] = data;
         this.tail = (this.tail + 1) % this.size; 
         return true;
     }

     dequeue(){
         // 队列空时，则无法出队
         if(this.tail == this.head) return null;
         var data = this.queue[this.head];
         this.head = (this.head + 1) % this.size;
         return data;
     }
 }

 // test code
 var queue = new CircularQueue(6);
 console.log(queue.dequeue());  //  null;
queue.enqueue("0");
console.log(queue.tail);  // 1
for(let i = 0; i < 6; i++){   
    queue.enqueue("a" + i);
}   // The last item in array still kept "null", as circular queue array will have one item by empty when full.
console.log(queue.head, queue.tail); // 0,5

queue.dequeue();
queue.dequeue();
console.log(queue.head); //2
queue.enqueue("7");
console.log(queue.head, queue.tail) // 2,0
