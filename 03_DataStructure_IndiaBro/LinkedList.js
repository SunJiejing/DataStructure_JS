var Node = function(data){
    this.data = data;
    this.next = null;
}

var head = new Node(null);

// Inserting dataArray nodes at beginning
function insertElements(dataArray){
if(!dataArray || !dataArray.length){
    return head;
}
dataArray.forEach(element => {
    insert(element);
    print();
});
}

// insert a node to linkedList
function insert(data){
    var node = new Node(data);
    node.next = head.next;  
    head.next = node;
}

function print(){
    var temp = head.next;
    var outStr = "The linkedList is: ";
    while(temp){
        outStr += temp.data + " ";
        temp = temp.next;
    }
    console.log(outStr);
}

/* var datas = [3,6,8,10];
insertElements(datas); */

// insert node to n position
function insert2n(data, n){
    var node = new Node(data);
    if(n === 1){
        node.next = head.next;
        head.next = node;
        return;
    }
    var temp1 = head;
    for(let index = 0; index <= n-2;index++ ){
        temp1 = temp1.next;
    }
    node.next = temp1.next;
    temp1.next = node;
}

//add to the end
function add(data){
    var node = new Node(data);
    var temp = head;
    while(temp.next){
        temp = temp.next;
    }
    temp.next = node;
}

// delete a node of position n
function deleteAt(index){
    var temp = head;
    if(index === 1){
        temp = head.next;
       head.next = temp.next;
       return;
    }
    for(let n = 0; n < index -1; n++){
        temp = temp.next;
    }
    var temp1 = temp.next;
    temp.next = temp1.next;
    temp1.next = null;
}

// reverse link by loop
function reverseByLoop(){
    var current = head;
    var pre;
    var next;
    if(!head.next)return;
    current = current.next;
    while(current){
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    head.next = pre;

}

// print linklist in order or reverse order by recursion
function Insert(head, data){
    var temp = new Node(data);
    if(!head.next) {
        head.next = temp;
    }else{
        var temp1 = head.next;
        while(temp1.next){
            temp1 = temp1.next;
        }
        temp1.next = temp;
    }
    return head;
}

function print(head, printArray){
    if(!head.next){      
        printArray.push( head.data); 
        return printArray;
    }
    if(head.data){
        printArray.push( head.data);
    }   
    print(head.next, printArray);
}

function inversePrint(head, printArray){
    if(!head.next){      
        printArray.push( head.data); 
        return printArray;
    } 
    inversePrint(head.next, printArray);
    if(head.data){
        printArray.push( head.data);
    } 
}


var printArray = [];
function test(){
    // testing insert to the n function
    /* insert2n(1,1);
    insert2n(2,2);
    insert2n(3,1);
    print(); */

    // test delete element at position n
    /* add(1);
    add(2);
    add(3);
    add(4);
    print();
    deleteAt(4);
    print();
    deleteAt(1);
    print(); */

    // test reverse
    /* add(1);
    add(2);
    add(3);
    add(4);
    print();
    reverseByLoop();
    print(); */

    // test print(head)
    var head = new Node();
    head = Insert(head, 1);
    head = Insert(head, 2);
    head = Insert(head, 3);
    head = Insert(head, 4);
  
    print(head, printArray);
    console.log(printArray);
    printArray = [];
    inversePrint(head, printArray);
    console.log(printArray);
}