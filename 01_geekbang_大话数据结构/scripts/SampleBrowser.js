/*
 * @Descripttion: 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-05 22:58:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-13 22:50:40
 */
import { LinkedStack } from "./LinkedStack.js.js";


class SampleBrowser{
    constructor(){
        this.normalStack = new LinkedStack();
        this.backStack = new LinkedStack();
    }

    normalPush(name){
        this.normalStack.push(name);
        this.backStack.clear();
        this.displayAllStacks();
    }

    goHead(){
        let link = this.backStack.pop();
        if(link !== -1){
            this.normalStack.push(link);
            this.displayAllStacks();
        }else{
            console.log("Already reach the very first.")
        }
    }

    goBack(){
        let link = this.normalStack.pop();
        if(link !== -1){
            this.backStack.push(link);
            this.displayAllStacks();
        }else{
            console.log("Cannot go back!")
        }
    }

    displayAllStacks(){
        console.log("------前进stack元素---------");
        this.normalStack.disPlay();
        console.log("------后退stack元素---------");
        this.backStack.disPlay();
    }



}
