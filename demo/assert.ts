/*
 * @Author: your name
 * @Date: 2021-01-20 15:50:35
 * @LastEditTime: 2021-01-20 17:53:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\assert.ts
 */
let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}