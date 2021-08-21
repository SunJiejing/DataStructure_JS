/*
 * @Descripttion: 
 */

class Node{
    constructor(data){
        this.data = data;
        this.left;
        this.right;
    }
}

class BinaryFindTree{
    constructor(){
        this.root;
    }

    // Find specified value
    find(value) {
        let node = this.root;
        while(node){
            if(value === this.root.data) return node;
            value < node.data ? node = this.left : node = this.right; 
        }
        return null;
    }
    // when data < tree node, put into the left part, otherwise put into right part.
    // Which means there is no repeated data in binary search tree.
    insert(data){
        let node = new Node(data);
        if(!this.root){
            this.root = node;
            return;
        } 
        let point = this.root;
        while(point){
            if(data > point.data){
                if(!point.right){
                    point.right = node;
                    return;
                }
                point = point.right;
            }else{
                if(!point.left){
                    point.left = node;
                    return;
                }
                point = point.left;
            }
        }

    }
    // delete data
    delete(data){
        let pt = this.root;
        let parentPt;

        // step1. find point
        while(pt && pt.data != data){
            parentPt = pt;
            data > pt.data ? pt = pt.right : pt = pt.left;
        }
        if(!pt) return;
        // step2. category pt
        // when the deleted node has both left and right node
        if(pt.left && pt.right){
            let minPt = pt.right;
            let minParentPt = pt;
            while(minPt.left){
                minParentPt = minPt;
                minPt = minPt.left;
            }
            pt.data = minPt.data;
            pt = minPt;
            parentPt = minParentPt;
        }

        // when the deleted node only exists one child node
        let child;
        if(pt.left){
            child = pt.left;
        }else if(pt.right){
            child = pt.right;
        }

        if(!parentPt){
            this.root = child;
        }else if(parentPt.left === pt){
            parentPt.left = child;
        }else{
            parentPt.right = child;
        }
    }

    treeOrder(){
        let result = [];
        let node = this.root;
        this.inOrder(result, node);
        return result;
    }

    inOrder(array, node){
        if(!node) return;
        if(node.left) this.inOrder(array, node.left);
        array.push(node.data);
        if(node.right) this.inOrder(array, node.right);
    }
}


// Testing code
let datas = [33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55]
let tree = new BinaryFindTree();
for(let index = 0; index < datas.length; index++){
    tree.insert(datas[index]);
}

console.log(tree.treeOrder());
tree.delete(13);
console.log(tree.treeOrder());
tree.delete(18);
console.log(tree.treeOrder());