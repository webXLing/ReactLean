/*
 * @Author: web_XL
 * @Date: 2021-06-05 07:02:45
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-05 07:29:09
 * @Description: 
 */

// useCallback 用于性能优化 返回老的函数 不生成新的函数 
import React, { useState, useCallback } from 'react'
let oldFn1 = null
let oldFn2 = null

export default function App () {
  const [num, setNum] = useState(90)

  let Fn1 = () => {
    console.log("Fn1 执行了");
    setNum(num + 1)
  }
  console.log(Fn1 === oldFn1); // false  每次都生成了一个新的函数
  oldFn1 = Fn1


  // 产生了闭包拿的老的引用 90 初始值
  let Fn2 = useCallback(() => {
    console.log("Fn2 执行了");
    setNum(num + 1)
  }, [])

  console.log(Fn2 === oldFn2); // true  返回老的函数
  oldFn2 = Fn2


  const Fn3 = useCallback(() => {
    console.log("Fn3 执行了");
    setNum(num + 1)
  }, [num])

  const Fn4 = useCallback(() => {
    console.log("Fn4 执行了");
    setNum(num + 1)
  })
  return (
    <div>
      <div>counter:{num}</div>
      <button onClick={Fn1}>add</button>
      <button onClick={Fn2}>sub</button>
      <button onClick={Fn3}>sub</button>
      <button onClick={Fn4}>sub</button>


    </div>
  )
}
