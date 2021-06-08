/*
 * @Author: web_XL
 * @Date: 2021-06-07 15:24:40
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-07 15:47:48
 * @Description: 
 */
import React, { useState, useMemo, memo } from 'react'



const Child = memo((props) => {
  console.log("Child render");
  return (
    <div>
      <div>name:{props.info.name},age:{props.info.age}</div>
    </div>
  )
})



export default function App () {
  const [num, setNum] = useState(10)
  const [state, setState] = useState(true)
  console.log("render");

  /**
   * 点击switch 按钮也会造成子组件的重新渲染  每次都申明了新的info 对象
   */
  // const info = { name: "XL", age: 23 }

  /**
   * 使用useMemo 就可以有效的缓存数据  避免子组件的渲染
   */
  const info = useMemo(() => {
    console.log("useMemo");
    return { name: "XL", age: 23 }
  }, [])

  return (
    <div>
      <button onClick={e => setNum(num + 1)}>add</button>
      <button onClick={e => setState(!state)}>switch</button>
      <Child info={info}></Child>
    </div>
  )
}
