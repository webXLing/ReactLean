/*
 * @Author: web_XL
 * @Date: 2021-06-08 10:03:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 10:17:35
 * @Description: 
 */
import React, { useRef, useState, useEffect } from 'react'

export default function App () {
  const [state, setState] = useState(0)
  // useRef 在整个声明周期里面 只会初始化一次
  // const numRef = useRef(state)

  // 通过useRef记录上一次渲染的值
  const numRef = useRef(state)
  useEffect(() => {
    console.log("useEffect");
    numRef.current = state
  }, [state])
  console.log("app");


  return (
    <div>
      {/* <div>numRef:{numRef.current}</div>
      <div>num:{state}</div> */}

      < div > num上一次的值: {numRef.current}</div >
      <div>num当前的值:{state}</div>

      <button onClick={e => { setState(state + 1) }}>add</button>
    </div>
  )
}
