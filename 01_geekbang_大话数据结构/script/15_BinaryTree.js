/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-08-18 22:55:39
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-08-18 23:42:32
 */

 class BinaryNode{
     constructor(value){
         this.value = value;
         this.left;
         this.right;
     }
 }

function preOrder(output,root){
    if(!root) return;
    output.push(root.value);
    if(root.left) preOrder(output, root.left);
    if(root.right) preOrder(output, root.right);
}

function inOrder(output, root){
    if(!root) return;
    if(root.left) inOrder(output, root.left);
    output.push(root.value);
    if(root.right) inOrder(output, root.right);
}

function postOrder(output, root){
    if(!root) return;
    if(root.left) postOrder(output, root.left);
    if(root.right) postOrder(output, root.right);
    output.push(root.value);
}


// Testing code
//         root
//        /    \
//       a1     b1
//     /   \   /   
//    a2   b2 c2
//   /     /
//  a3    b3
let root = new BinaryNode("root");
// Depth 1
let a1 = new BinaryNode("a1");
let b1 = new BinaryNode("b1");
root.left = a1;
root.right = b1;
//Depth 2
let a2 = new BinaryNode("a2");
let b2 = new BinaryNode("b2");
let c2 = new BinaryNode("c2");
a1.left = a2;
a1.right = b2;
b1.left = c2;

// Depth 3
let a3 = new BinaryNode("a3");
let b3 = new BinaryNode("b3");
a2.left = a3;
b2.left = b3;

let result = [];
preOrder(result, root);
console.log(result);

result = [];
inOrder(result, root);
console.log(result);

result = [];
postOrder(result, root);
console.log(result);



