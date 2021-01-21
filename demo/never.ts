/*
 * @Author: your name
 * @Date: 2021-01-20 15:18:22
 * @LastEditTime: 2021-01-20 15:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\never.ts
 */
type Foo = string | number ;

function never(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}