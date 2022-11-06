/*
 * @Descripttion: 
 */
var BSTNode = function(data){
    this.value = data;
    this.left = null;
    this.right = null;
}


// First way, using some global valuable and methods
var root = null;

var insert = function(root, data){
    var node = new BSTNode(data);
    if(!root){
        return root = node;
    }else if(data > root.value){
        root.right = insert(root.right, data);
    }else{
        root.left = insert(root.left, data);
    }
    return root;
}

var search = function(root, data){
    if(!root) return false;
    if(data == root.value){
        return true;
    }else if(data > root.value){
        return search(root.right, data);
    }else{
        return search(root.left, data);
    }
}

// Second way, creating BSTree Class
var BSTree = function(){
    this.root = null;
}
BSTree.prototype.insert = function(root, data){
    var node = new BSTNode(data);
    if(!root) return root = node;
    if(data > root.value){
        root.right = insert(root.right, data);
    }else{
        root.left = insert(root.left,data);
    }
    return root;
}

BSTree.prototype.search = function(root, data){
    if(!root) return false;
    if(data == root.value) return true; 
    if(data > root.value){
        return search(root.right, data);
    }else{
        return search(root.left, data);
    }
}

BSTree.prototype.finMinByloop = function(root){
    if (!root) return "Empty tree";
    while(root.left){
        root = root.left;
    }
    return root.value;
}

BSTree.prototype.finMinByRecursion = function(root){
    if(!root) return "Empty tree";
    if(root.left){
        return this.finMinByRecursion(root.left);
    }
    return root.value;
}

BSTree.prototype.finMaxByloop = function(root){
    if(!root) return "Empty tree";
    while(root.right){
        root = root.right;
    }
    return root.value;
}

BSTree.prototype.finMaxByRecursion = function(root){
    if(!root) return "Empty tree";
    if(root.right){
        return this.finMaxByRecursion(root.right);
    }
    return root.value;
}




//Testing area
root = insert(root, 5);
console.log(root);
root =  insert(root, 10);
console.log(root);
root = insert(root, 15);
console.log(root);
root = insert(root, 3);
console.log(root);

console.log(search(root, 5));
console.log(search(root, 13));
console.log(search(root, 15));

var bst = new BSTree();
bst.root = bst.insert(bst.root, 12);
console.log(bst);
bst.root =  bst.insert(bst.root, 8);
bst.root = bst.insert(bst.root, 14);
bst.root = bst.insert( bst.root, 5);
console.log(bst);
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 10));
console.log(bst.finMinByloop(bst.root));
console.log(bst.finMinByRecursion(bst.root));
console.log(bst.finMaxByloop(bst.root));
console.log(bst.finMaxByRecursion(bst.root));

