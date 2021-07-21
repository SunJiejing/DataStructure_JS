<!--
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-21 22:27:12
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-21 23:00:35
-->

 # LinkedQueue
 >There should be two classes, one for the linked Node, and the other for LinkedQueue
 Please refer to [Here](script/09_LinkedQueue.js)

 ###

 **The Node Class**

 ```
class Node{
     constructor(data){
         this.data = data;
         this.next = null;
     }
 }

 ```

**The Linked Class**
```
class LinkedQueue{
     constructor(){
         this.queue;
         this.head;
         this.tail;
     }

     enqueue(data){
         if(!this.head){
             this.queue = new Node(data);
             this.head = this.queue;
             this.tail = this.queue;
             return;
         }
         else{
             this.tail.next = new Node(data);
             this.tail = this.tail.next;
         }
     }

     dequeue(){
         if(!this.head){
             return -1;
         }
         let data = this.head.data;
         this.head = this.head.next;
         return data;
     }
 }
```
*Tips:* 
1. For the LinkedQueue, still need **tail** & **head** two pointers.
2. There should be **enqueue()** & **dequeue()** two methods for link queue.

*Quetions*
1. Running above code, when dequeue() a node from the queue, the *head* and *tail* infos are correctly changes, but the *queue* still includes the enqueued item, is that OK?
2. After dequeueing all of the items in queue, the *head* pointed to null, while the *queue* still includes all items, and the *tail* still pointed to the last item in queue, is that OK?

 