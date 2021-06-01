/*
 * @Author: web_XL
 * @Date: 2021-06-01 21:52:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-01 22:03:51
 * @Description: 
 */
import React, { useState } from 'react'

export default function App () {
  /**
   * useState 是一个函数 
   * hook
   * - 只能在函数最外层调用hook ，不要再循环，判断，子函数中调用
   * - 只能在react 函数中调用 不要再其他js函数中调用 
   * 参数 ：默认值
   * 返回值：为一个数组
   *  - 第一个值：定义的state变量
   *  - 第二个值：设置state 的方法 fn
   */
  const [num, setNum] = useState(90)
  console.log("ASdas");
  // react 严格模式下 render会执行两次 给你找出bug
  return (
    <div>
      <div>counter:{num}</div>
      <button onClick={e => setNum(num + 1)}>add</button>
      <button onClick={e => setNum(num - 1)}>sub</button>
    </div>
  )
}
