/*
 * @Descripttion: 基于链表实现栈
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-03 17:01:23
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-05 22:57:35
 */

/**
 * @name: Node
 * @test: test font
 * @msg: 
 * @param {object} data;
 * @return {Node}
 */ 
class Node{
    constructor(data){
        this.element = data;
        this.next = null;
    }
}

/**
 * @name: LinkedStack
 * @test: test font
 * @msg: 
 * @param null;
 * @return {LinkedStack}
 */
class LinkedStack{
    constructor(){
        this.top = null;
    }

    /**
     * @name: 
     * @test: test font
     * @msg: 
     * @param {string | number} value
     * @return null;
     */    
    push(value){
        const node = new Node(value);
        if(this.top === null){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
    }

    /**
     * @name: 
     * @test: test font
     * @msg: 
     * @param null;
     * @return {number | string} value;
     */    
    pop(){
        if(this.top === null) return -1;
        const value = this.top.element;
        this.top = this.top.next;
        return value;
    }
    

    clear(){
        this.top = null;
    }

    display(){
        if(this.top !== null){
            let temp = this.top;
            while(temp !== null ){
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}