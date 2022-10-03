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

let st = new Stack();
st.push(1);
st.push(2);
console.log(st.pop());
console.log(st.pop());
console.log(st);
st.pop();
st.pop();
console.log(st);