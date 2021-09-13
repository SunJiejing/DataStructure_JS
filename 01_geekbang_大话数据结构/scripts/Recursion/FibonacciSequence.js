/*
 * @Descripttion: Fibonacci Sequence: 0 1 1 2 3 5 
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-24 16:37:16
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-24 18:04:00
 */

 function fibonacci(n){   
     return n === 0 ? 0: (n === 1 ? 1: fibonacci(n - 1) + fibonacci(n - 2));
 }

 function fibArray(n){
     let result = [];
     for(let i = 0; i <= n; i++){
         result.push(fibonacci(i));
     }
     return result;
 }

 // Testing code

 console.log(fibArray(1));
 console.log(fibArray(2));
 console.log(fibArray(10));