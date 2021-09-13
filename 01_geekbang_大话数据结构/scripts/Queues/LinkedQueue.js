/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-21 22:32:18
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-21 22:53:01
 */

 class Node{
     constructor(data){
         this.data = data;
         this.next = null;
     }
 }

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