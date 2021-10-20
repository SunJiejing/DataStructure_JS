/*
 * @Descripttion: 字典树，典型应用场景是搜索引擎只能提醒
 */

 // TrieNode value can only support A~Z
 class TrieNode{
     data;
     children = new Array(25);
     isEndChar = false;
     constructor(value){
         this.data = value;
     }
 }

 class Trie{
     root = new TrieNode("/");

     insert(str) {
         let point = this.root;
         if(!str || !str.length) return;
         for(let index = 0; index < str.length; index++){
             let num = str[index].charCodeAt() - 'A'.charCodeAt();
             if(!point.children[num]){
                 let trieNode = new TrieNode(str[index]);
                 point.children[num] = trieNode;
             }
             point = point.children[num];
         }
         point.isEndChar = true;
         
     }

     find(str){
         let point = this.root;
         for(let index = 0; index < str.length; index++){
            let num = str[index].charCodeAt() - 'A'.charCodeAt();
            if(!point.children[num]){
                return false;
            }
            point = point.children[num];
         }
         return point.isEndChar ? true: false;
     }
 }



 // Testing code
 trie.insert("SHE");
 trie.insert("SHINE");
 trie.insert("HE");
 console.log(trie);
 console.log(trie.find("SHIN"));
console.log(trie.find("SHE"));
console.log(trie.find("HE"));


