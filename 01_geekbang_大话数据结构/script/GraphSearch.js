class Node{
    data;
    next;
    constructor(num){
        this.data = num;
        this.next = null;
    }
}

class LinkedList{
    head;
    constructor(){
        this.head = null;
    }
    add(num){
        let node = new Node(num);
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    };
    poll(){
        let node = this.head;
        if(!node) return null;
        this.head = node.next;
        return node.data;
        
    }
}


class Graph{
     size; adj;
     constructor(size){
         this.size = size;
         this.adj = new Array(this.size);
         for(let index = 0; index < this.size; index++){
             this.adj[index] = new LinkedList();
         }

     }
}

