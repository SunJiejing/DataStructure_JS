/*
 * @Descripttion: 
 */
/*
 * @Descripttion: 
 */
/*
 * @Descripttion: 
 */
/*
 * @Descripttion: 
 */
var BTNode = function(data){
    this.value = data;
    this.left = null;
    this.right = null;
}

var BinaryTree = function(){
    this.root = null;
}
BinaryTree.prototype.insert = function(root, data){
    if(!root) return root = new BTNode(data);
    if(data > root.value){
        root.right = this.insert(root.right, data);
    }else{
        root.left = this.insert(root.left,data);
    }
    return root;
}

// Broad first traversal
BinaryTree.prototype.levelTraversal = function(){
    if(!this.root) return;
    var queue = new Array();
    var result = [];
    queue.push(this.root);
    while(queue.length){
        let first = queue[0];
        if(first.left) queue.push(first.left);
        if(first.right) queue.push(first.right);
        queue.shift();
        result.push(first.value);
    }
    return result;
}

// Depth first traversal 
BinaryTree.prototype.preOrderTraveral = function(result, root){
    if(!root) return null;
    result.push(root.value);
    if(root.left) this.preOrderTraveral(result, root.left);
    if(root.right) this.preOrderTraveral(result, root.right);
    return result;
}

BinaryTree.prototype.inOrderTraversal = function(result, root){
    if(!root) return null;
    if(root.left) this.inOrderTraversal(result, root.left);
    result.push(root.value);
    if(root.right) this.inOrderTraversal(result, root.right);
    return result;
}

BinaryTree.prototype.postOrderTraversal = function(result, root){
    if(!root) return null;
    if(root.left) this.postOrderTraversal(result, root.left);
    if(root.right) this.postOrderTraversal(result, root.right);
    result.push(root.value);
    return result;
}

// Judge if a binary tree is binary search tree
BinaryTree.prototype.isBST = function(root){
    if(!root) return true;
    if(isSubTreeLesser(root.left, root.value) 
     &&isSubTreeGreater(root.right, root.value)
     && this.isBST(root.left)
     && this.isBST(root.right))
     return true;
    return false;
}
// The second judge binary tree method
BinaryTree.prototype.isBST2 = function(root, minValue, maxValue){
    if(!root) return true;
    if(root.value >= minValue
     &&root.value < maxValue
     && this.isBST2(root.left, minValue, root.value)
     && this.isBST2(root.right, root.value, maxValue))
     return true;
    return false;
}
// The third judge binary tree way, using inOrder way
BinaryTree.prototype.isBST3 = function(root){
    var result=[];
     result = this.inOrderTraversal(result, root);
    for(let index = 0; index < result.length - 1; index++){
        if(result[index] <= result[index+1]) continue;
        return false;
    }
    return true;
}

BinaryTree.prototype.deleteNode = function(root, data){
    if(!root) return root;
    if(data < root.value) root.left = this.deleteNode(root.left, data);
    else if(data > root.value) root.right = this.deleteNode(root.right, data);
    else{   // here means found the node to be deleted
        if(!root.left && !root.right){
            root = null;
        }else if(!root.left){
            root = root.right;
        }else if(!root.right){
            root = root.left;
        }else{ // means left & right sub-node both exists
            var temp = this.finMin(root.right);
            root.value = temp.value;
            root.right = this.deleteNode(root.right, temp.value);
        }

    }
    return root;   
}

BinaryTree.prototype.finMin = function(root){
    if(!root) return null;
    while(root.left) root = root.left;
    return root;
}
BinaryTree.prototype.find = function(root, data){
    if(!root) return null;
    if(data == root.value) return root; 
    if(data > root.value){
        return this.find(root.right, data);
    }else{
        return this.find(root.left, data);
    }
}
BinaryTree.prototype.findSuccessor = function(root, data){
    var current = this.find(root, data);
    if(!current) return null;
    if(current.right){
        var temp = this.finMin(current.right);
        return temp.value;
    }else{
        var successor = null;
        var ancestor = root;
        while(current != ancestor){
            if(current.value < ancestor.value){
                successor = ancestor;
                ancestor = ancestor.left;
            }else{
                ancestor = ancestor.right;
            }
        }
        return successor? successor.value:null;
    }
}


// util method
var isSubTreeLesser = function(root, value){
    if(!root) return true;
    if(root.value <= value
        && isSubTreeLesser(root.left, value)
        && isSubTreeLesser(root.right, value))
        return true;
    return false;
}

var isSubTreeGreater = function(root, value){
    if(!root) return true;
    if(root.value > value
        && isSubTreeGreater(root.left, value)
        && isSubTreeGreater(root.right, value))
        return true;
    return false;
}

//Testing code
var binaryTree = new BinaryTree();
var root = binaryTree.root;
binaryTree.root = binaryTree.insert(binaryTree.root,5);
binaryTree.root = binaryTree.insert(binaryTree.root,3);
binaryTree.root = binaryTree.insert(binaryTree.root,7);
binaryTree.root = binaryTree.insert(binaryTree.root,4);
binaryTree.root = binaryTree.insert(binaryTree.root,6);
binaryTree.root = binaryTree.insert(binaryTree.root,10);
binaryTree.root = binaryTree.insert(binaryTree.root,8);
binaryTree.root = binaryTree.insert(binaryTree.root,11);
console.log(binaryTree.levelTraversal());
var printResult = [];
console.log(binaryTree.preOrderTraveral(printResult, binaryTree.root));
printResult = [];
console.log(binaryTree.inOrderTraversal(printResult, binaryTree.root));
printResult = [];
console.log(binaryTree.postOrderTraversal(printResult, binaryTree.root));
console.log(binaryTree.isBST(binaryTree.root));
console.log(binaryTree.isBST2(binaryTree.root, -Infinity, Infinity));
console.log(binaryTree.isBST3(binaryTree.root));
console.log(binaryTree.findSuccessor(binaryTree.root, 7));
console.log(binaryTree.findSuccessor(binaryTree.root, 11));
console.log(binaryTree.deleteNode(binaryTree.root, 3));
console.log(binaryTree.deleteNode(binaryTree.root, 7));


// the first binary tree
//    8
//   /
//  6
// /
//4
var binaryTree2 = new BinaryTree();
binaryTree2.root = new BTNode(8);
let left = binaryTree2.root.left = new BTNode(6);
left.left = new BTNode(4);
console.log(binaryTree2.isBST(binaryTree2.root));
console.log(binaryTree2.isBST2(binaryTree2.root, -Infinity, Infinity));
console.log(binaryTree2.isBST3(binaryTree2.root));
console.log(binaryTree2.findSuccessor(binaryTree2.root, 4));
console.log(binaryTree2.findSuccessor(binaryTree2.root, 6));
console.log(binaryTree2.findSuccessor(binaryTree2.root, 8));
//  the second binary tree
//      10
//     /  \
//    5    16
//   / \
//  4   7
// /     \
//1       11
var node1 = new BTNode(1);
var node2 = new BTNode(4);
node2.left = node1;
var node3 = new BTNode(5);
node3.left = node2;
var node21 = new BTNode(7);
node21.right = new BTNode(11);
node3.right = node21;
var root = new BTNode(10);
root.left = node3;
root.right = new BTNode(16);
var binaryTree3 = new BinaryTree();
binaryTree3.root = root;
console.log(binaryTree3.isBST(binaryTree3.root));
console.log(binaryTree3.isBST2(binaryTree3.root, -Infinity, Infinity));
console.log(binaryTree3.isBST3(binaryTree3.root));

// the third binary tree
//     7
//    / \
//   4   9
//  / \
// 1   6
var node4 = new BTNode(4);
node4.left = new BTNode(1);
node4.right = new BTNode(6);
root = new BTNode(7);
root.left = node4;
root.right = new BTNode(9);
var binaryTree4 = new BinaryTree();
binaryTree4.root = root;
console.log(binaryTree4.isBST(binaryTree4.root));
console.log(binaryTree4.isBST2(binaryTree4.root, -Infinity, Infinity));
console.log(binaryTree4.isBST3(binaryTree4.root));
console.log(binaryTree4.findSuccessor(binaryTree4.root, 7));
console.log(binaryTree4.findSuccessor(binaryTree4.root, 4));
console.log(binaryTree4.findSuccessor(binaryTree4.root, 6));
console.log("Break");

root = new BTNode(5);
root.left = new BTNode(1);
var node5 = new BTNode(8);
node5.left = new BTNode(9);
node5.right = new BTNode(12);
root.right = node5;
var binaryTree5 = new BinaryTree();
binaryTree5.root = root;
console.log(binaryTree5.isBST(binaryTree5.root));
console.log(binaryTree5.isBST2(binaryTree5.root, -Infinity, Infinity));
console.log(binaryTree5.isBST3(binaryTree5.root));
