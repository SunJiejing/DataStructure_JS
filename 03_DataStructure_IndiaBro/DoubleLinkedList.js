/*
 * @Descripttion: 
 */
var Node = function(data){
    this.value = data;
    this.pre = null;
    this.next = null;
}

var head = null;


function insert2Head(data){
    var tempNode = new Node(data);
    if(!head){
        head = tempNode;
        return;
    }
    head.pre = tempNode;
    tempNode.next = head;
    head = tempNode;
}

function insert2Tail(data){
    var tempNode = new Node(data);
    if(!head){
        head = tempNode;
        return;
    }
    var temp = head;
    while(temp.next){
        temp = temp.next;
    }
    temp.next = tempNode;
    tempNode.pre = temp;
}

function print( printList){
    printList = [];
var temp = head;
while(temp){
    printList.push(temp.value);
    temp = temp.next;
}
return printList;
}

function reversePrint(reserveList){
    reserveList = [];
    var temp = head;
   if(!head ){
       return reserveList;
   }else if(!head.next){
      reserveList.push(head.value);
      return reserveList;
   }
    while(temp && temp.next){
        temp = temp.next;
    }
    while(temp){
        reserveList.push(temp.value);
       if(!temp.pre){
          return reserveList;
       }
        temp = temp.pre;
    }
    return reserveList;
    
}

function testDoubleLinkList(){
var printList = [], reserveList = [];
    insert2Head(2); console.log(print(printList));console.log(reversePrint(reserveList));
    insert2Head(4); console.log(print(printList));console.log(reversePrint(reserveList));
    
}