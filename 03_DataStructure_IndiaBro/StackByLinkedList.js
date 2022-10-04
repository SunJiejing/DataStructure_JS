var Node = function(data){
    this.value = data;
    this.next = null;
}

var Stack = function(){
    this.top = null;
}
Stack.prototype.push = function(data){
var node = new Node(data);
if(!this.top){
    this.top = node;
    return;
}
node.next = this.top;
this.top = node;
}

Stack.prototype.pop = function(){
    if(!this.top) return null;
    var data = this.top.value;
    this.top = this.top.next;
    return data;
}

Stack.prototype.isEmpty = function(){
    return this.top ? true:false;
}

var LinkedList = function(){
    this.head = null;
}
LinkedList.prototype.insert = function(data){
    var node = new Node(data);
    if(!this.head){
        this.head = node;
        return;
    }
    node.next = this.head;
    this.head = node;
}
LinkedList.prototype.reverse = function(){
    if(!this.head) return null;
    var stack = new Stack();
    var temp = this.head;
    while(temp){
        stack.push(temp.value);
        temp = temp.next;
    }
    temp = stack.top;
    this.head = temp;
    stack.pop();
    while(!stack.isEmpty()){
        temp = stack.pop();
        
    }
    temp.next = null;
}


let st = new Stack();
st.push(1);
st.push(2);
console.log(st.pop());
console.log(st.pop());
console.log(st);
st.pop();
st.pop();
console.log(st);
st.push(5);
console.log(st);
st.push(10);
st.push(15);
console.log(st);

var linkedList = new LinkedList();
linkedList.insert(4);
linkedList.insert(6);
linkedList.insert(8);
console.log(linkedList);
linkedList.reverse();
console.log(linkedList);
