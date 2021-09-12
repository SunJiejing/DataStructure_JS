class Node{
    data;
    next;
    constructor(num){
        this.data = num;
        this.next = null;
    }
}

class LinkedQueue{
    head;tail;size;
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(num){
        let node = new Node(num);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;       
        }
        this.size++;
    };
    get(index){
        let temp = 0;
        let tempNode = this.head;
        while(temp !== index){
            tempNode = tempNode.next;
            temp++;
        }
        return tempNode.data;
    }
    // poll() only pops the head node of queue
    poll(){
        if(!this.head){
            return null;
        }
        let data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }
}


class Graph {
    size; adjacentLists; path;
    constructor(size) {
        this.size = size;
        this.adjacentLists = new Array(this.size);
        for (let index = 0; index < this.size; index++) {
            this.adjacentLists[index] = new LinkedQueue();
            this.adjacentLists[index].add(index);
        }

    }

    addEdge(startPoint, toPoint){
        this.adjacentLists[startPoint].add(toPoint);
        this.adjacentLists[toPoint].add(startPoint);
    }

    bfs(start, end){
        let outStr = "";
        if(start === end) return;
        let visited = new Array(this.size);
        let prev = new Array(this.size);
        let queue = new LinkedQueue();
        visited[start] = true;
        queue.add(start);
        // 1. init the prev;
        for(let i = 0; i < this.size; i++){
            prev[i] = -1;
        }

        while(queue.size){
            let current = queue.poll();
            for(let index = 0; index < this.adjacentLists[current].size; index++){
                let point = this.adjacentLists[current].get(index);
                if(!visited[point]){
                    prev[point] = current;
                    if(point === end){
                        print(prev, start, point);
                        return this.path;
                        
                    }
                    visited[point] = true;
                    queue.add(point);
                }
            }
        }

        // An internal method so that only can be used by bfs method.
        function print(prev, start, point){
            if(prev[point] != -1 && start != point){
                print(prev, start, prev[point]);
            }
            // Todo here should pass out a concated string.
            console.log(point + ", ");
        }
    }

}




// Test cases
// step1. Build graph
function test(){
    let graph = new Graph(8);
    buildEdge(graph);
    let path = graph.bfs(0,6);
    console.log(path);
    debugger;
}


function buildEdge(graph){
    graph.addEdge(0,1);graph.addEdge(0,3);
    graph.addEdge(1,2); graph.addEdge(1,4);
    graph.addEdge(2,5);
    graph.addEdge(3,4);
    graph.addEdge(4,5);graph.addEdge(4,6);
    graph.addEdge(5,7);
    graph.addEdge(6,7);
}


