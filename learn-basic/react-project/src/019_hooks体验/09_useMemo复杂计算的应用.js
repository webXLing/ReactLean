/*
 * @Author: web_XL
 * @Date: 2021-06-07 15:24:40
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-07 15:37:42
 * @Description: 
 */
import React, { useState, useMemo } from 'react'

function computedFn (params) {
  console.log("computedFn 重新计算");
  let res = 0
  for (let index = 0; index < params; index++) {
    res += index
  }
  return res
}

export default function App () {
  const [num, setNum] = useState(10)
  const [state, setState] = useState(true)
  console.log("render");
  let total = 0
  // state 发生改变  也会造成 整个函数的重新渲染
  //  total = computedFn()

  // 
  // 使用useMemo优化  只有当num发生改变 在重新计算
  // 相当于 componentDidUpdate 生命周期 vue 中的watch
  total = useMemo(() => {
    return computedFn(num)
  }, [num])

  return (
    <div>
      <h1>num:{total}</h1>
      <button onClick={e => setNum(num + 1)}>add</button>
      <button onClick={e => setState(!state)}>switch</button>

    </div>
  )
}
