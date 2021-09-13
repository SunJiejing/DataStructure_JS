/*
 * @Descripttion: f(n) will return n! result.
 * @version: 
 * @Author: JessieSun
 * @Date: 2021-07-24 18:11:17
 * @LastEditors: JessieSun
 * @LastEditTime: 2021-07-24 18:16:58
 */

 function factorial(n){
     return n === 0 ? 0: n === 1 ? 1 : n * factorial(n-1); 
 }


 // Test
 console.log("0! : ", factorial(0));
 console.log("2! : ", factorial(2));
 console.log("4! : ", factorial(4));
 console.log("100! : ", factorial(100));