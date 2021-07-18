/*
 * @Descripttion: 用数组实现一个顺序栈
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-06-22 23:12:19
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-03 16:59:54
 */

 /**
  * @name: 
  * @test: test font
  * @msg: 
  * @param {number} maxSize
  * @return {*}
  */

 var ArrayStack = function(maxSize){
     this.stack = [];
     this.count = 0;
     this.maxSize = maxSize;
 };

/**
 * @name: push
 * @test: test font
 * @msg: 
 * @param {string | number} item;
 * @return {boolean}
 */ 

 ArrayStack.prototype.push = function(item){
     // 数组空间不够了，直接返回false，入栈失败
     if(this.count == this.maxSize) return false;
     //将item 放到下标为count的位置，并且下标加1
     this.stack[this.count] = item;
     ++this.count;
     return true;
 }
 /**
  * @name: 
  * @test: test font
  * @msg: 
  * @param {*} null
  * @return {string | number} result;
  */
 ArrayStack.prototype.pop = function(){
     // 数组为空，直接返回null；
     if(this.count == 0) return null;
     // 返回下标为count - 1的元素，并且count减1
     var result = this.stack[this.count - 1];
     --this.count;
     return result;
 }


